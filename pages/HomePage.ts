export class HomePage{
    username:string;
    id:number

    constructor(username:string, id:number){
        this.username = username;
        this.id = id;
    }

     display():void{
        console.log(`User: ${this.username}`);
    }
}