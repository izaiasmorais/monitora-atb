import { api } from "@/lib/axios";
import type { CreatePrescriptionBody } from "@/models/prescription";

export async function createPrescription(data: CreatePrescriptionBody) {
	await api.post("/prescriptions", data);
}
