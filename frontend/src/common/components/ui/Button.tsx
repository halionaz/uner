type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  isActive?: boolean
}

const Button = ({ isActive = false, className, ...props }: Props) => {
  return (
    <button
      className={`flex-grow p-2 ${isActive ? `bg-black text-white` : `border border-gray-light-2 bg-white text-black`} ${className}`}
      {...props}
    />
  )
}

export default Button
