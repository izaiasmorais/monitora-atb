import { api } from "@/lib/axios";

export async function deletePrescription(id: string) {
	await api.delete(`/prescriptions/${id}`);
}
