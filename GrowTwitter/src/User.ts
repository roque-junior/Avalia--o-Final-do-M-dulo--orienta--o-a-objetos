import { Tweet } from './Tweet';

export class User {
  id: number;
  name: string;
  email: string;
  username: string;
  password: string;
  followers: User[] = [];
  tweets: Tweet[] = [];

  constructor(id: number, name: string, email: string, username: string, password: string) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.username = username;
    this.password = password;
  }

  follow(user: User) {
    if (user !== this && !this.followers.includes(user)) {
      this.followers.push(user);
    }
  }
}