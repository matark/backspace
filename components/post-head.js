import dayjs from 'dayjs'

export default function PostHead({ title, time }) {
  return (
    <div className="leading-10 mb-4">
      <h1 className="font-bold text-3xl">{title}</h1>
      <div className="text-gray-500">Edited on {dayjs(time).format('LL')}</div>
    </div>
  )
}
