import { ReactNode } from 'react'

interface UserModalProps {
  children?: ReactNode
  className?: string
}

const UserModal = ({ className, children }: UserModalProps) => {
  return (
    <div className="flex h-[550px] w-[550px] flex-col items-center justify-center rounded  shadow-2xl">
      {children}
    </div>
  )
}

export default UserModal
