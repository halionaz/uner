import { useGetWords } from '@/features/admin/apis/useGetWords'

const WordsContents = () => {
  const { data } = useGetWords()

  return <div>Words</div>
}
export default WordsContents
