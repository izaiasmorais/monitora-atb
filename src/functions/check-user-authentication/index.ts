import { getStorageItem } from "../../utils/get-storage-item";

export const checkUserAuthentication = () => {
	const userToken = getStorageItem("prescriptions_token");

	return !!userToken;
};
