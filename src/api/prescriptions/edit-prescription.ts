import { api } from "@/lib/axios";
import type { EditPrescriptionBody } from "@/models/prescription";

export async function editPrescription(id: string, data: EditPrescriptionBody) {
	await api.put(`/prescriptions/${id}`, data);
}
