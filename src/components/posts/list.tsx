import React, { FunctionComponent } from 'react'

import { Post as IPost } from '../../store/types'
import { Post } from './post'

interface Props {
  posts: IPost[]
}

export const List: FunctionComponent<Props> = ({ posts }) => (
  <section className="flex flex-col flex-1 items-center max-w-post-list">
    {posts.map((post, index) => (
      <Post key={index} post={post} />
    ))}
  </section>
)
