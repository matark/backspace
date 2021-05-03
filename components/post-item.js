import dayjs from 'dayjs'
import Link from 'next/link'

export default function PostItem({ title, slug, time }) {
  return (
    <li className="py-3">
      <time className="text-sm text-gray-600">{dayjs(time).format('ll')}</time>
      <h3>
        <Link href={`/${slug}`}>
          <a className="font-bold text-lg leading-10 underline truncate">{title}</a>
        </Link>
      </h3>
    </li>
  )
}
