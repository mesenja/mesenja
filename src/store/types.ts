import { Moment } from 'moment'

export interface Group {
  id: string
  name: string
  private: boolean
  users: User[]
  createdAt: Moment
}

export interface Post {
  id: string
  body: string
  comments: Comment[]
  group: Group
  likes: Like[]
  user: User
  createdAt: Moment
}

export interface Comment {
  id: string
  body: string
  user: User
  createdAt: Moment
}

export interface Like {
  user: User
  createdAt: Moment
}

export interface User {
  id: string
  name: string
}
