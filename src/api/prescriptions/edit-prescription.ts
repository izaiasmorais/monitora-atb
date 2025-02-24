import { api } from "@/lib/axios";
import { PrescriptionBody } from "@/@types/prescription";
import { HTTPSuccessResponse, HTTPErrorResponse } from "@/@types/http";
import { AxiosError } from "axios";

interface EditPrescriptionRequest {
	prescriptionId: string;
	body: PrescriptionBody;
}

interface EditPrescriptionSuccessResponse extends HTTPSuccessResponse {
	data: null;
}

interface EditPrescriptionErrorResponse extends HTTPErrorResponse {
	data: null;
}

type EditPrescriptionResponse =
	| EditPrescriptionSuccessResponse
	| EditPrescriptionErrorResponse;

export async function editPrescription({
	prescriptionId,
	body,
}: EditPrescriptionRequest): Promise<EditPrescriptionResponse> {
	try {
		const response = await api.put(`/prescriptions/${prescriptionId}`, body);

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
