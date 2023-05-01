export class User {

    constructor(
        public _id?: string,
        public name: string = '',
        public coins: number = 100,
        public moves: { toId:string, to:string, at: string,coins: number}[] = [],
       
        
        ) {

    }

    setId?(id: string = 'u109') {
        // Implement your own set Id
        this._id = id
    }
}
export class Move {

    constructor(
        public toId: string ,
        public to: string = '',
        public at: string ="",
        public coins: number=0
       
        ) {

    }

 
}
