import Link from 'next/link'

function ProductList({ productId = 100 }) {
  return (
    <>
      <p><Link href="/">Home</Link></p>
      <h2><Link href="/product/1">Product 1</Link></h2>

      {/* replace clear history */}
      <h2><Link href="/product/2" replace>product 2</Link></h2>

      <h2><Link href="/product/3">Product 3</Link></h2>
      <h2>
        <Link href={`/product/${productId}`}>
          Product
          {' '}
          {productId}
        </Link>
      </h2>
    </>
  )
}
export default ProductList
