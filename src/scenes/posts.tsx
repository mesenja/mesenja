import React, { FunctionComponent, useEffect } from 'react'
import { Route, useHistory, useLocation } from 'react-router-dom'

import { Groups } from '../components'
import { List } from '../components/posts'
import { useAuth, useNav, usePosts } from '../store'
import { Post } from './post'

export const Posts: FunctionComponent = () => {
  const [{ groupId }, { setGroupId }] = useNav()

  const [{ loggedIn }] = useAuth()
  const [{ posts }] = usePosts()

  const location = useLocation()
  const history = useHistory()

  useEffect(() => {
    if (!loggedIn) {
      history.replace('/login')
    }
  }, [loggedIn, history])

  useEffect(() => {
    const url = new URLSearchParams(location.search)

    const group = url.get('group')

    if (group && group !== groupId) {
      setGroupId(group)
    }
  }, [location.search, groupId, setGroupId])

  return (
    <main className="px-8 mb-16 flex justify-center">
      <Groups active={groupId} prefix="posts" />
      <List posts={posts.filter(post => post.group.id === groupId)} />

      <Route path="/posts/:id" render={props => <Post {...props} />} />
    </main>
  )
}
