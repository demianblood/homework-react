import {IAddress} from "./address.interface";

export interface IUserJSON {
    id: number;
    name: string;
    username: string;
    email: string,
    address:IAddress;
    phone: string;
    website: string;
    company: {
        name: string;
        catchPhrase: string;
        bs: string;
    }
}