import React, { FunctionComponent, useEffect } from 'react'
import { useHistory } from 'react-router-dom'

import { List, SideBar } from '../components/posts'
import { useAuth, usePosts } from '../store'

export const Posts: FunctionComponent = () => {
  const [{ loggedIn }] = useAuth()
  const [{ topics, posts }] = usePosts()
  const history = useHistory()

  useEffect(() => {
    if (!loggedIn) {
      history.replace('/login')
    }
  }, [loggedIn, history])

  return (
    <main className="px-8 flex">
      <SideBar topics={topics} />
      <List posts={posts} />
    </main>
  )
}
