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
}: GetPrescriptionsQuery) {
	const { data } = await api.get<Prescription[]>("/prescriptions", {
		params: { id, name, email },
	});

	return {
		prescriptions: data,
		meta: { pageIndex: 0, perPage: 10, totalCount: 30 },
	} as GetPrescriptionsResponse;
}
