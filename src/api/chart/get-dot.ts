import { HTTPSuccessResponse, HTTPErrorResponse } from "@/@types/http";
import { AxiosError } from "axios";
import { api } from "@/lib/axios";

type GetDotResponse = HTTPSuccessResponse | HTTPErrorResponse;

export async function getDot(): Promise<GetDotResponse> {
	try {
		const response = await api.get<HTTPSuccessResponse>("/charts/dot");

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
