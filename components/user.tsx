import { FC } from 'react'

interface UserProps {
  name: string
  email: string
}

const User: FC<UserProps> = (props) => {
  const { name, email } = props
  return (
    <>
      <p>{name}</p>
      <p>{email}</p>
    </>
  )
}

export default User
