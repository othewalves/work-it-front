
import { toast } from "sonner";
import { useRouter } from "next/navigation";

import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { zodResolver } from "@hookform/resolvers/zod";

import api from "../../api/axios";
import { AxiosError } from "axios";

import {
    signUpForm,
    signUpSchema
} from "./sign-up.schema";


export const useSignUpModel = () => {
    const router = useRouter();

    const { register, handleSubmit, formState: { errors, isSubmitting }, control } = useForm<signUpForm>({
        resolver: zodResolver(signUpSchema)
    });


    const { mutate, isPending } = useMutation<string, AxiosError<{ errors: { field: string; message: string }[] }>, signUpForm>({
        mutationFn: async (payload: signUpForm) => {
            const { data } = await api.post('user', payload)
            return data;
        },
        onSuccess: () => {
            toast.success('Usuário cadastrado com sucesso! Aguarde enquanto o redirecionamos.')
            router.push("/login")
        },
        onError: (error) => {
            if (error.response?.data?.errors) {
                error.response.data.errors.forEach((err) => toast.error(err.message));
            }
        }
    })

    const onSubmit = async (data: signUpForm) => {
        mutate({ ...data, file: 'teste.png' });
    };

    return {
        onSubmit,
        register,
        handleSubmit,
        control,
        errors,
        isSubmitting,
        isPending


    }

}