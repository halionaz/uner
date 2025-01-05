import { useEffect, useState } from 'react'
import { getEnglishWords, getKoreanGrading } from '@/hook'
import { Word } from '@/util/types/word'

function App() {
  const [wordList, setWordList] = useState<Word[]>([])
  const [curWordIndex, setCurWordIndex] = useState(0)
  const curWord = wordList[curWordIndex]

  const [input, setInput] = useState('')
  const [isAnswer, setIsAnswer] = useState<boolean | null>(null)
  const [description, setDescription] = useState('')

  useEffect(() => {
    // 단어 리스트 Fetching
    getEnglishWords({}).then(response => {
      setWordList(response.words)
    })
  }, [])

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (input !== '' && isAnswer === null) {
      getKoreanGrading({ givenWord: curWord.english, userPrompt: input }).then(({ is_answer, description }) => {
        setIsAnswer(is_answer)
        setDescription(description)
      })
    }
  }

  const goNext = () => {
    setInput('')
    setCurWordIndex(prev => prev + 1)
    setIsAnswer(null)
    setDescription('')
  }

  return (
    <>
      {wordList.length && (
        <div className="h-screen w-screen flex flex-col justify-center items-center gap-10">
          <div className="text-5xl font-bold font-serif">{curWord.english}</div>
          <form onSubmit={onSubmit}>
            <input value={input} onChange={event => setInput(event.target.value)} />
            {isAnswer === null && <button type="submit">submit</button>}
          </form>
          {isAnswer !== null && (
            <div className="flex flex-col items-center gap-2">
              <div className="flex flex-col items-center">
                <div>{isAnswer ? '맞았습니다' : '틀렸습니다'}</div>
                <button onClick={goNext}>다음 문제</button>
              </div>
              {isAnswer === true ? (
                description !== '' && <div>{description}</div>
              ) : (
                <div>
                  {curWord.definitions.map(val => (
                    <span>{val.definition}</span>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </>
  )
}

export default App
