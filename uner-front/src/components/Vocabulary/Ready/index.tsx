import Button from '@/components/ui/Button'

interface Props {
  wordCount: number
  goToNextWord: () => void
}
const Ready = ({ wordCount, goToNextWord }: Props) => {
  return (
    <div className="h-full w-full flex flex-col justify-center items-center gap-4">
      <div className="flex flex-row gap-1 text-5xl items-center">
        <span className="font-bold text-7xl">{wordCount}</span>문제
      </div>
      <Button onClick={goToNextWord}>시작하기</Button>
    </div>
  )
}

export default Ready
