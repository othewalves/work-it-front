export interface StoreResponse {
    id: string;
    cnpj: string;
    description: string;
    email: string;
    name: string;
    phone: string;
    photo: string;
    slogan: string;
    category: Category;
    address: [];
}

export interface Category {
    id: string;
    name: string;
    createdAt: Date;
    updatedAt: Date;
}
