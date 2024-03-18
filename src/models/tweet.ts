import { randomUUID } from "crypto";
import { tweets } from "../databases/tweets.database";
import { User } from "./user";


export class Tweet {
    public id: string= randomUUID();
    public likes: string[]= [];
    public replies: Tweet[]= []

    constructor(
        public from: User,
        public content: string,
        public type: string = "normal" || "reply"
    ){}

    public reply( reply: Tweet){

        const searchTweet= tweets.find((tweet)=> tweet === this);

        if (searchTweet){
            searchTweet.replies.push(reply);
        }

    }

    public like(from: User){

        const searchTweet= tweets.find((tweet)=> tweet.content === this.content);

        if (searchTweet){
            searchTweet.likes.push(from.username);
        }
    }

    public show(){
        console.log(`${this.from.username} : ${this.content}.`)

        if(this.likes.length === 1 ){
            console.log(`[ ${this.likes[0]} curtiu. ]`)
        } else if (this.likes.length >= 2) {
            console.log(`[ ${this.likes[0]} e ${this.likes.length - 1} usuários curtiram. ]`)
        }

        this.showReplies();
        console.log('------------------------------------')
    }

    public showReplies(){

        this.replies.forEach((reply)=>{
            console.log(`   > ${reply.from.username} : ${reply.content}.`)
        })
    }
}