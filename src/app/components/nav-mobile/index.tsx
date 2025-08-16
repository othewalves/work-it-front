'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";

import { Button } from "@/components/ui/button";
import {
    SheetContent,
    SheetHeader,
    SheetTitle,
} from "@/components/ui/sheet";
import { CalendarDateRangeIcon, UserIcon } from "@heroicons/react/24/outline";


const NavItems = [
    { path: '/services', title: 'Serviços' },
    { path: '/how-works', title: 'Como funciona' },
]

const NavMobile = () => {
    const path = usePathname();

    return (
        <SheetContent>
            <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
                <nav className="gap-4 text-sm flex flex-col items-center justify-center">
                    {NavItems.map((item) => (
                        <Link href={'/'} className={`${path === item.path ? 'text-primary' : 'text-white'}`} key={item.path}>
                            {item.title}
                        </Link>
                    ))}

                    <Button variant={'secondary'} className="w-full">
                        <CalendarDateRangeIcon />
                        Agendamentos
                    </Button>
                    <Button asChild className="w-full">
                        <Link href={'/login'}>
                            <UserIcon />
                            Entrar
                        </Link>
                    </Button>
                </nav>
            </SheetHeader>
        </SheetContent>
    );
};

export default NavMobile;