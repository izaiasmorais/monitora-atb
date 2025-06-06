import { HTTPSuccessResponse, HTTPErrorResponse } from "@/@types/http";
import { AxiosError } from "axios";
import { api } from "@/lib/axios";

type GetDddResponseData = HTTPSuccessResponse<{ ddd: number }>;

type GetDddResponse = GetDddResponseData | HTTPErrorResponse;

export async function getDdd(): Promise<GetDddResponse> {
	try {
		const response = await api.get<GetDddResponseData>("/charts/ddd");

		return response.data;
	} catch (error) {
		if (error instanceof AxiosError && error.response?.data)
			return error.response.data;

		return {
			success: false,
			errors: ["Erro desconhecido"],
			data: null,
		};
	}
}
