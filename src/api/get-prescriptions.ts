import { api } from "@/lib/axios";
import type {
	Prescription,
	GetPrescriptionsQuery,
	GetPatientsResponse,
} from "@/models/prescription";

export async function getPatients({
	pageIndex,
	perPage = 10,
	email,
	id,
	name,
}: GetPrescriptionsQuery) {
	const { data } = await api.get<Prescription[]>("/patients", {
		params: { id, name, email },
	});

	const totalCount = Math.min(data.length, 30);

	const { data: patients } = await api.get<Prescription[]>("/patients", {
		params: { id, name, email, limit: perPage, page: pageIndex },
	});

	return {
		patients,
		meta: { pageIndex, perPage, totalCount },
	} as GetPatientsResponse;
}
