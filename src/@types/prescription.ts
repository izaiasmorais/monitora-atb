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
	page?: number;
	itemsPerPage?: number;
	medicalRecord?: string | null;
	patientName?: string | null;
	medicine?: string | null;
}

export interface GetPrescriptionsResponse {
	prescriptions: Prescription[];
	meta: {
		page: number;
		itemsPerPage: number;
		totalItems: number;
		totalPages: number;
	};
}
