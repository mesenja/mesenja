import { Moment } from 'moment'

export interface Post {
  id: string
  body: string
  comments: Comment[]
  topics: string[]
  user: User
  createdAt: Moment
}

export interface Comment {
  id: string
  body: string
  user: User
  createdAt: Moment
}

export interface User {
  id: string
  name: string
}
