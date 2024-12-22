import { api } from "@/lib/axios";
import type {
	GetPrescriptionsQueryParams,
	GetPrescriptionsResponse,
} from "@/models/prescription";
import Cookies from "universal-cookie";

export async function getPrescriptions({
	pageIndex,
	perPage,
	id,
	name,
	medicalRecord,
	unit,
	medicine,
	posology,
	dose,
	posologyDays,
}: GetPrescriptionsQueryParams) {
	const cookies = new Cookies();

	const { data } = await api.get<GetPrescriptionsResponse>("/prescriptions", {
		headers: {
			Authorization: `Bearer ${cookies.get("prescriptions_token")}`,
		},
		params: {
			pageIndex,
			perPage,
			id,
			name,
			medicalRecord,
			unit,
			medicine,
			posology,
			dose,
			posologyDays,
		},
	});

	return {
		prescriptions: data.prescriptions,
		meta: data.meta,
	};
}
