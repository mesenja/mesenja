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
        className="w-full p-4 resize-non outline-none bg-grey"
        onChange={event => setBody(event.target.value)}
        onKeyDown={event => {
          if (body && event.metaKey && event.key === 'Enter') {
            onReply(body)

            setBody('')
          }
        }}
        placeholder="Say something nice"
        rows={newLines ? newLines.length + 1 : 1}
        value={body}
      />
    </form>
  )
}
