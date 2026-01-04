import type { ObjectId } from 'mongoose';

export interface iPostUser {
  _id: string;
  username: string;
  fullName: string;
  profileImg?: string | null;
}

export interface iPost {
  _id: string;
  user: iPostUser;
  text?: string;
  img?: string;
  likes: iPostUser[] | string[];
  comments: iComment[];
  createdAt: string;
  updatedAt: string;
}

export interface iCommentUser {
  _id: string;
  username: string;
  fullName: string;
  profileImg?: string | null;
}

export interface iComment {
  _id: string;
  text: string;
  user: iCommentUser;
  createdAt: string;
  updatedAt: string;
}

export type tFormData = {
  username: string;
  password: string;
  email?: string;
  fullName?: string;
};

export type tResponseData = {
  message?: string;
  error?: string;
};

export type iAuthUser = {
  _id: string | ObjectId;
  username: string;
  email?: string;
  fullName?: string;
  profileImg?: string;
};
