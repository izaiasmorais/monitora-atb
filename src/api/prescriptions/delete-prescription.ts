import { api } from "@/lib/axios";
import Cookies from "universal-cookie";

export async function deletePrescription(id: string) {
	const cookies = new Cookies();

	await api.delete(`/prescriptions/${id}`, {
		headers: {
			Authorization: `Bearer ${cookies.get("prescriptions_token")}`,
		},
	});
}
