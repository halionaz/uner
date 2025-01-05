interface Props {
  totalCount: number
  currentCount: number
}
const StatusBar = ({ totalCount, currentCount }: Props) => {
  const ratio = (currentCount + 1) / totalCount
  return (
    <div className="flex-grow-0 w-full h-3 bg-slate-200">
      <div className="h-full bg-orange-900 transition-all duration-200" style={{ width: `${ratio * 100}%` }}></div>
    </div>
  )
}

export default StatusBar
