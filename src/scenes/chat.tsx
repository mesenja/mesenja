import React, { FunctionComponent, useEffect } from 'react'
import { useHistory, useLocation } from 'react-router-dom'

import { Groups } from '../components'
import { Thread, Threads } from '../components/chat'
import { useAuth, useChat, useNav } from '../store'

export const Chat: FunctionComponent = () => {
  const [{ loggedIn }] = useAuth()
  const [{ threads }, { reply }] = useChat()
  const [{ groupId, threadId }, { setGroupId, setThreadId }] = useNav()

  const history = useHistory()
  const location = useLocation()

  useEffect(() => {
    if (!loggedIn) {
      history.replace('/login')
    }
  }, [loggedIn, history])

  useEffect(() => {
    const url = new URLSearchParams(location.search)

    const group = url.get('group')
    const thread = url.get('thread')

    if (group && group !== groupId) {
      setGroupId(group)
      setThreadId('')
    }

    if (thread && thread !== threadId) {
      setGroupId('')
      setThreadId(thread)
    }

    if (!group && !thread) {
      setGroupId('general')
      setThreadId('')
    }
  }, [location.search, groupId, threadId, setGroupId, setThreadId])

  const thread = threads.find(thread => thread.id === (groupId || threadId))

  return (
    <main className="px-8 mb-16 flex justify-center">
      <div className="mt-8 mr-8 h-chat-box overflow-x-auto">
        <Groups active={groupId} className="w-40" prefix="chat" />
        <Threads active={threadId} className="w-40 mt-8" />
      </div>
      {thread && (
        <Thread
          thread={thread}
          onReply={(threadId, body) => reply(threadId, body)}
        />
      )}
    </main>
  )
}
