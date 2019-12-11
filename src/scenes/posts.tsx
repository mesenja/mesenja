import React, { FunctionComponent, useEffect } from 'react'
import { Route, useHistory } from 'react-router-dom'

import { List, SideBar } from '../components/posts'
import { useAuth, usePosts } from '../store'
import { Post } from './post'

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
      <Route path="/posts/:id" render={props => <Post {...props} />} />
    </main>
  )
}
