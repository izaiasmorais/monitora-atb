export type Prescription = {
	id: string;
	medicalRecord: string;
	patientName: string;
	medicine: string;
	unit: string;
	dose: string;
	via: string;
	posology: string;
	treatmentDays: string[];
	createdAt: Date;
	updatedAt: Date | null;
};
