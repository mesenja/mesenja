import React, { FunctionComponent } from 'react'

import { img_comments } from '../../assets'
import { Post as IPost } from '../../store/types'

interface Props {
  post: IPost
}

export const Post: FunctionComponent<Props> = ({
  post: { body, createdAt, comments, topics, user }
}) => (
  <article className="bg-white rounded mb-8 first:mt-8 w-full max-w-post-list overflow-hidden shadow">
    <header className="p-4 flex items-center justify-between border-grey border-b-2">
      <a className="flex items-center font-medium mr-auto" href="#foo">
        <img
          className="h-8 w-8 rounded-full mr-4"
          src={`https://api.adorable.io/avatars/285/${user.name}`}
          alt={user.name}
        />
        {user.name}
      </a>
      <span className="text-sm ml-8 text-gray-600">{createdAt.fromNow()}</span>
    </header>
    <p className="m-4">{body}</p>
    <footer className="flex justify-between items-center p-4 border-grey border-t">
      <a className="flex items-center mr-8" href="#comments">
        <img className="w-4 h-4" src={img_comments} alt="Comments" />
        <span className="ml-2">{comments.length}</span>
      </a>
      {topics.length > 0 && (
        <div className="flex flex-wrap justify-end">
          <span className="font-medium">topics</span>
          {topics.map((topic, index) => (
            <a key={index} className="text-accent ml-2" href="#topics">
              {topic}
            </a>
          ))}
        </div>
      )}
    </footer>
  </article>
)
