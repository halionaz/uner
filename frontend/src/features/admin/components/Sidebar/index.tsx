import { AdminPageType } from '@/pages/AdminPage/types'

interface Props {
  curPage: AdminPageType
  handlePage: (page: AdminPageType) => void
}
const Sidebar = ({ curPage, handlePage }: Props) => {
  return (
    <div className="flex w-56 flex-col items-stretch gap-10">
      <button onClick={() => handlePage(undefined)}>
        <h1 className="mt-4 text-center font-serif text-xl font-bold">uner admin</h1>
      </button>
      <div className="flex flex-col gap-4">
        <button className={`${curPage === 'words' ? 'text-red' : 'text-black'}`} onClick={() => handlePage('words')}>
          단어 관리
        </button>
        <button
          className={`${curPage === 'importance' ? 'text-red' : 'text-black'}`}
          onClick={() => handlePage('importance')}
        >
          중요도 태그 관리
        </button>
      </div>
    </div>
  )
}
export default Sidebar
