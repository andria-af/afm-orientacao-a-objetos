import { tweets } from "./databases/tweets.database";
import { users } from "./databases/users.database";
import { Tweet } from "./models/tweet";
import { User } from "./models/user";
import { LikesrepositoryInMemory } from "./repositories/likes.repository";
import { TweetsRepositoryInMemory } from "./repositories/tweets.repository";
import { UserRepositoryInMemory } from "./repositories/users.repository";


//Para testes criar pelo menos: 
// - 3 usuários: OK
// - 3 tweets: OK
// - 3 likes: OK
// - 3 replies: OK

//inicialização de banco de dados em memória
const listUsers = new UserRepositoryInMemory();
const listTweets = new TweetsRepositoryInMemory();
const listLikes = new LikesrepositoryInMemory();


//criar usuario
const ze: User= new User("Zé", "@ze", "ze@mail.com", "senha");
const maria: User= new User("Maria", "@maria", "maria@mail.com", "senha");
const fred: User= new User("Frec", "@fred", "fred@mail.com", "senha");


//adionar usuários criados ao banco de dados
listUsers.create(ze);
listUsers.create(maria);
listUsers.create(fred);


//adicionar tweet por usuário
const tweet1ze: Tweet= new Tweet(ze, 'hello world', 'normal')
listTweets.create(tweet1ze);

const tweet1maria: Tweet= new Tweet(maria, 'Programação orientada a objetos', 'normal')
listTweets.create(tweet1maria);

const tweet1fred: Tweet= new Tweet(fred, 'Amém!', 'normal')
listTweets.create(tweet1fred);

// exibir tweets de um usuário 
//ze.showTweets();

// exibir todos tweets
// console.log(tweets);

// seguir usuário
//ze.follow(maria);

//exibir seguidores de um usuário
// console.log(maria.followers);

//exibir quem um usuário está seguindo
//console.log(ze.following);

// like em um tweet
tweet1ze.like(maria);
tweet1maria.like(fred);
tweet1maria.like(ze)

//reply em um tweet
const replyMaria: Tweet= new Tweet(maria, 'primeiro código!', 'reply')
tweet1ze.reply(replyMaria);

const replyZe: Tweet= new Tweet(ze, 'Pois então...', 'reply')
tweet1fred.reply(replyZe);

const replyFred: Tweet= new Tweet(fred, 'We Are the Champions', 'reply')
tweet1maria.reply(replyFred);

//exibir replies de um tweet
//tweet1ze.showReplies();

//exibir um tweet
//tweet1ze.show();

// exibir tweets de um usuário
//ze.showTweets();


//exibir feed de um usuário
ze.showFeed();

maria.showFeed();

fred.showFeed();






