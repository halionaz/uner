import { useCallback, useEffect, useRef, useState } from 'react'

import { useSpeechSynthesis } from 'react-speech-kit'
import { WordInterface } from '@interface/types/word'
import { usePostCheckKoreanAnswer } from '@/features/vocabulary/apis/usePostCheckKoreanAnswer'
import Tooltip from '@/common/components/ui/Tooltip'
import Icons from '@/lib/assets/Icons'
import Input from '@/common/components/ui/Input'
import AnswerSheet from '@/features/vocabulary/components/WordQuestion/AnswerSheet'
import Button from '@/common/components/ui/Button'

interface Props {
  curWord: WordInterface
  goToNextWord: () => void
}
const WordQuestion = ({ curWord, goToNextWord }: Props) => {
  const [input, setInput] = useState('')
  const [answerState, setAnswerState] = useState<boolean | null>(null)
  const [description, setDescription] = useState('')

  const { mutate: checkInput, isPending } = usePostCheckKoreanAnswer()

  const speakFlag = useRef(false)
  const { speak, speaking } = useSpeechSynthesis()

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
    speakFlag.current = false
  }

  const handleSpeak = useCallback(() => {
    if (!speaking) speak({ text: curWord.english })
  }, [speak, curWord.english, speaking])

  useEffect(() => {
    if (!speakFlag.current) {
      handleSpeak()
      if (speaking) {
        speakFlag.current = true
      }
    }
  }, [speaking, handleSpeak])

  return (
    <div className="flex flex-grow flex-col items-center justify-center gap-20">
      <div className="flex items-baseline gap-4">
        <div className="font-serif text-7xl font-bold">{curWord.english}</div>
        <Tooltip contents="발음을 들어보세요!" position="right" maintenance={false}>
          <button onClick={handleSpeak}>
            <Icons.SoundIcon className="size-7" />
          </button>
        </Tooltip>
      </div>
      <form className="flex flex-col items-center gap-12" onSubmit={handleSubmit}>
        <div className="flex items-center gap-2">
          <Input
            className={`h-10 w-72 text-center text-xl font-semibold ${answerState === false && 'text-gray-light-2'}`}
            value={input}
            onChange={event => setInput(event.target.value)}
            disabled={isSubmit}
          />
          {isSubmit ? (
            isAnswer ? (
              <Tooltip contents={description} position="bottom">
                <Icons.QuestionCircleIcon />
              </Tooltip>
            ) : (
              <Icons.LoaderIcon />
            )
          ) : (
            <button>
              <Icons.MicrophoneIcon />
            </button>
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
