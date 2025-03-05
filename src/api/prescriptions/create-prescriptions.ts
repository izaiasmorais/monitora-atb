import { HTTPErrorResponse, HTTPSuccessResponse } from "@/@types/http";
import type { PrescriptionBody } from "@/@types/prescription";
import { api } from "@/lib/axios";
import { AxiosError } from "axios";

type CreatePrescriptionResponse = HTTPSuccessResponse | HTTPErrorResponse;

export async function createPrescription(
	body: PrescriptionBody
): Promise<CreatePrescriptionResponse> {
	try {
		const response = await api.post<HTTPSuccessResponse>(
			"/prescriptions",
			body
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
