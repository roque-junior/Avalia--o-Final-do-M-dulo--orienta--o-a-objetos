"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tweet = void 0;
class Tweet {
    constructor(id, content, type) {
        this.likes = [];
        this.replies = [];
        this.id = id;
        this.content = content;
        this.type = type;
    }
    like(user) {
        if (!this.likes.includes(user)) {
            this.likes.push(user);
        }
    }
    reply(user, content) {
        const reply = new Tweet(this.id, content, 'reply');
        user.tweets.push(reply);
        this.replies.push(reply);
    }
}
exports.Tweet = Tweet;
