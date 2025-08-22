'use client'
import { Button } from "@/components/ui/button";
import { useLogout } from "../hooks/use-logout";
import { useContext } from "react";
import { UserContext } from "../../hooks/use-auth";
import Header from "../../components/header";
import Link from "next/link";

const Dashboard = () => {

    const { user } = useContext(UserContext);
    const { logout } = useLogout();
    return (
        <div>
            <Button onClick={logout} variant={'destructive'}>Fazer Logout {user.name}</Button>
            <Link href={'/panel'}>Ir para painel</Link>
        </div>
    );
}

export default Dashboard;