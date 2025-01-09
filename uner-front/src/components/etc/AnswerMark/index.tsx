interface Props {
  isAnswer: boolean
}
const AnswerMark = ({ isAnswer }: Props) => {
  return (
    <div className={`size-20 rounded-full ${isAnswer ? 'bg-green' : 'bg-red'} flex justify-center items-center`}>
      {isAnswer ? (
        <div className="bg-white size-12 rounded-full flex justify-center items-center">
          <div className="bg-green size-6 rounded-full" />
        </div>
      ) : (
        <div className="relative">
          <div className="fixed bg-white w-12 h-3 -translate-x-1/2 -translate-y-1/2 rotate-45"></div>
          <div className="fixed bg-white w-12 h-3 -translate-x-1/2 -translate-y-1/2 -rotate-45"></div>
        </div>
      )}
    </div>
  )
}

export default AnswerMark
