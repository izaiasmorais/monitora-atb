import { HTTPSuccessResponse, HTTPErrorResponse } from "@/@types/http";
import { AxiosError } from "axios";
import { api } from "@/lib/axios";

type GetLotResponseData = HTTPSuccessResponse<{ lot: number }>;

type GetLotResponse = GetLotResponseData | HTTPErrorResponse;

type GetLotRequest = {
	unit: string;
	startDate: string;
	endDate: string;
};

export async function getLot({
	unit,
	startDate,
	endDate,
}: GetLotRequest): Promise<GetLotResponse> {
	try {
		const response = await api.get<GetLotResponseData>("/charts/lot", {
			params: {
				unit,
				startDate,
				endDate,
			},
		});

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
