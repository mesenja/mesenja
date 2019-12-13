import React, { FunctionComponent, useEffect, useRef } from 'react'
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

  const container = useRef<HTMLDivElement>(null)

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

    if (!group) {
      setGroupId('general')
    }
  }, [location.search, groupId, setGroupId])

  useEffect(() => {
    if (container.current) {
      container.current.scrollTo({
        behavior: 'smooth',
        top: 0
      })
    }
  }, [groupId])

  return (
    <main ref={container} className="flex">
      <div className="w-56">
        <Groups active={groupId} className="w-40 m-8 fixed" prefix="posts" />
      </div>
      <List groupId={groupId} posts={posts} />

      <Route path="/posts/:id" render={props => <Post {...props} />} />
    </main>
  )
}
