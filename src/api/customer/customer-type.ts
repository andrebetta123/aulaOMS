import { RequestHandler } from "express"

type CustomerCreationAtributes = {
    name: string;
    cpf?:string;
    cnpj?:string;
    email:string;
    phone?:string;
}

type CustomerAtributes = CustomerCreationAtributes & {
    uuid: string;
    createdAt: string;
    updateAt: string;
}

type CustomerCreationRequest = {
    name: string;
    document: {
        cpf?: string;
        cnpj?: string;        
    },
    contact:{
        email: string;
        phone?: string;
    }
}
