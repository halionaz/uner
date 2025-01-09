import { PropsWithChildren, useState } from 'react'

type PositionType = 'bottom' | 'left' | 'right' | 'top'

interface Props extends PropsWithChildren {
  contents: JSX.Element
  position: PositionType
}

const positionStyle: { [key in PositionType]: string } = {
  bottom: 'top-[calc(100%+5px)]',
  top: 'bottom-[calc(100%+5px)]',
  left: 'right-[calc(100%+5px)]',
  right: 'left-[calc(100%+5px)]',
}

const Tooltip = ({ children, contents, position }: Props) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleOpen = () => {
    setIsOpen(prev => !prev)
  }

  return (
    <>
      {isOpen && <div className="fixed left-0 top-0 z-0 h-lvh w-lvw" onClick={toggleOpen} />}
      <span className={`group/tooltip relative flex items-center justify-center`}>
        <button className="z-10 cursor-pointer" onClick={toggleOpen}>
          {children}
        </button>
        <div
          className={`${isOpen ? 'visible' : 'invisible group-hover/tooltip:visible'} absolute z-10 ${positionStyle[position]} max-h-[50lvh] w-[max-content] max-w-[50lvw] overflow-hidden overflow-ellipsis text-pretty bg-black px-2 py-1 text-white`}
        >
          {contents}
        </div>
      </span>
    </>
  )
}

export default Tooltip
