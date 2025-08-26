'use client'
import useDashboardModel from "./dashboard.model";

type DashboardViewProps = ReturnType<typeof useDashboardModel>;
const DashboardView = (props: DashboardViewProps) => {

    const { stores, isPending } = props;

    if (isPending) {
        return <h1>Aguarde...</h1>
    }

    if (!stores) {
        return <h1>Não há comércios ligados ao usuário</h1>
    }

    return (
        <div>
            <div>
                <span>{stores.name}</span>
                <span>{stores.cnpj}</span>
            </div>

        </div>

    );
}

export default DashboardView;