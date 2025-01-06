interface Props {
  totalCount: number
  currentCount: number
}
const StatusBar = ({ totalCount, currentCount }: Props) => {
  const ratio = currentCount / totalCount
  return (
    <div className="flex-grow-0 w-full h-3">
      <div
        className="h-full m-1 bg-gray-light-2 transition-all duration-200"
        style={{ width: `calc(${ratio * 100}% - 0.5rem)` }}
      ></div>
    </div>
  )
}

export default StatusBar
