import { ReactNode } from 'react'

interface UserOptionProps {
  className?: string
  children?: ReactNode
}

const UserOption = ({ className, children }: UserOptionProps) => {
  return (
    <label className="flex flex-col gap-5" htmlFor="">
      <span className="w-40 rounded bg-gray-200 p-2 px-2">Usuario</span>
      <select className="cursor-pointer rounded p-2 px-2">
        <option value="User 1">User 1</option>
        <option value="User 2">User 2</option>
        <option value="User 3">User 3</option>
        {children}
      </select>
    </label>
  )
}

export default UserOption
