'use client'
import axios from 'axios'
import { ReactNode, useEffect, useState } from 'react'
import Button from '../button/Button'
import { useRouter } from 'next/navigation'

interface User {
  id: string
  fn: string
}

interface UserOptionProps {
  className?: string
  children?: ReactNode
  avatar?: string
  fn?: string
  id?: string
}

const UserOption = ({
  className,
  children,
  avatar,
  fn,
  id,
}: UserOptionProps) => {
  const [users, setUsers] = useState<User[]>([])
  const [correntUser, setCorrentUser] = useState('')

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(
          'https://63cf09718a780ae6e6710dbe.mockapi.io/users',
        )
        setUsers(response.data)
      } catch (err) {
        console.log(err)
      }
    }

    fetchUsers()
  }, [])

  const router = useRouter()
  function useRouterFunction() {
    router.push(`/user/${correntUser}`)
  }

  return (
    <>
      <label
        className="flex flex-col  items-center justify-center gap-5"
        htmlFor=""
      >
        <span className="w-40 rounded bg-gray-200 p-2 px-2">Usuario</span>
        <select
          onChange={(e) => setCorrentUser(e.target.value)}
          className=" cursor-pointer  rounded p-2 px-2"
        >
          <option value="">Selecione um usuario</option>
          {users
            .sort((a, b) => a.fn.localeCompare(b.fn))
            .map(({ id, fn }) => (
              <option key={id} value={id}>
                {fn}
              </option>
            ))}
          {children}
        </select>
        {correntUser && (
          <Button onClick={useRouterFunction} type="submit">
            Enviar
          </Button>
        )}
      </label>
    </>
  )
}

export default UserOption
