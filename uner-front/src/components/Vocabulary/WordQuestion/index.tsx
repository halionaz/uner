import { useState } from 'react'

import { Word } from '@/util/types/word'
import Button from '@/components/ui/Button'
import Input from '@/components/ui/Input'
import { usePostCheckKoreanAnswer } from '@/apis/vocabulary'
import Tooltip from '@/components/ui/Tooltip'
import Icons from '@/assets/Icons'
import AnswerSheet from '@/components/Vocabulary/WordQuestion/AnswerSheet'

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

  return (
    <div className="flex flex-grow flex-col items-center justify-center gap-10">
      <div className="font-serif text-7xl font-bold">{curWord.english}</div>
      <form className="flex flex-col items-center gap-4" onSubmit={handleSubmit}>
        <div className="flex items-center gap-2">
          <Input
            className="h-10 w-72 text-center text-xl font-semibold"
            value={input}
            onChange={event => setInput(event.target.value)}
            disabled={isSubmit}
          />
          {isSubmit ? (
            isAnswer ? (
              <Tooltip contents={<>{description}</>} position="bottom">
                <Icons.QuestionCircle />
              </Tooltip>
            ) : (
              <Icons.Loader />
            )
          ) : (
            <Icons.Microphone />
          )}
        </div>
        <div className="h-20">
          {isSubmit ? (
            isAnswer ? (
              <AnswerSheet
                answerState={answerState}
                definitions={curWord.definitions}
                handleNextButton={handleNextButton}
              />
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
