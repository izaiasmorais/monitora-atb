import { api } from "@/lib/axios";

export interface GetPrescriptionsQuery {
	pageIndex?: number;
	perPage?: number;
	id?: string | null;
	name?: string | null;
	email?: string | null;
	createdAt?: Date | null;
}

export interface IPrescription {
	id: string;
	medicalRecord: string;
	name: string;
	medicine: string;
	unit: string;
	dose: number;
	via: string;
	posology: string;
}

export interface GetPatientsResponse {
	patients: IPrescription[];
	meta: {
		pageIndex: number;
		perPage: number;
		totalCount: number;
	};
}

export async function getPatients({
	pageIndex,
	perPage = 10,
	email,
	id,
	name,
}: GetPrescriptionsQuery) {
	const data = await api.get<IPrescription[]>("/patients", {
		params: {
			id,
			name,
			email,
		},
	});

	let totalCount;

	const response = await api.get<IPrescription[]>("/patients", {
		params: {
			id,
			name,
			email,
			limit: perPage,
			page: pageIndex,
		},
	});

	if (data.data.length < 10) {
		totalCount = data.data.length;
	} else if (data.data.length >= 10 && data.data.length < 30) {
		totalCount = data.data.length;
	} else {
		totalCount = 30;
	}

	return {
		patients: response.data,
		meta: {
			pageIndex,
			perPage,
			totalCount,
		},
	} as GetPatientsResponse;
}
