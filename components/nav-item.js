import Link from 'next/link'

export default function NavItem({ title, slug }) {
  return (
    <li>
      <Link href={`/${slug}`}>
        <a className="font-bold text-lg leading-10">{title}</a>
      </Link>
    </li>
  )
}
