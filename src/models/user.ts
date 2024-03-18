
import { randomUUID } from "crypto";
import { tweets } from "../databases/tweets.database";
import { Tweet } from "./tweet";
import { TweetsRepositoryInMemory } from "../repositories/tweets.repository";
import { users } from "../databases/users.database";

export class User {
    public id: string = randomUUID();
    public followers: string[] = [];
    public following: User[]=[]

    constructor (
        public name: string,
        public username: string,
        public email: string,
        public password: string

    )
    {}

    public sendTweet(tweet :Tweet):void {
        new TweetsRepositoryInMemory().create(tweet);
    }

    public follow(seguido: User){
        const filterUser= users.find((user)=> user === seguido);

        if (filterUser === this){
            throw Error ('Não é possível seguir a si mesmo!')
        }
        if (filterUser){
            this.following.push(filterUser)
            filterUser?.followers.push(this.username)
        }
    }

    public showTweets(): void {

        const filterTweets= tweets.filter((tweet)=> tweet.from === this);

        filterTweets.forEach((tweet)=>{
            console.log(`${tweet.from.username} : ${tweet.content}`)

            if(tweet.likes.length === 1 ){
                console.log(`[ ${tweet.likes[0]} curtiu. ]`)
            } else if (tweet.likes.length >= 2) {
                console.log(`[ ${tweet.likes[0]} e ${tweet.likes.length - 1} usuários curtiram. ]`)
            }
    
            tweet.showReplies();
            console.log('------------------------------------')

        })

    }

    public showFeed(){
        this.showTweets();

        this.following.forEach((user)=>{

            user.showTweets();

        })
    }
}