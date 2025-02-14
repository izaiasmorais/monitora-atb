import { api } from "@/lib/axios";
import { CreatePrescriptionBody } from "@/@types/prescription";

export async function createPrescription(data: CreatePrescriptionBody) {
	try {
		await api.post("/prescriptions", data);
	} catch (error) {
		throw error;
	}
}
