import { api } from "@/lib/axios";
import { AxiosError } from "axios";
import type { User } from "@/models/user";

interface SignInResponse {
	token: string;
}

export async function signIn({
	email,
	password,
}: Omit<User, "id" | "name">): Promise<SignInResponse | undefined> {
	try {
		const response = await api.post<Promise<SignInResponse>>("/auth/sign-in", {
			email,
			password,
		});

		return response.data;
	} catch (error) {
		if (error instanceof AxiosError) {
			throw new Error(error.response?.data.error);
		}
	}
}
