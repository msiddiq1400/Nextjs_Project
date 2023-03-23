import Link from 'next/link'

function Home() {
  return (
    <>
      <h1>Nextjs Pre Rendering</h1>
      <p>
        <Link href="/users">Users</Link>
      </p>
    </>
  )
}
export default Home
