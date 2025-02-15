import axios from "axios";
import Cookies from "js-cookie";

export const api = axios.create({
	baseURL: process.env.NEXT_PUBLIC_API_URL,
});

api.interceptors.request.use((config) => {
	const access_token = Cookies.get("prescriptions_token");

	if (access_token) {
		config.headers.Authorization = `Bearer ${access_token}`;
	}

	return config;
});
