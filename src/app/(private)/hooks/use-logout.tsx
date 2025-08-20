'use client';
import { useRouter } from "next/navigation";
import axios from "axios";

export function useLogout() {
    const router = useRouter();

    const logout = async () => {
        try {
            await axios.post('http://localhost:5000/api/auth/logout', {}, { withCredentials: true });
            router.push('/');
            window.location.href = '/';
        } catch (err) {
            console.error(err);
        }
    }

    return { logout };
}
