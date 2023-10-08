"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = require("./User");
const Tweet_1 = require("./Tweet");
class GrowTwitterApp {
    constructor() {
        this.users = [];
        this.tweets = [];
        // Outras funções para exibição, seguir, curtir, responder e exibir feeds de tweets...
    }
    createUser(name, email, username, password) {
        const id = this.users.length + 1;
        const user = new User_1.User(id, name, email, username, password);
        this.users.push(user);
        return user;
    }
    createTweet(user, content, type) {
        const id = this.tweets.length + 1;
        const tweet = new Tweet_1.Tweet(id, content, type);
        user.tweets.push(tweet);
        this.tweets.push(tweet);
        return tweet;
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
user2.follow(user1);
tweet1.like(user2);
tweet1.like(user3);
tweet2.reply(user1, 'Thanks!');
console.log('Usuários:', app.users);
console.log('Tweets:', app.tweets);
