import clsx from 'clsx'
import { orderBy } from 'lodash'
import React, { FunctionComponent } from 'react'
import { useHistory } from 'react-router'
import { Link } from 'react-router-dom'

import { img_comments, img_likes } from '../../assets'
import { usePosts } from '../../store'
import { ali } from '../../store/auth'
import { Post as IPost } from '../../store/types'
import { Modal } from '../modal'
import { Comment } from './comment'
import { Reply } from './reply'

interface Props {
  modal?: boolean
  groupId?: string
  post: IPost
}

export const Post: FunctionComponent<Props> = ({
  modal,
  groupId,
  post: { body, createdAt, comments, id, likes, user }
}) => {
  const [, { addComment, toggleLike }] = usePosts()

  const history = useHistory()

  const commented = comments.find(comment => comment.user.id === ali.id)
  const liked = likes.find(like => like.user.id === ali.id)

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
      <footer className="flex items-center border-grey border-t">
        <a
          className={clsx(
            'flex',
            'items-center',
            'p-4',

            liked ? 'opacity-100' : 'opacity-50'
          )}
          href="#like"
          onClick={event => {
            event.preventDefault()

            toggleLike(id)
          }}
        >
          <img className="w-6 h-6" src={img_likes} alt="Likes" />
          {likes.length > 0 && <span className="ml-2">{likes.length}</span>}
        </a>
        <Link
          className={clsx(
            'flex',
            'items-center',
            'p-4',

            commented ? 'opacity-100' : 'opacity-50'
          )}
          to={groupId ? `/posts/${id}?group=${groupId}` : `/posts/${id}`}
        >
          <img className="w-6 h-6" src={img_comments} alt="Comments" />
          {comments.length > 0 && (
            <span className="ml-2">{comments.length}</span>
          )}
        </Link>
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
    <article className="bg-white rounded my-4 first:mt-8 last:mb-8 shadow">
      {post}
    </article>
  )
}
