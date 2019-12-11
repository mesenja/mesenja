import React, { FunctionComponent } from 'react'

import { Comment as IComment } from '../../store/types'

interface Props {
  comment: IComment
}

export const Comment: FunctionComponent<Props> = ({
  comment: { body, createdAt, user }
}) => (
  <div className="p-4 border-grey border-t">
    <header className="flex items-center justify-between">
      <a className="flex items-center text-sm font-medium" href="#user">
        <img
          className="h-6 w-6 rounded-full"
          src={`https://api.adorable.io/avatars/285/${user.name}`}
          alt={user.name}
        />
        <span className="ml-4">{user.name}</span>
      </a>
      <p className="text-xs text-gray-600">{createdAt.fromNow()}</p>
    </header>
    <p className="mt-4 text-sm">{body}</p>
  </div>
)
