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
