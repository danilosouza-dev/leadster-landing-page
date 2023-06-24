import Link from 'next/link'

export default function Home() {
  return (
    <>
      <h1>Oi</h1>
      <Link href="/test">
        <p>link next page test</p>
      </Link>
    </>
  )
}
