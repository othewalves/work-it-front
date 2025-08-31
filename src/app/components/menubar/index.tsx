'use client'
import Link from "next/link";
import Image from "next/image";
import Logo from '../../../../public/logo-workit.png';

import {
    ChevronDownIcon,
    ArrowRightStartOnRectangleIcon,
    PlusIcon,
    UserIcon
} from "@heroicons/react/24/outline";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button";
import { useLogout } from "../../hooks/use-logout";
import useMenubar from "./menubar.model";

const Menubar = () => {
    const { logout } = useLogout();
    const { user, isPending } = useMenubar();

    return (
        <header className="w-full px-8 py-2 sm:px-24 sm:py-4 flex items-center justify-between border-b">
            <Link href={'/'}>
                <Image
                    src={Logo}
                    alt="logo workit"
                    width={90}
                    height={20}
                    priority
                />
            </Link>
            <DropdownMenu>
                <DropdownMenuTrigger>
                    <div className="flex items-center justify-center gap-2 cursor-pointer">
                        <div className="bg-primary/10 text-primary font-semibold w-[40px] h-[40px] rounded-full flex items-center justify-center">
                            {isPending ? <UserIcon width={24} height={24} /> : user?.name[0]}
                        </div>
                        <ChevronDownIcon width={20} />
                    </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuItem>
                        <Button variant={'link'} className="w-full" asChild>
                            <Link href={'/dashboard'}>
                                Minha conta
                            </Link>
                        </Button>
                    </DropdownMenuItem>
                    {user?.store.length === 0 ? (
                        <DropdownMenuItem>
                            <Button variant={'link'} className="w-full" asChild>
                                <Link href={'/create-store'} className="text-white">
                                    <PlusIcon color="primary" />
                                    Criar store
                                </Link>
                            </Button>
                        </DropdownMenuItem>
                    ) : (
                        <DropdownMenuItem>
                            <Button variant={'link'} className="w-full" asChild>
                                <Link href={'/dashboard'} className="text-white">
                                    Ir para comércio
                                </Link>
                            </Button>
                        </DropdownMenuItem>
                    )}
                    <DropdownMenuItem className="flex items-center justify-center">
                        <Button variant={'outline'} className="w-full" onClick={logout}>
                            <ArrowRightStartOnRectangleIcon />
                            Logout
                        </Button>
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </header>
    );
}

export default Menubar;