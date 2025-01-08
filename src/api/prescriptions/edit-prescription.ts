import { api } from "@/lib/axios";
import { EditPrescriptionBody } from "@/models/prescription";
import Cookies from "universal-cookie";

export async function editPrescription(id: string, data: EditPrescriptionBody) {
	const cookies = new Cookies();

	await api.put(`/prescriptions/${id}`, {
		headers: {
			Authorization: `Bearer ${cookies.get("prescriptions_token")}`,
		},
		data,
	});
}
