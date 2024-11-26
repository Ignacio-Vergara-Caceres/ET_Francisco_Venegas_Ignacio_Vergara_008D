export interface Users {
    id:number;
    username:string;
    password:string;
    rut:string;
    email:string;
    imagenPerfil?: string; //Opcional
    isactive:boolean;
}

export interface UserNuevo{
    username:string;
    rut:string;
    email:string;
    password:string;
    imagenPerfil?: string; //Opcional
    isactive: boolean;
}
