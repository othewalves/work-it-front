export interface SignUpPayload {
    name: string;
    email: string;
    cpf: string;
    phone: string;
    password: string;
    file?: string;
}

export interface SignUpResponse {
    id: string;
    name: string;
    email: string;
    role: string;
    token?: string;
}