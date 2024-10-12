import { api } from "@/lib/axios";
import type { DeletePrescriptionParams } from "@/models/prescription";

export async function deletePrescription(id: string) {
	await api.delete(`/prescriptions/${id}`);
}
