import { PropsWithChildren } from 'react'

const GlobalStyleProvider = ({ children }: PropsWithChildren) => {
  return <div className="bg-white text-black w-lvw h-lvh">{children}</div>
}

export default GlobalStyleProvider
