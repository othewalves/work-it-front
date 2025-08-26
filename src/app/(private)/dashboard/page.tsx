'use client'
import useDashboardModel from "./dashboard.model";
import DashboardView from "./dashboard.view";

const Dashboard = () => {

    const methods = useDashboardModel();

    return <DashboardView {...methods} />
}

export default Dashboard;