import Link from 'next/link'
import { useRouter } from 'next/router'

function Home() {
  const router = useRouter()
  const handleClick = () => {
    console.log('placing order')
    router.push('/product')
  }
  return (
    <>
      <h1>Hello 2</h1>
      <p>
        <Link href="/blog">Blog</Link>
      </p>
      <p>
        <Link href="/product">Products</Link>
      </p>
      <button type="button" onClick={handleClick}>Place Order</button>
    </>
  )
}
export default Home
