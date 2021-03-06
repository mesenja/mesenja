import { Chance } from 'chance'
import { orderBy, random, range, shuffle } from 'lodash'
import { cloneDeep } from 'lodash'
import moment from 'moment'
import { createHook, createStore } from 'react-sweet-state'

import { ali } from './auth'
import { groups } from './groups'
import { users } from './team'
import { Post } from './types'

const chance = new Chance()

export const posts: Post[] = range(100).map(() => ({
  body: chance.paragraph(),
  comments: range(0, random(3)).map(() => ({
    body: chance.paragraph(),
    createdAt: moment().subtract(random(10000), 'seconds'),
    id: chance.guid(),
    user: users[random(users.length - 1)]
  })),
  createdAt: moment().subtract(random(10000), 'seconds'),
  group: groups[random(groups.length - 1)],
  id: chance.guid(),
  likes: range(0, random(3)).map(index => ({
    createdAt: moment().subtract(random(10000), 'seconds'),
    user: shuffle(users)[index]
  })),
  user: users[random(users.length - 1)]
}))

const Store = createStore({
  actions: {
    addComment: (postId: string, body: string) => ({ setState, getState }) => {
      const { posts } = getState()

      const data = cloneDeep(posts)

      const post = data.find(({ id }) => id === postId)

      if (post) {
        post.comments.push({
          body,
          createdAt: moment(),
          id: chance.guid(),
          user: ali
        })

        setState({
          posts: data
        })
      }
    },
    toggleLike: (postId: string) => ({ setState, getState }) => {
      const { posts } = getState()

      const data = cloneDeep(posts)

      const post = data.find(({ id }) => id === postId)

      if (post) {
        const likeIndex = post.likes.findIndex(like => like.user.id === ali.id)

        if (likeIndex >= 0) {
          post.likes.splice(likeIndex, 1)
        } else {
          post.likes.push({
            createdAt: moment(),
            user: ali
          })
        }

        setState({
          posts: data
        })
      }
    }
  },
  initialState: {
    posts: orderBy(posts, 'createdAt', 'desc')
  },
  name: 'posts'
})

export const usePosts = createHook(Store)
