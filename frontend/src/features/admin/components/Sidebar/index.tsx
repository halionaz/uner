import { Link, useLocation } from 'react-router-dom'

const Sidebar = () => {
  const { pathname } = useLocation()
  const curPage = pathname.slice(pathname.lastIndexOf('/'), pathname.length)
  console.log(curPage)

  return (
    <div className="flex w-56 flex-col items-stretch gap-10">
      <Link to={''}>
        <h1 className="mt-4 text-center font-serif text-xl font-bold">uner admin</h1>
      </Link>
      <div className="flex flex-col gap-4">
        <Link to={'words'} className={`${curPage === '/words' ? 'text-red' : 'text-black'}`}>
          단어 관리
        </Link>
        <Link to={'importance'} className={`${curPage === '/importance' ? 'text-red' : 'text-black'}`}>
          중요도 태그 관리
        </Link>
      </div>
    </div>
  )
}
export default Sidebar
