
import { Like } from '../models/like';

export interface LikeRepository {
    create: (newLike: Like) => void;
}