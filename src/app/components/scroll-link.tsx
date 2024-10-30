import { Link } from 'react-scroll'

interface Props {
  target: string
  title: string
  offset?: number
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}

export function ScrollLink({ target, title, offset, onClick }: Props) {
  return (
    <Link
      to={target}
      spy={true}
      smooth={true}
      duration={700}
      offset={offset}
      activeClass="active-link"
      className="cursor-pointer p-1 text-black duration-500 hover:text-blue-500"
    >
      <button
        onClick={onClick}
        className="bg-transparent p-1 focus:p-1"
        title={title}
      >
        {title}
      </button>
    </Link>
  )
}
