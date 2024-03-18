
import { Tweet } from '../models/tweet';

export interface TweetRepository {
    create: (newTweet: Tweet) => void;
}