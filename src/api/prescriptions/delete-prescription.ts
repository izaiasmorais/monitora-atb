import type { HTTPSuccessResponse } from "@/@types/http";
import { api } from "@/lib/axios";

interface DeletePrescriptionResponseBody extends HTTPSuccessResponse {
	data: null;
}

export async function deletePrescription(
	id: string
): Promise<DeletePrescriptionResponseBody> {
	try {
		const response = await api.delete<DeletePrescriptionResponseBody>(
			`/prescriptions/${id}`
		);

		return response.data;
	} catch (error) {
		throw error;
	}
}
