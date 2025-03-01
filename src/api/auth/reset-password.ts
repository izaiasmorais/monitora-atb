import { HTTPErrorResponse, HTTPSuccessResponse } from "@/@types/http";
import { api } from "@/lib/axios";
import { AxiosError } from "axios";

interface ResetPasswordRequest {
	password: string;
	new_password: string;
}

interface ResetPasswordSuccessResponse extends HTTPSuccessResponse {
	data: {
		message: string;
	};
}

interface ResetPasswordErrorResponse extends HTTPErrorResponse {
	data: null;
}

type ResetPasswordResponse =
	| ResetPasswordSuccessResponse
	| ResetPasswordErrorResponse;

export async function resetPassword(
	credentials: ResetPasswordRequest
): Promise<ResetPasswordResponse> {
	try {
		const response = await api.put<ResetPasswordSuccessResponse>(
			"/auth/reset-password",
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
