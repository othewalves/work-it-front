export interface User {
    cpf: string;
    name: string;
    email: string;
    phone: string;
    store: Store[];
}

export interface Store {
    id: string;
    name: string;
    slogan: string;
    cnpj: string;
    description: string;
    phone: string;
    email: string;
    photo: string;
    userId: string;
    categoryId: string;
}
