import { ReactNode } from 'react'
import Button from '../button/Button'
import UserModal from './UserModal'
import UserOption from './UserOption'
import Image from 'next/image'

interface UserLoginContentProps {
  className?: string
  children?: ReactNode
}

const UserLoginContent = ({ className, children }: UserLoginContentProps) => {
  return (
    <div
      className="
    flex h-screen flex-col items-center justify-center bg-gradient-to-r from-rose-100 to-teal-100"
    >
      <UserModal>
        <Image
          className="mb-10"
          src="/logo.svg"
          alt="Logo"
          width={300}
          height={200}
        />
        <UserOption />
        <Button type="submit">Enviar</Button>
      </UserModal>
    </div>
  )
}

export default UserLoginContent
