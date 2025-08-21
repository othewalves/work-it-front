import api from "@/src/app/api/axios";

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

export async function signUpUser(payload: SignUpPayload): Promise<SignUpResponse> {
    const { data } = await api.post<SignUpResponse>("user", payload);
    return data;
}
