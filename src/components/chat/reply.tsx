import React, { FunctionComponent, useState } from 'react'

interface Props {
  onReply: (body: string) => void
}

export const Reply: FunctionComponent<Props> = ({ onReply }) => {
  const [body, setBody] = useState('')

  const newLines = body.match(/\n/g)

  return (
    <form className="flex" onSubmit={event => event.preventDefault()}>
      <textarea
        className="w-full p-4 resize-none outline-none border-t-2 border-grey max-h-reply"
        onChange={event => setBody(event.target.value)}
        onKeyDown={event => {
          if (event.key === 'Enter') {
            if (event.metaKey) {
              setBody(body + '\n')
            } else if (body) {
              onReply(body)

              setBody('')
            }

            event.preventDefault()

            return false
          }
        }}
        placeholder="Say something nice"
        rows={newLines ? newLines.length + 1 : 1}
        value={body}
      />
    </form>
  )
}
