import useAddressModel from "./address.model";
import { IAddressParams } from "./address.types";
import AddressView from "./address.view";

const Address = async ({ params }: IAddressParams) => {

    const { storeId } = await params;

    return (
        <AddressView storeId={storeId} />
    );
}

export default Address;