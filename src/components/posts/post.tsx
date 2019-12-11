import { orderBy } from 'lodash'
import React, { FunctionComponent } from 'react'
import { useHistory } from 'react-router'
import { Link } from 'react-router-dom'

import { img_comments } from '../../assets'
import { usePosts } from '../../store'
import { Post as IPost } from '../../store/types'
import { Modal } from '../modal'
import { Comment } from './comment'
import { Reply } from './reply'

interface Props {
  modal?: boolean
  post: IPost
}

export const Post: FunctionComponent<Props> = ({
  modal,
  post: { body, createdAt, comments, id, topics, user }
}) => {
  const [, { addComment }] = usePosts()

  const history = useHistory()

  const post = (
    <>
      <header className="p-4 flex items-center justify-between border-grey border-b-2">
        <a className="flex items-center font-medium" href="#foo">
          <img
            className="h-8 w-8 rounded-full mr-4"
            src={`https://api.adorable.io/avatars/285/${user.name}`}
            alt={user.name}
          />
          {user.name}
        </a>
        <span className="text-sm ml-8 text-gray-600">
          {createdAt.fromNow()}
        </span>
      </header>
      <p className="m-4">{body}</p>
      <footer className="flex justify-between items-center p-4 border-grey border-t">
        <Link className="flex items-center mr-8" to={`/posts/${id}`}>
          <img className="w-4 h-4" src={img_comments} alt="Comments" />
          <span className="ml-2">{comments.length}</span>
        </Link>
        {topics.length > 0 && (
          <div className="flex flex-wrap justify-end">
            <span className="font-medium">Topics</span>
            {topics.map((topic, index) => (
              <a key={index} className="text-accent ml-2" href="#topics">
                {topic}
              </a>
            ))}
          </div>
        )}
      </footer>
    </>
  )

  if (modal) {
    return (
      <Modal
        onClose={() => {
          if (history.length > 0) {
            history.goBack()
          } else {
            history.replace('/posts')
          }
        }}
      >
        <article className="bg-white w-full max-w-post-list">
          {post}
          <div className="border-grey border-t-2">
            <Reply onReply={body => addComment(id, body)} />
            {orderBy(comments, 'createdAt', 'desc').map((comment, index) => (
              <Comment key={index} comment={comment} />
            ))}
          </div>
        </article>
      </Modal>
    )
  }

  return (
    <article className="bg-white rounded mb-8 first:mt-8 w-full max-w-post-list shadow">
      {post}
    </article>
  )
}
