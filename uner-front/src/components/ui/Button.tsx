type Props = React.ButtonHTMLAttributes<HTMLButtonElement>
const Button = ({ className, ...props }: Props) => {
  return <button className={`border rounded-md border-slate-900 ${className}`} {...props} />
}

export default Button
