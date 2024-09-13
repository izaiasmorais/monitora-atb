import type { IPrescription } from "@/api/get-prescriptions";
import {
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
} from "../ui/dialog";

interface PrescriptionDetailsModalProps {
	prescription: IPrescription;
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
					<span>{prescription.name}</span>
				</div>
				<div className="flex w-full justify-between items-center">
					<strong>Unidade:</strong>
					<span>{prescription.unit}</span>
				</div>
				<div className="flex w-full justify-between items-center">
					<strong>Medicamento:</strong>
					<span>{prescription.medicine}</span>
				</div>
				<div className="flex w-full justify-between items-center">
					<strong>Via de Administração:</strong>
					<span>{prescription.via}</span>
				</div>
				<div className="flex w-full justify-between items-center">
					<strong>Dose:</strong>
					<span>{prescription.dose}mg</span>
				</div>
				<div className="flex w-full justify-between items-center">
					<strong>Posologia:</strong>
					<span>{prescription.posology}</span>
				</div>
			</div>
		</DialogContent>
	);
}
