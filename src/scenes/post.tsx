import React, { FunctionComponent, useEffect } from 'react'
import { RouteComponentProps, useHistory } from 'react-router-dom'

import { Post as VPost } from '../components/posts'
import { useAuth, usePosts } from '../store'

interface Props {
  id: string
}

export const Post: FunctionComponent<RouteComponentProps<Props>> = ({
  match: {
    params: { id }
  }
}) => {
  const [{ loggedIn }] = useAuth()
  const [{ posts }] = usePosts()

  const history = useHistory()

  useEffect(() => {
    if (!loggedIn) {
      history.replace('/login')
    }
  }, [loggedIn, history])

  const post = posts.find(post => post.id === id)

  if (!post) {
    return <div>404</div>
  }

  return <VPost modal post={post} />
}
