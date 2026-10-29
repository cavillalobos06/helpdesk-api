
export interface UserProps {
    id?: number;
    name: string;
    email: string;
    password: string;
    country: string;
    city: string;
    phone: string;
    birthday: string;
    gender?: string;
}

export class User {

    readonly id!: number;
    readonly name!: string;
    readonly email!: string;
    readonly password!: string;
    readonly country!: string;
    readonly city!: string;
    readonly phone!: string;
    readonly birthday!: string;
    readonly gender!: string; 

    constructor(private readonly props: UserProps){}
}
