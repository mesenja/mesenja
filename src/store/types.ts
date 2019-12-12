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

export interface Thread {
  id: string
  messages: Message[]
  users: User[]
  createdAt: Moment
  updatedAt: Moment
}

export interface Message {
  id: string
  body: string
  user: User
  createdAt: Moment
}

export interface User {
  id: string
  email: string
  name: string
  role: Role
  createdAt: Moment
}

export enum Role {
  MEMBER = 'MEMBER',
  OWNER = 'OWNER'
}
