import Link from 'next/link'
import NavItem from './nav-item'

export default function Header({ logo, paths }) {
  return (
    <header>
      <div className="container mx-auto p-5">
        <div className="flex items-center justify-between h-10">
          <Link href="/">
            <a className="font-bold text-2xl leading-10">{logo}</a>
          </Link>
          <nav>
            <ul className="flex items-center">
              {
                paths.filter(({ slug }) => slug).map((props, _) => <NavItem {...props} />)
              }
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}
