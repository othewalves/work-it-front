export interface LoginResponse {
    user: User;
    token: string;
}

export interface User {
    id: string;
    name: string;
    email: string;
    role: string;
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
