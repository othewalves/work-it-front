import Image from "next/image";
import HeroPNG from '../../../../public/hero-image.png';
import ArrowPNG from '../../../../public/arrow.png';
import { Button } from "@/components/ui/button";
import { CalendarDateRangeIcon } from "@heroicons/react/24/outline";

const HomeHero = () => {
    return (
        <>
            <Image
                src={ArrowPNG}
                alt="Role para baixo"
                width={60}
                height={250}
                className="absolute right-28"
            />
            <div className="w-full flex items-center justify-between relative mb-8">
                <div className="w-2/3 flex-col gap-4 relative hidden xl:flex ">
                    <div className="flex w-full flex-row items-center justify-start gap-4">
                        <div className="w-1/3 h-48 bg-background border-secondary border rounded-2xl flex items-center justify-center">
                            workit
                        </div>
                        <div className="w-1/3 h-48 bg-secondary rounded-2xl" />
                        <div className="w-1/3 h-48 bg-background border-secondary border rounded-2xl" />
                    </div>
                    <div className="flex w-full flex-row items-center justify-start gap-4">
                        <div className="w-1/3 h-48 bg-secondary rounded-2xl" />
                        <div className="w-1/3 h-48 bg-background border-secondary border rounded-2xl" />
                    </div>
                    <div className="flex w-full flex-row items-center justify-start gap-4">
                        <div className="w-1/3 h-48 bg-background border-secondary border rounded-2xl" />
                        <div className="w-1/3 h-48 bg-secondary rounded-2xl" />
                    </div>
                    <Image
                        src={HeroPNG}
                        alt="Work it"
                        width={480}
                        height={631.77}
                        className="absolute bottom-[1px] right-[106px] rounded-b-2xl"
                    />
                </div>
                <div className=" xl:absolute xl:right-40 xl:bottom-28 mb-16">
                    <h1 className="text-4xl font-bold max-w-[360px]">A reserva de serviços ficou mais ágil</h1>
                    <p className="text-base font-normal max-w-[360px] mt-2 mb-8">Explore o catálogo online, encontre e agende seu serviço com apenas alguns cliques.</p>
                    <Button variant={'secondary'}>
                        <CalendarDateRangeIcon />
                        Agendamentos
                    </Button>
                </div>
            </div></>
    );
}

export default HomeHero;