import axios from "axios";
import Cookies from "js-cookie";

export const api = axios.create({
	baseURL: process.env.NEXT_PUBLIC_DEV_API_URL,
});

api.interceptors.request.use((config) => {
	const auth_token = Cookies.get("prescriptions_token");

	if (auth_token) {
		config.headers.Authorization = `Bearer ${auth_token}`;
	}

	return config;
});
