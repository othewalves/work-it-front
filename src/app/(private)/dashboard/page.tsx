'use client'
import { Button } from "@/components/ui/button";
import { useLogout } from "../hooks/use-logout";

const Dashboard = () => {

    const { logout } = useLogout();

    return (
        <div>
            Dashboard
            <Button onClick={logout} variant={'destructive'}>Logout</Button>
        </div>
    );
}

export default Dashboard;