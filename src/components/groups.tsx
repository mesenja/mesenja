import clsx from 'clsx'
import React, { FunctionComponent } from 'react'
import { Link } from 'react-router-dom'

import { useGroups } from '../store'

interface Props {
  active?: string
  prefix: string
}

export const Groups: FunctionComponent<Props> = ({ active, prefix }) => {
  const [{ groups }] = useGroups()

  return (
    <aside className="m-8 w-40">
      <h2 className="font-semibold text-xl mb-2 ml-4">Groups</h2>
      <div className="flex flex-col">
        {groups.map((group, index) => (
          <Link
            key={index}
            className={clsx(
              'py-2',
              'px-4',
              'mt-2',
              'rounded',
              'hover:bg-white',
              'hover:shadow',

              active === group.id && 'bg-white shadow'
            )}
            to={`/${prefix}?group=${group.id}`}
          >
            {group.name}
          </Link>
        ))}
      </div>
    </aside>
  )
}
