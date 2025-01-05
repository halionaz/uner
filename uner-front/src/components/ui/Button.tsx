import { PropsWithChildren } from 'react'

interface Props extends PropsWithChildren {
  type?: 'submit' | 'reset' | 'button' | undefined
  onClick?: () => void
}
const Button = ({ children, onClick, type }: Props) => {
  return (
    <button onClick={onClick} type={type}>
      {children}
    </button>
  )
}

export default Button
