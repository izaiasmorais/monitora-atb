import { api } from "@/lib/axios";
import { CreatePrescriptionBody } from "@/models/prescription";
import { AxiosError } from "axios";
import Cookies from "universal-cookie";

export async function createPrescription(data: CreatePrescriptionBody) {
	const cookies = new Cookies();

	try {
		await api.post("/prescriptions", {
			headers: {
				Authorization: `Bearer ${cookies.get("prescriptions_token")}`,
			},
			data,
		});
	} catch (error) {
		if (error instanceof AxiosError) {
			throw new Error(error.message);
		}
		console.log(error);
	}
}
