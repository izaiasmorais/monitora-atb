import { HTTPSuccessResponse, HTTPErrorResponse } from "@/@types/http";
import { AxiosError } from "axios";
import { api } from "@/lib/axios";
import {
	GetPrescriptionsQueryParams,
	GetPrescriptionsResponse,
} from "@/@types/prescription";

type GetPrescriptionResponse =
	| HTTPSuccessResponse<GetPrescriptionsResponse>
	| HTTPErrorResponse;

export async function getPrescriptions(
	params: GetPrescriptionsQueryParams
): Promise<GetPrescriptionResponse> {
	try {
		const response = await api.get<
			HTTPSuccessResponse<GetPrescriptionsResponse>
		>("/prescriptions", {
			params,
		});

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
