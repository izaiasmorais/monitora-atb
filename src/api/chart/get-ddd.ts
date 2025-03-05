import { HTTPSuccessResponse, HTTPErrorResponse } from "@/@types/http";
import { AxiosError } from "axios";
import { api } from "@/lib/axios";

type GetDddResponse = HTTPSuccessResponse | HTTPErrorResponse;

export async function getDdd(): Promise<GetDddResponse> {
	try {
		const response = await api.get<HTTPSuccessResponse>("/charts/ddd");

		return response.data;
	} catch (error) {
		if (error instanceof AxiosError && error.response?.data)
			return error.response.data;

		return {
			success: false,
			error: "Erro desconhecido",
			data: null,
		};
	}
}
