interface Props {
  totalCount: number
  currentCount: number
}
const StatusBar = ({ totalCount, currentCount }: Props) => {
  const ratio = currentCount / totalCount
  return (
    <div className="h-3 w-full flex-grow-0">
      <div
        className="m-1 h-full bg-gray-light-2 transition-all duration-200"
        style={{ width: `calc(${ratio * 100}% - 0.5rem)` }}
      ></div>
    </div>
  )
}

export default StatusBar
