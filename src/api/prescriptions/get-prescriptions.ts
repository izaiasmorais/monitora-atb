import { HTTPSuccessResponse, HTTPErrorResponse } from "@/@types/http";
import { AxiosError } from "axios";
import { api } from "@/lib/axios";
import {
	GetPrescriptionsQueryParams,
	GetPrescriptionsResponse,
} from "@/@types/prescription";

interface GetPrescriptionSuccessResponse extends HTTPSuccessResponse {
	data: GetPrescriptionsResponse;
}

interface GetPrescriptionErrorResponse extends HTTPErrorResponse {
	data: null;
}

type GetPrescriptionResponse =
	| GetPrescriptionSuccessResponse
	| GetPrescriptionErrorResponse;

export async function getPrescriptions(
	params: GetPrescriptionsQueryParams
): Promise<GetPrescriptionResponse> {
	try {
		const response = await api.get<GetPrescriptionSuccessResponse>(
			"/prescriptions",
			{
				params,
			}
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
