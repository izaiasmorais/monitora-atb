import { api } from "@/lib/axios";
import type { CreatePrescriptionBody } from "@/models/prescription";
import { AxiosError } from "axios";

export async function createPrescription(data: CreatePrescriptionBody) {
	try {
		await api.post("/prescriptions", data);
	} catch (error) {
		if (error instanceof AxiosError) {
			throw new Error(error.message);
		}
		console.log(error);
	}
}
