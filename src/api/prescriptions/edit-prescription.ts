import { api } from "@/lib/axios";
import { EditPrescriptionBody } from "@/@types/prescription";

export async function editPrescription(id: string, data: EditPrescriptionBody) {
	try {
		await api.put(`/prescriptions/${id}`, {
			data,
		});
	} catch (error) {
		throw error;
	}
}
