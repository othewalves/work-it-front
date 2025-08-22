'use client'
import Image from "next/image";

import Logo from '../../../../public/logo-workit.png';
import NavDesktop from "../nav-desktop";
import NavMobile from "../nav-mobile";
import { Sheet, SheetTrigger } from "@/components/ui/sheet";
import { Bars2Icon } from "@heroicons/react/24/outline";
import { Button } from "@/components/ui/button";
import Link from "next/link";


const Header = () => {
    return (
        <header className="w-full px-8 py-2 sm:px-24 sm:py-4 flex flex-row items-center justify-between border-b">
            <Link href={'/'}>
                <Image
                    src={Logo}
                    alt="logo workit"
                    width={90}
                    height={20}
                    priority

                />
            </Link>
            <div className="hidden md:flex">
                <NavDesktop />
            </div>
            <div className="md:hidden flex">
                <Sheet>
                    <SheetTrigger asChild>
                        <Button variant={'ghost'} >
                            <Bars2Icon />
                        </Button>
                    </SheetTrigger>
                    <NavMobile />
                </Sheet>
            </div>
        </header>
    );
}

export default Header;