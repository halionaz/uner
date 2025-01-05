import { useState } from 'react'

import { getKoreanGrading } from '@/apis/vocabulary'
import { Word } from '@/util/types/word'
import Button from '@/components/ui/Button'

interface Props {
  curWord: Word
  goToNextWord: () => void
}
const WordQuestion = ({ curWord, goToNextWord }: Props) => {
  const [input, setInput] = useState('')
  const [answerState, setAnswerState] = useState<boolean | null>(null)
  const [description, setDescription] = useState('')

  const isAnswer = answerState !== null

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (input !== '' && !isAnswer) {
      getKoreanGrading({ givenWord: curWord.english, userPrompt: input }).then(({ is_answer, description }) => {
        setAnswerState(is_answer)
        setDescription(description)
      })
    }
  }

  const handleNextButton = () => {
    setInput('')
    setDescription('')
    setAnswerState(null)
    goToNextWord()
  }

  return (
    <div className="flex-grow flex flex-col justify-center items-center gap-10">
      <div className="text-5xl font-bold font-serif text-slate-900">{curWord.english}</div>
      <form onSubmit={onSubmit}>
        <input value={input} onChange={event => setInput(event.target.value)} />
        {!isAnswer && <Button type="submit">submit</Button>}
      </form>
      {isAnswer && (
        <div className="flex flex-col items-center gap-2">
          <div className="flex flex-col items-center">
            <div>{answerState ? '맞았습니다' : '틀렸습니다'}</div>
            <Button onClick={handleNextButton}>다음 문제</Button>
          </div>
          {answerState ? (
            description !== '' && <div>{description}</div>
          ) : (
            <div className="flex flex-row gap-1">
              {curWord.definitions.map((val, index) => (
                <span key={`definition-${val.partOfSpeech}-${index}`}>{val.definition}</span>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default WordQuestion
