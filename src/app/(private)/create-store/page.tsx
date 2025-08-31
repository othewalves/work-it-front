'use client'
import dynamic from "next/dynamic";

const CreateStoreView = dynamic(() => import('./create-store.view'), {
    ssr: false,
    loading: () => <p>Carregando componente pesado...</p>,
});


const CreateStore = () => {
    return <CreateStoreView />;
}

export default CreateStore;