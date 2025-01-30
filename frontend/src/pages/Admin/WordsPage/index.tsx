import { useGetWords } from '@/features/admin/apis/useGetWords'
import PostWordForm from '@/features/admin/components/PostWordForm'
import { useQueryParams } from '@/lib/hooks/useQueryParams'
import { WordsAdminPageParamsInterface } from '@/pages/Admin/WordsPage/types'

import * as s from './style.css'

const WordsPage = () => {
  const [params, setParams] = useQueryParams<WordsAdminPageParamsInterface>()
  const curWord = params.wordId

  const setCurWord = (wordId: string) => {
    setParams({ wordId })
  }

  const { data } = useGetWords()

  return (
    <div className={s.PageWrapper}>
      <div className={s.WordListWrapper}>
        <h2 className={s.Title}>단어 목록</h2>
        <ul className={s.WordList}>
          {data.map(word => (
            <li key={word.id}>
              <button onClick={() => setCurWord(word.id)}>{word.english}</button>
            </li>
          ))}
        </ul>
      </div>
      {!curWord && <PostWordForm />}
    </div>
  )
}
export default WordsPage
