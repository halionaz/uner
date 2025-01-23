import Button from '@/components/ui/Button'

interface Props {
  wordCount: number
  goToNextWord: () => void
}
const Ready = ({ wordCount, goToNextWord }: Props) => {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-4">
      <div className="flex flex-row items-center gap-1 text-5xl">
        <span className="text-7xl font-bold">{wordCount}</span>문제
      </div>
      <Button onClick={goToNextWord}>시작하기</Button>
    </div>
  )
}

export default Ready
