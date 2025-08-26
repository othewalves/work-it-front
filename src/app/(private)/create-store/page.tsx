'use client'
import dynamic from "next/dynamic";
import useCreateStoreModel from "./create-store.model";

const CreateStoreView = dynamic(() => import('./create-store.view'), {
    ssr: false,
    loading: () => <p>Carregando componente pesado...</p>,
});


const CreateStore = () => {
    const methods = useCreateStoreModel();
    return <CreateStoreView {...methods} />;
}

export default CreateStore;