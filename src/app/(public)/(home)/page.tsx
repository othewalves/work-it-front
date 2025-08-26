import HomeFilter from "../../components/home-filter";
import HomeHero from "../../components/home-hero";

import HomeCatalogue from "../../components/home-catalogue";

export default function Home() {
    return (
        <main className="w-full h-full px-8 py-4 sm:px-24 sm:py-6 static">
            <HomeHero />
            <HomeFilter />
            <div className="my-9">
                <h2 className="text-2xl font-semibold">Recomendados</h2>
                <div className="flex flex-row justify-between flex-wrap gap-4 mt-6">
                    <HomeCatalogue />

                </div>
            </div>

        </main>
    );
}
