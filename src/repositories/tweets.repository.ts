import { TweetRepository } from "../contracts/tweet.repository.contract";
import { tweets } from "../databases/tweets.database";
import { Tweet } from "../models/tweet";

export class TweetsRepositoryInMemory implements TweetRepository {

    public create(newTweet: Tweet): void {

        const verificaTweet = tweets.some((tweet) => tweet.id === newTweet.id);

        if(verificaTweet) {
            throw Error('Id do tweet já existente.')
        }
        
        tweets.push(newTweet);
    }
}