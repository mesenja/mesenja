import clsx from 'clsx'
import { orderBy } from 'lodash'
import React, { FunctionComponent } from 'react'
import { Link } from 'react-router-dom'

import { useChat } from '../../store'
import { ali } from '../../store/auth'

interface Props {
  active?: string
  className?: string
}

export const Threads: FunctionComponent<Props> = ({ active, className }) => {
  const [{ threads }] = useChat()

  return (
    <aside className={className}>
      <h2 className="font-semibold text-xl mb-2 ml-4">Threads</h2>
      <div className="flex flex-col">
        {orderBy(threads, 'updatedAt', 'desc')
          .filter(thread => thread.users.map(user => user.id).includes(ali.id))
          .map((thread, index) => (
            <Link
              key={index}
              className={clsx(
                'py-2',
                'px-4',
                'mt-2',
                'rounded',
                'hover:bg-white',
                'hover:shadow',

                active === thread.id && 'bg-white shadow'
              )}
              to={`/chat?thread=${thread.id}`}
            >
              {thread.users
                .filter(user => user.id !== ali.id)
                .map(user => user.name)
                .join(', ')}
            </Link>
          ))}
      </div>
    </aside>
  )
}
