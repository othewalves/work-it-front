'use client'
import { Button } from "@/components/ui/button";
import { CalendarDateRangeIcon, UserIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavItems = [
    { path: '/services', title: 'Serviços' },
    { path: '/how-works', title: 'Como funciona' },
]

const NavDesktop = () => {

    const path = usePathname();

    return (
        <nav className="gap-8 text-sm sm:text-base flex flex-row items-center justify-center">
            {NavItems.map((item) => (
                <Link href={'/'} className={`${path === item.path ? 'text-primary' : 'text-white'}`} key={item.path}>
                    {item.title}
                </Link>
            ))}
            <Button variant={'secondary'}>
                <CalendarDateRangeIcon />
                Agendamentos
            </Button>
            <Button asChild>
                <Link href={'/login'}>
                    <UserIcon />
                    Entrar
                </Link>
            </Button>
        </nav>
    );
}

export default NavDesktop;