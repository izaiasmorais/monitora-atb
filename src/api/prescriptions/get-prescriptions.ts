import { api } from "@/lib/axios";
import type {
	Prescription,
	GetPrescriptionsQuery,
	GetPrescriptionsResponse,
} from "@/models/prescription";

export async function getPrescriptions({
	pageIndex,
	perPage = 10,
	email,
	id,
	name,
	createdAt,
	medicalRecord,
	unit,
	medicine,
	posology,
}: GetPrescriptionsQuery) {
	const { data } = await api.get<Prescription[]>("/prescriptions", {
		params: { id, name, email, medicalRecord, unit, medicine, posology },
	});

	return {
		prescriptions: data,
		meta: { pageIndex: 1, perPage: 10, totalCount: 30 },
	} as GetPrescriptionsResponse;
}
