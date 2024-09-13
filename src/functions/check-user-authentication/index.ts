import { getStorageItem } from '../../utils/get-storage-item'

export const checkUserAuthentication = () => {
	const userToken = getStorageItem('token');

	return !!userToken;
}
