export interface Prescription {
	id: string;
	medicalRecord: string;
	name: string;
	medicine: string;
	unit: string;
	dose: number;
	via: string;
	posology: string;
	posologyDays: string[];
}

export interface GetPrescriptionsQuery {
	pageIndex?: number;
	perPage?: number;
	id?: string | null;
	name?: string | null;
	email?: string | null;
	createdAt?: Date | null;
	medicalRecord?: string | null;
	unit?: string | null;
	medicine?: string | null;
	posology?: string | null;
}

export interface CreatePrescriptionBody {
	medicalRecord: string;
	name: string;
	medicine: string;
	unit: string;
	dose: number;
	via: string;
	posology: string;
	posologyDays: string[];
}

export interface DeletePrescriptionParams {
	id: string;
}

export interface GetPrescriptionsResponse {
	prescriptions: Prescription[];
	meta: {
		pageIndex: number;
		perPage: number;
		totalCount: number;
	};
}
