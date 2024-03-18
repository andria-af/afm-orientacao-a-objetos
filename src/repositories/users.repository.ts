
import { UserRepository } from "../contracts/user.repository.contract";
import { users } from "../databases/users.database";
import { User } from "../models/user";


export class UserRepositoryInMemory implements UserRepository{

    public create(newUser: User): void {

        const verificaUser = users.some((user) => user.id === newUser.id || user.username === newUser.username );

        if(verificaUser) {
            throw Error(' Este usarname já está sendo usado, tente cadastrar um diferente.')
        }
        
        users.push(newUser);
    }
}