import { useState } from 'react'

import { Word } from '@/util/types/word'
import Button from '@/components/ui/Button'
import Input from '@/components/ui/Input'
import { usePostCheckKoreanAnswer } from '@/apis/vocabulary'

interface Props {
  curWord: Word
  goToNextWord: () => void
}
const WordQuestion = ({ curWord, goToNextWord }: Props) => {
  const [input, setInput] = useState('')
  const [answerState, setAnswerState] = useState<boolean | null>(null)
  const [description, setDescription] = useState('')

  const { mutate: checkInput, isPending } = usePostCheckKoreanAnswer()

  const isAnswer = answerState !== null // 답변이 나왔는지
  const isSubmit = isAnswer || isPending // 제출이 완료된 상태인지

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (input !== '' && !isAnswer) {
      checkInput(
        { givenWord: curWord.english, userPrompt: input },
        {
          onSuccess: ({ is_answer, description }) => {
            setAnswerState(is_answer)
            setDescription(description)
          },
        },
      )
    } else {
      // TODO: input 없을 때 에러 처리
    }
  }

  const handleNextButton = () => {
    goToNextWord()

    setInput('')
    setDescription('')
    setAnswerState(null)
  }

  return (
    <div className="flex-grow flex flex-col justify-center items-center gap-10">
      <div className="text-5xl font-bold font-serif text-black">{curWord.english}</div>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <Input
          className="w-72 h-10 text-center"
          value={input}
          onChange={event => {
            setInput(event.target.value)
          }}
          disabled={isSubmit}
        />
        {!isSubmit && <Button type="submit">submit</Button>}
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
