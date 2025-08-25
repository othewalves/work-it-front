'use client'
import useCreateStoreModel from "./create-store.model";
import CreateStoreView from "./create-store.view";

const CreateStore = () => {
    const methods = useCreateStoreModel();
    return <CreateStoreView {...methods} />;
}

export default CreateStore;