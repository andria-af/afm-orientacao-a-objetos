import { randomUUID } from "crypto";
import { User } from "./user";


export class Like{
    public id: string = randomUUID();
    constructor(
        public from: User
    ){}
}