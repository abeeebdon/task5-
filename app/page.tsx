import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <h1>onvey</h1>
        <Link href="/pricing"></Link>
        <Link href="/checkout"></Link>
      </div>
    </main>
  )
}
