import { User } from './User';
import { Tweet } from './Tweet';

class GrowTwitterApp {
  users: User[] = [];
  tweets: Tweet[] = [];

  createUser(name: string, email: string, username: string, password: string): User {
    const id = this.users.length + 1;
    const user = new User(id, name, email, username, password);
    this.users.push(user);
    return user;
  }

  createTweet(user: User, content: string, type: 'normal' | 'reply'): Tweet {
    const id = this.tweets.length + 1;
    const tweet = new Tweet(id, content, type, user);
    user.tweets.push(tweet);
    this.tweets.push(tweet);
    return tweet;
  }

  follow(user: User, targetUser: User) {
    if (user !== targetUser && !user.followers.includes(targetUser)) {
      user.follow(targetUser);
    }
  }

  like(user: User, tweet: Tweet) {
    tweet.like(user);
  }

  reply(user: User, tweet: Tweet, content: string) {
    tweet.reply(user, content);
  }

  displayTweet(tweet: Tweet) {
    console.log(`@${tweet.user.username}: ${tweet.content}`);
    this.displayLikes(tweet);
    this.displayReplies(tweet);
  }

  displayLikes(tweet: Tweet) {
    if (tweet.likes.length === 0) {
      console.log('Sem curtidas');
    } else if (tweet.likes.length === 1) {
      console.log(`@${tweet.likes[0].username} curtiu`);
    } else {
      const usernames = tweet.likes.map((user) => `@${user.username}`);
      const lastUsername = usernames.pop();
      console.log(`${usernames.join(', ')} e mais ${tweet.likes.length - 1} curtiram`);
    }
  }

  displayReplies(tweet: Tweet) {
    if (tweet.replies.length === 0) {
      console.log('Sem respostas');
    } else {
      tweet.replies.forEach((reply) => {
        console.log(`> @${reply.user.username}: ${reply.content}`);
      });
    }
  }

  displayFeed(user: User) {
    console.log(`Feed de @${user.username}:`);
    user.tweets.forEach((tweet) => {
      this.displayTweet(tweet);
      console.log('---');
    });
  }
}

const app = new GrowTwitterApp();

// Exemplo de uso
const user1 = app.createUser('User 1', 'user1@example.com', 'user1', 'password1');
const user2 = app.createUser('User 2', 'user2@example.com', 'user2', 'password2');
const user3 = app.createUser('User 3', 'user3@example.com', 'user3', 'password3');

const tweet1 = app.createTweet(user1, 'Hello World!', 'normal');
const tweet2 = app.createTweet(user2, 'Nice tweet!', 'normal');
const tweet3 = app.createTweet(user1, 'Reply to tweet 1', 'reply');

app.follow(user2, user1);
app.like(user2, tweet1);
app.like(user3, tweet1);
app.reply(user2, tweet2, 'Thanks!');

console.log('Usuários:', app.users);
console.log('Tweets:', app.tweets);

// Exibir o feed do usuário 1
app.displayFeed(user1);