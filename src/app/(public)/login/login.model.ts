
import { AxiosError } from "axios";
import { loginForm, loginSchema } from "./login.schema";
import api from "../../api/axios";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { LoginResponse } from "./login.types";
import { useContext } from "react";
import { AuthContext } from "../../hooks/use-auth";

export const useLoginModel = () => {
    const { handleUser } = useContext(AuthContext);
    const router = useRouter();
    const { register, handleSubmit, formState: { errors } } = useForm<loginForm>({
        resolver: zodResolver(loginSchema)
    });


    const { mutate, isPending } = useMutation<
        LoginResponse,
        AxiosError<{ errors: { field: string; message: string }[] }>,
        loginForm>({
            mutationFn: async (payload: loginForm) => {
                const { data } = await api.post<LoginResponse>(
                    '/api/auth/login',
                    payload,
                    { withCredentials: true }
                )

                handleUser(data.user, data.token);

                return data;
            },
            onSuccess: async () => {
                router.push('/panel')
            },
            onError: (error) => {
                if (error.response?.data?.errors) {
                    error.response.data.errors.forEach((err) => toast.error(err.message));
                }
            }
        });

    const onSubmit = async (data: loginForm) => {
        toast('CHAMOU')
        mutate(data);
    }

    return {
        mutate,
        isPending,
        register,
        handleSubmit,
        errors,
        onSubmit,

    }
};