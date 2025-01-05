type Props = React.InputHTMLAttributes<HTMLInputElement>
const Input = ({ className, ...props }: Props) => {
  return <input className={`border rounded-md bg-stone-50 border-slate-900 ${className}`} {...props} />
}

export default Input
