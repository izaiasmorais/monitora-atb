import { z } from "zod";

export const prescriptionFormSchema = z.object({
	medicalRecord: z.string().min(1, "O Número do prontuário é obrigatório"),
	patientName: z.string().min(1, "O Nome do paciente é obrigatório"),
	unit: z.string().min(1, "A Unidade é obrigatória"),
	medicine: z.string().min(1, "O Medicamento é obrigatório"),
	via: z.string().min(1, "A Via de administração é obrigatória"),
	dose: z.coerce.string().min(1, "A Dose é obrigatória"),
	posology: z.string().min(1, "A Posologia é obrigatória"),
	treatmentDays: z.array(z.string()).min(1, "Defina os dias de tratamento"),
});

export type PrescriptionFormData = z.infer<typeof prescriptionFormSchema>;
