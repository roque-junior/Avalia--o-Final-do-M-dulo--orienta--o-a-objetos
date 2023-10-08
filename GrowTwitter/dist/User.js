"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
    constructor(id, name, email, username, password) {
        this.followers = [];
        this.tweets = [];
        this.id = id;
        this.name = name;
        this.email = email;
        this.username = username;
        this.password = password;
    }
    follow(user) {
        if (user !== this && !this.followers.includes(user)) {
            this.followers.push(user);
        }
    }
}
exports.User = User;
