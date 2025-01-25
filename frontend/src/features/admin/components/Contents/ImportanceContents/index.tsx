import { useGetImportance } from '@/features/admin/apis/useGetImportance'

const ImportanceContents = () => {
  const { data } = useGetImportance()

  return (
    <div className="flex flex-col gap-5">
      <h2>Importance 목록</h2>
      <ul className="flex flex-col gap-1">
        {data.map(val => (
          <li key={val.id}>{val.name}</li>
        ))}
      </ul>
    </div>
  )
}
export default ImportanceContents
