import { HTTPResponse } from "@/@types/http";
import { api } from "@/lib/axios";
import { User } from "@/@types/user";

interface SignUpResponseBody extends HTTPResponse {
	data: null;
}

export async function signUp({
	name,
	email,
	password,
}: Omit<User, "id">): Promise<SignUpResponseBody> {
	try {
		const response = await api.post<SignUpResponseBody>("/auth/sign-up", {
			name,
			email,
			password,
		});

		return response.data;
	} catch (error) {
		throw error;
	}
}
