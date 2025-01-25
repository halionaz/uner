import { PropsWithChildren } from 'react'

const ContentsWrapper = ({ children }: PropsWithChildren) => {
  return <div className="flex-grow">{children}</div>
}
export default ContentsWrapper
