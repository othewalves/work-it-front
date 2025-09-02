export interface LoginResponse {
    success: boolean;
    user: User;
}

export interface User {
    id: string;
    name: string;
    email: string;
    role: string;
    store: Store[];
    token: string;
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
