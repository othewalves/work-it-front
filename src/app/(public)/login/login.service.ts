import axios from "axios";

export interface LoginPayload {
    email: string;
    password: string;
}

export interface LoginResponse {
    token: string;
    user: {
        id: string;
        name: string;
        email: string;
    };
}

export async function loginRequest(payload: LoginPayload): Promise<LoginResponse> {
    const { data } = await axios.post<LoginResponse>(
        "http://localhost:5000/api/auth/login",
        payload,
        { withCredentials: true }
    );
    return data;
}
