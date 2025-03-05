import { api } from "@/lib/axios";
import { PrescriptionBody } from "@/@types/prescription";
import { HTTPSuccessResponse, HTTPErrorResponse } from "@/@types/http";
import { AxiosError } from "axios";

interface EditPrescriptionRequest {
	id: string;
	body: PrescriptionBody;
}

type EditPrescriptionResponse = HTTPSuccessResponse | HTTPErrorResponse;

export async function editPrescription({
	id,
	body,
}: EditPrescriptionRequest): Promise<EditPrescriptionResponse> {
	try {
		const response = await api.put<HTTPSuccessResponse>(
			`/prescriptions/${id}`,
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
