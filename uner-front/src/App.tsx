import { useEffect, useState } from 'react'
import { getEnglishWords, getKoreanGrading } from '@/hook'
import { Word } from '@/util/types/word'

function App() {
  const [data, setData] = useState<Word[]>([])
  const [curWordIndex, setCurWordIndex] = useState(0)
  const curWord = data[curWordIndex]

  const [input, setInput] = useState('')
  const [canGoNext, setCanGoNext] = useState(false)
  const [response, setResponse] = useState('')

  useEffect(() => {
    console.log('실행')
    getEnglishWords({}).then(response => {
      setData(response.words)
    })
  }, [])

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (input !== '') {
      getKoreanGrading({ givenWord: curWord.english, userPrompt: input }).then(({ is_answer, description }) => {
        if (is_answer) setCanGoNext(true)
        setResponse(description)
      })
    }
  }

  const goNext = () => {
    setInput('')
    setCurWordIndex(prev => prev + 1)
    setCanGoNext(false)
    setResponse('')
  }

  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center gap-10">
      {data.length && (
        <>
          <div className="text-5xl font-bold font-serif">{curWord.english}</div>
          <form onSubmit={onSubmit}>
            <input value={input} onChange={event => setInput(event.target.value)} />
            <button className="border-0 border-gray-600" type="submit">
              submit
            </button>
          </form>
          {canGoNext && <button onClick={goNext}>다음 문제</button>}
          {response !== '' && <div>{response}</div>}
        </>
      )}
    </div>
  )
}

export default App
