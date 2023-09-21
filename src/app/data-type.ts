export interface SignUp{
    name:string,
    email:string,
    password:string
}

export interface LoginI{
    email:string;
    password:string;
}

export interface ProductI{
    name:string,
    price:number,
    category:string,
    color:string,
    description:string,
    image:string,
    id:number;
}