import { api } from "@/lib/axios";
import type {
	GetPrescriptionsQueryParams,
	GetPrescriptionsResponse,
} from "@/models/prescription";

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
	const { data } = await api.get<GetPrescriptionsResponse>("/prescriptions", {
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
