function UsersList({ users = [] }) {
  return (
    <>
      <h1>List of users</h1>
      {users.map((user: any) => (
        <div key={user.id} style={{ display: 'flex', gap: '2rem' }}>
          <p>{user.name}</p>
          <p>{user.email}</p>
        </div>
      ))}
    </>
  )
}

export default UsersList
export async function getStaticProps() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users')
  const data = await response.json()
  return {
    props: {
      users: data,
    },
  }
}
