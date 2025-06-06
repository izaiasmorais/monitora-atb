import { HTTPSuccessResponse, HTTPErrorResponse } from "@/@types/http";
import { AxiosError } from "axios";
import { api } from "@/lib/axios";

type GetDotResponseData = HTTPSuccessResponse<{ dot: number }>;

type GetDotResponse = GetDotResponseData | HTTPErrorResponse;

type GetDotRequest = {
	unit: string;
	startDate: string;
	endDate: string;
};

export async function getDot({
	unit,
	startDate,
	endDate,
}: GetDotRequest): Promise<GetDotResponse> {
	try {
		const response = await api.get<GetDotResponseData>("/charts/dot", {
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
			errors: ["Erro desconhecido"],
			data: null,
		};
	}
}
