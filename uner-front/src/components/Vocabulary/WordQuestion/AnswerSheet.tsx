import AnswerMark from '@/components/etc/AnswerMark'
import Button from '@/components/ui/Button'
import { Definition } from '@/util/types/word'

interface Props {
  answerState: boolean
  definitions: Definition[]
  handleNextButton: () => void
}
const AnswerSheet = ({ answerState, definitions, handleNextButton }: Props) => {
  const definitionCount = definitions.length
  return (
    <div className="flex h-20 w-[600px] flex-row items-center justify-between gap-2">
      <div className="flex flex-row items-center gap-4">
        <AnswerMark isAnswer={answerState} />
        <div className="flex flex-row items-center gap-1">
          {definitions.map((val, index) => {
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
  )
}

export default AnswerSheet
