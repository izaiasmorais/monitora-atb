import { HTTPResponse } from "@/@types/http";
import { api } from "@/lib/axios";
import { User } from "@/@types/user";

interface SignInResponseBody extends HTTPResponse {
	data: {
		token: string;
	};
}

export async function signIn({
	email,
	password,
}: Omit<User, "id" | "name">): Promise<SignInResponseBody> {
	try {
		const response = await api.post<SignInResponseBody>("/auth/sign-in", {
			email,
			password,
		});

		return response.data;
	} catch (error) {
		throw error;
	}
}
