interface Props {
  isAnswer: boolean
}
const AnswerMark = ({ isAnswer }: Props) => {
  return (
    <div className={`size-16 rounded-full ${isAnswer ? 'bg-green' : 'bg-red'} flex items-center justify-center`}>
      {isAnswer ? (
        <div className="flex size-10 items-center justify-center rounded-full bg-white">
          <div className="size-6 rounded-full bg-green" />
        </div>
      ) : (
        <div className="relative">
          <div className="fixed h-2 w-10 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-white"></div>
          <div className="fixed h-2 w-10 -translate-x-1/2 -translate-y-1/2 -rotate-45 bg-white"></div>
        </div>
      )}
    </div>
  )
}

export default AnswerMark
