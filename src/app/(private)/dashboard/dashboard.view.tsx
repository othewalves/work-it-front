'use client'
import { Button } from "@/components/ui/button";
import useDashboardModel from "./dashboard.model";
import Link from "next/link";
import { PlusIcon } from "@heroicons/react/24/outline";

import DashboardStoresCard from "../../components/dashboard-stores-card";


const DashboardView = () => {

    const methods = useDashboardModel();

    return (
        <div className="w-full px-8 py-2 sm:px-24 sm:py-4">
            <Button variant={'secondary'} className="ml-auto" asChild>
                <Link href={'/create-store'} className="text-white">
                    <PlusIcon color="primary" />
                    Criar store
                </Link>
            </Button>
            <DashboardStoresCard {...methods} />

        </div>

    );
}

export default DashboardView;