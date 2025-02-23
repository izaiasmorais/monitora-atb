import { Prescription } from "@/@types/prescription";
import { DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";
import { capitalizeWords } from "@/utils/capitalize-words";

interface PrescriptionDetailsModalProps {
	prescription: Prescription;
}

export function PrescriptionDetailsModal({
	prescription,
}: PrescriptionDetailsModalProps) {
	return (
		<DialogContent>
			<DialogHeader>
				<DialogTitle>Detalhes da Prescrição</DialogTitle>
			</DialogHeader>

			<div className="flex flex-col gap-3">
				<div className="flex w-full justify-between items-center">
					<strong>Prontuário:</strong>
					<span>{prescription.medicalRecord}</span>
				</div>

				<div className="flex w-full justify-between items-center">
					<strong>Paciente:</strong>
					<span>{prescription.patientName}</span>
				</div>

				<div className="flex w-full justify-between items-center">
					<strong>Unidade:</strong>
					<span>{prescription.unit}</span>
				</div>

				<div className="flex w-full justify-between items-center">
					<strong>Medicamento:</strong>
					<span>{capitalizeWords(prescription.medicine)}</span>
				</div>

				<div className="flex w-full justify-between items-center">
					<strong>Via de Administração:</strong>
					<span>{prescription.via}</span>
				</div>

				<div className="flex w-full justify-between items-center">
					<strong>Dose:</strong>
					<span>{prescription.dose}</span>
				</div>

				<div className="flex w-full justify-between items-center">
					<strong>Posologia:</strong>
					<span>{prescription.posology}</span>
				</div>
			</div>
		</DialogContent>
	);
}
