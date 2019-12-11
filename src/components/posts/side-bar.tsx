import React, { FunctionComponent } from 'react'

interface Props {
  topics: string[]
}

export const SideBar: FunctionComponent<Props> = ({ topics }) => (
  <aside className="self-start m-8 w-56 absolute">
    <h2 className="text-xl font-semibold mb-4">Topics</h2>
    <div className="flex flex-col -ml-2">
      {topics.map((hashtag, index) => (
        <a
          key={index}
          className="text-sm hover:text-accent hover:font-medium p-2 hover:bg-white rounded hover:shadow"
          href={`#${hashtag}`}
          onClick={event => event.preventDefault()}
        >
          {hashtag}
        </a>
      ))}
    </div>
  </aside>
)
