import { api } from "@/lib/axios";
import { AxiosError } from "axios";
import type { User } from "@/models/user";

export async function signUp({ name, email, password }: Omit<User, "id">) {
	try {
		const response = await api.post("/auth/sign-up", {
			name,
			email,
			password,
		});

		return response;
	} catch (error) {
		if (error instanceof AxiosError) {
			throw new Error(error.response?.data.error);
		}
	}
}
