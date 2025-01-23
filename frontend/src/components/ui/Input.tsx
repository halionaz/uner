type Props = React.InputHTMLAttributes<HTMLInputElement>
const Input = ({ className, ...props }: Props) => {
  return <input className={`border-b border-black bg-white ${className}`} {...props} />
}

export default Input
