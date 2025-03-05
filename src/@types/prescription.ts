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

export interface PrescriptionBody {
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

	medicalRecord?: string | null;
	patientName?: string | null;
	medicine?: string | null;
}

export interface GetPrescriptionsResponse {
	prescriptions: Prescription[];
	meta: {
		pageIndex: number;
		perPage: number;
		totalCount: number;
	};
}
