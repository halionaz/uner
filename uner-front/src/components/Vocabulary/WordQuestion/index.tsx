import { useState } from 'react'

import { Word } from '@/util/types/word'
import Button from '@/components/ui/Button'
import Input from '@/components/ui/Input'
import { usePostCheckKoreanAnswer } from '@/apis/vocabulary'
import AnswerMark from '@/components/etc/AnswerMark'

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
            if (!is_answer) setInput('')
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

  const definitionCount = curWord.definitions.length

  return (
    <div className="flex-grow flex flex-col justify-center items-center gap-10">
      <div className="text-7xl font-bold font-serif">{curWord.english}</div>
      <form className="flex flex-col gap-4 items-center" onSubmit={handleSubmit}>
        <Input
          className="w-72 h-10 text-center font-semibold text-xl"
          value={input}
          onChange={event => setInput(event.target.value)}
          disabled={isSubmit}
        />
        <div className="h-20">
          {isSubmit ? (
            isAnswer ? (
              <div className="flex flex-row items-center justify-between gap-2 w-[600px] h-20">
                <div className="flex flex-row items-center gap-4">
                  <AnswerMark isAnswer={answerState} />
                  <div className="flex flex-row gap-1">
                    {curWord.definitions.map((val, index) => {
                      return (
                        <span key={`definition-${val.partOfSpeech}-${index}`}>
                          {val.definition}
                          {index !== definitionCount - 1 && ','}
                        </span>
                      )
                    })}
                  </div>
                </div>
                <div className="flex flex-col items-center">
                  <Button onClick={handleNextButton}>다음 문제</Button>
                </div>
              </div>
            ) : (
              <div>답변을 기다리는 중 ...</div>
            )
          ) : (
            <Button type="submit">submit</Button>
          )}
        </div>
      </form>
    </div>
  )
}

export default WordQuestion
