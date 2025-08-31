import { useMutation } from "@tanstack/react-query"
import { AxiosError } from "axios";
import { loginForm, loginSchema } from "./login.schema";
import api from "../../api/axios";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

export const useLoginModel = () => {

    const router = useRouter();
    const { register, handleSubmit, formState: { errors } } = useForm<loginForm>({
        resolver: zodResolver(loginSchema)
    });


    const { mutate, isPending } = useMutation<string, AxiosError<{ errors: { field: string; message: string }[] }>, loginForm>({
        mutationFn: async (payload: loginForm) => {
            const { data } = await api.post(
                '/api/auth/login',
                payload,
                { withCredentials: true }
            )

            return data;
        },
        onSuccess: () => {
            router.push('/panel')
        },
        onError: (error) => {
            if (error.response?.data?.errors) {
                error.response.data.errors.forEach((err) => toast.error(err.message));
            }
        }
    });

    const onSubmit = async (data: loginForm) => {
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