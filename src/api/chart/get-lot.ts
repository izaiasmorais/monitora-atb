import { HTTPSuccessResponse, HTTPErrorResponse } from "@/@types/http";
import { AxiosError } from "axios";
import { api } from "@/lib/axios";

type GetLotResponse = HTTPSuccessResponse | HTTPErrorResponse;

export async function getLot(): Promise<GetLotResponse> {
	try {
		const response = await api.get<HTTPSuccessResponse>("/charts/lot");

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
