type Props = React.ButtonHTMLAttributes<HTMLButtonElement>
const Button = ({ className, ...props }: Props) => {
  return <button className={`border rounded-md border-black ${className}`} {...props} />
}

export default Button
