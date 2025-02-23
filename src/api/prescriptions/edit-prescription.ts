import { api } from "@/lib/axios";
import { EditPrescriptionBody } from "@/@types/prescription";
import { HTTPSuccessResponse, HTTPErrorResponse } from "@/@types/http";

interface EditPrescriptionRequest {
	prescriptionId: string;
	body: EditPrescriptionBody;
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
		throw error;
	}
}
