import ContentsWrapper from '@/features/admin/components/Contents/ContentsWrapper'
import ImportanceContents from '@/features/admin/components/Contents/ImportanceContents'
import WordsContents from '@/features/admin/components/Contents/WordsContents'
import { AdminPageType } from '@/pages/AdminPage/types'

interface Props {
  curPage: AdminPageType
}
const Contents = ({ curPage }: Props) => {
  switch (curPage) {
    case 'words':
      return (
        <ContentsWrapper>
          <WordsContents />
        </ContentsWrapper>
      )
    case 'importance':
      return (
        <ContentsWrapper>
          <ImportanceContents />
        </ContentsWrapper>
      )
  }
}
export default Contents
