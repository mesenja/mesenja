import { orderBy } from 'lodash'
import React, { FunctionComponent, useEffect } from 'react'
import { useHistory } from 'react-router-dom'

import { useAuth, useTeam } from '../store'

export const Team: FunctionComponent = () => {
  const [{ loggedIn }] = useAuth()
  const [{ users }] = useTeam()

  const history = useHistory()

  useEffect(() => {
    if (!loggedIn) {
      history.replace('/login')
    }
  }, [loggedIn, history])

  return (
    <main className="px-16 mb-8">
      <table className="w-full bg-white rounded shadow">
        <thead>
          <tr className="border-grey border-b-2">
            <th className="font-semibold text-left p-4">Name</th>
            <th className="font-semibold text-left p-4">Email</th>
            <th className="font-semibold text-left p-4">Joined</th>
            <th className="font-semibold text-left p-4">Role</th>
          </tr>
        </thead>
        <tbody>
          {orderBy(users, ['role', 'name'], ['desc', 'asc']).map(
            (user, index) => (
              <tr key={index} className="border-grey border-t">
                <td className="p-4">{user.name}</td>
                <td className="p-4">
                  <a className="text-accent" href={`mailto:${user.email}`}>
                    {user.email}
                  </a>
                </td>
                <td className="p-4" title={user.createdAt.format()}>
                  {user.createdAt.fromNow()}
                </td>
                <td className="p-4">{user.role.toLowerCase()}</td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </main>
  )
}
