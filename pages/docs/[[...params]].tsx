import { useRouter } from 'next/router'

function Doc() {
  const router = useRouter()
  const { params = [] } = router.query
  if (params.length === 2) {
    return <h1>Docs Page if 2</h1>
  }
  if (params.length === 1) {
    return <h1>Docs Page if 1</h1>
  }
  return <h1>Docs Page else section</h1>
}

export default Doc
