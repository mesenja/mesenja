import { orderBy } from 'lodash'
import React, { FunctionComponent, useEffect, useRef } from 'react'

import { Thread as IThread } from '../../store/types'
import { Reply } from './reply'

interface Props {
  thread: IThread

  onReply: (threadId: string, body: string) => void
}

export const Thread: FunctionComponent<Props> = ({ thread, onReply }) => {
  const chatBox = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (chatBox.current) {
      chatBox.current.scrollTo({
        top: chatBox.current.scrollHeight
      })
    }
  }, [thread, chatBox])

  return (
    <section className="bg-white shadow rounded overflow-hidden flex-1 flex flex-col">
      <div ref={chatBox} className="flex-1 overflow-y-auto">
        {orderBy(thread.messages, 'createdAt', 'asc').map((message, index) => (
          <article key={index} className="p-4">
            <header className="flex justify-between items-center">
              <a className="flex items-center text-sm font-medium" href="#user">
                <img
                  className="h-6 w-6 rounded-full"
                  src={`https://api.adorable.io/avatars/285/${message.user.name}`}
                  alt={message.user.name}
                />
                <span className="ml-4">{message.user.name}</span>
              </a>
              <span className="text-xs text-gray-600">
                {message.createdAt.fromNow()}
              </span>
            </header>
            <p className="mt-4">{message.body}</p>
          </article>
        ))}
      </div>
      <Reply onReply={body => onReply(thread.id, body)} />
    </section>
  )
}
