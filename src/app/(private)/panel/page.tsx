'use client'
import { useContext } from "react";
import { AuthContext } from "../../hooks/use-auth";
import HomeFilter from "../../components/home-filter";
import HomeCatalogue from "../../components/home-catalogue";

const Panel = () => {
    const { user } = useContext(AuthContext);

    return (
        <div className="w-full px-8 py-2 sm:px-24 sm:py-4">
            <div className="sm:w-2/3 w-full'">
                <h1 className="text-2xl font-medium">Olá, {user.name}</h1>
                <span className="text-base font-normal">O que precisa para hoje?</span>
            </div>
            <div className="flex flex-col gap-6 mt-8">
                <HomeFilter />
                <HomeCatalogue />
            </div>
        </div>
    );
}

export default Panel;