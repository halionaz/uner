type Props = React.InputHTMLAttributes<HTMLInputElement>
const Input = ({ className, ...props }: Props) => {
  return <input className={`border rounded-md bg-white border-black ${className}`} {...props} />
}

export default Input
