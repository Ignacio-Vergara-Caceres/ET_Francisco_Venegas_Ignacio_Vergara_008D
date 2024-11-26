export interface UsersG{
    id:number;
    username:string;
    email:string;
    rut:number;
    password:string;
    isactive: boolean;
}

export interface UserNuevoGestor{
    username:string;
    email:string;
    rut:number;
    password:string;
    isactive: boolean;
}