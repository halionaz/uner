import GlobalStyleProvider from '@/lib/clients/Provider/GlobalStyleProvider'
import { MantineProvider } from '@mantine/core'
import { PropsWithChildren } from 'react'

const Provider = ({ children }: PropsWithChildren) => {
  return (
    <GlobalStyleProvider>
      <MantineProvider>{children}</MantineProvider>
    </GlobalStyleProvider>
  )
}
export default Provider
