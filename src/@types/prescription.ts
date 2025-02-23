export interface Prescription {
	id: string;
	medicalRecord: string;
	patientName: string;
	medicine: string;
	unit: string;
	dose: string;
	via: string;
	posology: string;
	treatmentDays: string[];
}

export interface GetPrescriptionsQueryParams {
	pageIndex?: number;
	perPage?: number;
	id?: string | null;
	medicalRecord?: string | null;
	name?: string | null;
	medicine?: string | null;
	unit?: string | null;
	dose?: number | null;
	posology?: string | null;
	treatmentDays?: string[] | null;
}

export interface GetPrescriptionsResponse {
	prescriptions: Prescription[];
	meta: {
		pageIndex: number;
		perPage: number;
		totalCount: number;
	};
}

export interface CreatePrescriptionBody {
	medicalRecord: string;
	patientName: string;
	medicine: string;
	unit: string;
	dose: string;
	via: string;
	posology: string;
	treatmentDays: string[];
}

export interface EditPrescriptionBody {
	medicalRecord: string;
	patientName: string;
	medicine: string;
	unit: string;
	dose: string;
	via: string;
	posology: string;
	treatmentDays: string[];
}
