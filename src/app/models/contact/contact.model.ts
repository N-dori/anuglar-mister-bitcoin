export class Contact {

    constructor(
        public _id?: string,
        public name: string = '',
        public email: string = '',
        public phone: string = '',
        public nextContactId: string |undefined = '',
        public prevContactId: string | undefined = '',
        
        ) {

    }

    setId?(id: string = 'r101') {
        // Implement your own set Id
        this._id = id
    }
}
export class ContactFilter {

    constructor(
        public name: string = '',
        public email: string = '',
        public phone: string = '',   
        ) {

    }

}

