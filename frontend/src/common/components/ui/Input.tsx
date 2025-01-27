import { ForwardedRef, forwardRef } from 'react'

type Props = React.InputHTMLAttributes<HTMLInputElement>
const Input = forwardRef(({ className, ...props }: Props, ref: ForwardedRef<HTMLInputElement>) => {
  return <input ref={ref} className={`border-b border-black bg-white ${className}`} {...props} />
})

export default Input
