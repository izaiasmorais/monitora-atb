import type { HTTPErrorResponse, HTTPSuccessResponse } from "@/@types/http";
import { api } from "@/lib/axios";
import { AxiosError } from "axios";

interface ProfileData {
	id: string;
	name: string;
	email: string;
}

type GetProfileResponse = HTTPSuccessResponse<ProfileData> | HTTPErrorResponse;

export async function getProfile(): Promise<GetProfileResponse> {
	try {
		const response = await api.get<HTTPSuccessResponse<ProfileData>>(
			"/auth/profile"
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
