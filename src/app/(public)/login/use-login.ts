import { useMutation } from "@tanstack/react-query";
import { loginRequest, LoginPayload, LoginResponse } from "./login.service";

export function useLogin() {
    return useMutation<LoginResponse, Error, LoginPayload>({
        mutationFn: loginRequest,
    });
}
