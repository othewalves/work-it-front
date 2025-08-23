'use client';
import { useRouter } from "next/navigation";
import { AxiosError } from "axios";
import { useMutation } from "@tanstack/react-query";
import api from "../api/axios";
import { toast } from "sonner";

export function useLogout() {
    const router = useRouter();

    const { mutate, isPending } = useMutation<string, AxiosError<{ errors: { field: string; message: string }[] }>>({
        mutationFn: async () => {
            const { data } = await api.post(
                'api/auth/logout',
                {},
                { withCredentials: true }
            )

            return data;
        },
        onSuccess: () => {
            router.push('/')
            window.location.href = '/';
        },
        onError: (error) => {
            if (error.response?.data?.errors) {
                error.response.data.errors.forEach((err) => toast.error(err.message));
            }
        }
    });

    const logout = async () => {
        mutate();
    }

    return { logout, isPending };
}
