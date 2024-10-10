import type { User } from "@/models/user";
import axios, { AxiosError } from "axios";

export async function signUp({ name, email, password }: User) {
	try {
		const response = await axios.post("/auth/sign-up", {
			params: {
				name,
				email,
				password,
			} as Omit<User, "id">,
		});

		return response;
	} catch (error) {
		if (error instanceof AxiosError) {
			throw new Error(error.message);
		}
		console.log(error);
	}
}
