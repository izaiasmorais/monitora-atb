import { HTTPErrorResponse, HTTPSuccessResponse } from "@/@types/http";
import { api } from "@/lib/axios";
import { AxiosError } from "axios";

type DeletePrescriptionResponse = HTTPSuccessResponse | HTTPErrorResponse;

export async function deletePrescription(
	id: string
): Promise<DeletePrescriptionResponse> {
	try {
		const response = await api.post<HTTPSuccessResponse>(
			`/prescriptions/${id}`
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
