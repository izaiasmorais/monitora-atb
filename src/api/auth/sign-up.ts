import type { HTTPErrorResponse, HTTPSuccessResponse } from "@/@types/http";
import { api } from "@/lib/axios";
import { AxiosError } from "axios";

interface SignUpRequest {
	name: string;
	email: string;
	password: string;
}

type SignUpResponse = HTTPSuccessResponse | HTTPErrorResponse;

export async function signUp(
	credentials: SignUpRequest
): Promise<SignUpResponse> {
	try {
		const response = await api.post<HTTPSuccessResponse>(
			"/auth/sign-up",
			credentials
		);
		
		return response.data;
	} catch (error) {
		if (error instanceof AxiosError && error.response?.data) {
			return error.response.data;
		}

		return {
			success: false,
			error: "Erro desconhecido",
			data: null,
		};
	}
}
