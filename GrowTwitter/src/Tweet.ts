import { User } from './User';

export class Tweet {
  id: number;
  content: string;
  type: 'normal' | 'reply';
  user: User;
  likes: User[] = [];
  replies: Tweet[] = [];

  constructor(id: number, content: string, type: 'normal' | 'reply', user: User) {
    this.id = id;
    this.content = content;
    this.type = type;
    this.user = user;
  }

  like(user: User) {
    if (!this.likes.includes(user)) {
      this.likes.push(user);
    }
  }

  reply(user: User, content: string) {
    const reply = new Tweet(this.id, content, 'reply', user);
    user.tweets.push(reply);
    this.replies.push(reply);
  }
}
  