import User from '../components/user'

function UsersList({ users = [] }) {
  return (
    <>
      <h1>List of users</h1>
      {users.map((user: any) => (
        <User email={user.email} name={user.name} />
      ))}
    </>
  )
}

export default UsersList

// get static props won't run in the browser, it runs in the server
export async function getStaticProps() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users')
  const data = await response.json()
  return {
    props: {
      users: data,
    },
  }
}
