import Button from '@/components/ui/Button'

interface Props {
  goToNextWord: () => void
}
const Ready = ({ goToNextWord }: Props) => {
  return (
    <div className="h-full w-full flex justify-center items-center">
      <Button onClick={goToNextWord}>시작하기</Button>
    </div>
  )
}

export default Ready
