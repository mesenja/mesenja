import React, { FunctionComponent } from 'react'

import { Post as IPost } from '../../store/types'
import { Post } from './post'

interface Props {
  groupId?: string
  posts: IPost[]
}

export const List: FunctionComponent<Props> = ({ groupId, posts }) => (
  <section className="flex flex-col flex-1 items-center max-w-post-list">
    {posts
      .filter(post => post.group.id === groupId)
      .map((post, index) => (
        <Post key={index} groupId={groupId} post={post} />
      ))}
  </section>
)
