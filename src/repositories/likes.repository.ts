import { LikeRepository } from "../contracts/like.repository.contract";
import { likes } from "../databases/likes.database";
import { Like } from "../models/like";

export class LikesrepositoryInMemory implements LikeRepository{
   
    public create (newLike: Like): void {
        likes.push(newLike);
   };

}