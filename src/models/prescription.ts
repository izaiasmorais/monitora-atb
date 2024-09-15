export interface Prescription {
	id: string;
	medicalRecord: string;
	name: string;
	medicine: string;
	unit: string;
	dose: number;
	via: string;
	posology: string;
}

export interface GetPrescriptionsQuery {
	pageIndex?: number;
	perPage?: number;
	id?: string | null;
	name?: string | null;
	email?: string | null;
	createdAt?: Date | null;
}

export interface GetPatientsResponse {
	patients: Prescription[];
	meta: {
		pageIndex: number;
		perPage: number;
		totalCount: number;
	};
}
