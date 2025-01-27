import { useGetWords } from '@/features/admin/apis/useGetWords'
import PostWordForm from '@/features/admin/components/Contents/WordsContents/PostWordForm'

const WordsContents = () => {
  const { data } = useGetWords()

  return (
    <div className="flex flex-row gap-10">
      <div className="flex w-40 flex-col items-stretch gap-5">
        <h2 className="text-center font-bold">단어 목록</h2>
        <ul className="flex flex-col gap-1">
          {data.map(word => (
            <li key={word.id}>{word.english}</li>
          ))}
        </ul>
      </div>
      <PostWordForm />
    </div>
  )
}
export default WordsContents
