import Link from 'next/link'

function Home() {
  return (
    <>
      <h1>Hello 2</h1>
      <p>
        <Link href="/blog">Blog</Link>
      </p>
      <p>
        <Link href="/product">Products</Link>
      </p>
    </>
  )
}
export default Home
