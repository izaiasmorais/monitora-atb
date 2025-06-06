import type { HTTPErrorResponse, HTTPSuccessResponse } from "@/@types/http";
import { api } from "@/lib/axios";
import { AxiosError } from "axios";

interface SignInRequest {
	email: string;
	password: string;
}

type SignInResponseData = {
	accessToken: string;
};

type SignInResponse =
	| HTTPSuccessResponse<SignInResponseData>
	| HTTPErrorResponse;

export async function signIn(
	credentials: SignInRequest
): Promise<SignInResponse> {
	try {
		const response = await api.post<HTTPSuccessResponse<SignInResponseData>>(
			"/auth/sign-in",
			credentials
		);

		return response.data;
	} catch (error) {
		if (error instanceof AxiosError && error.response?.data) {
			return error.response.data;
		}

		return {
			success: false,
			errors: ["Erro desconhecido"],
			data: null,
		};
	}
}
