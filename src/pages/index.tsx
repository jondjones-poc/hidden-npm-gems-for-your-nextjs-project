import Link from 'next/link'

export default function Home() {
  return (
    <>
      <main >
        <Link href="/zod">Zod</Link>
        <Link href="/zustand">Zustand</Link>
      </main>
    </>
  )
}
