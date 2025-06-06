import { Prescription } from "@/@types/prescription";
import { DeletePrescriptionDialog } from "../modals/delete-prescriptions-dialog";
import { PrescriptionDetailsModal } from "../modals/prescription-details-dialog";
import { TableRow, TableCell } from "@/components/ui/table";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Search, Trash2 } from "lucide-react";
import { capitalizeWords } from "@/utils/capitalize-words";
import { EditPrescriptionSheet } from "../modals/edit-prescription-sheet";

export interface PrescriptionsTableItemProps {
	prescription: Prescription;
}

export function PrescriptionsTableItem({
	prescription,
}: PrescriptionsTableItemProps) {
	return (
		<TableRow>
			<TableCell className="font-mono text-xs font-medium">
				{prescription.medicalRecord}
			</TableCell>

			<TableCell className="font-medium">{prescription.patientName}</TableCell>

			<TableCell>{prescription.unit}</TableCell>

			<TableCell>{capitalizeWords(prescription.medicine)}</TableCell>

			<TableCell>{prescription.via}</TableCell>

			<TableCell className="text-muted-foreground">
				{prescription.dose}
			</TableCell>

			<TableCell className="text-muted-foreground">
				{prescription.posology}
			</TableCell>

			<TableCell>
				<Dialog>
					<DialogTrigger asChild>
						<Button variant="outline" size="sm">
							<Search className="h-4 w-4" />
						</Button>
					</DialogTrigger>

					<PrescriptionDetailsModal prescription={prescription} />
				</Dialog>
			</TableCell>

			<TableCell>
				<EditPrescriptionSheet prescription={prescription} />
			</TableCell>

			<TableCell>
				<Dialog>
					<DialogTrigger asChild>
						<Button variant="outline" size="sm">
							<Trash2 className="h-4 w-4" />
						</Button>
					</DialogTrigger>

					<DeletePrescriptionDialog prescriptionId={prescription.id} />
				</Dialog>
			</TableCell>
		</TableRow>
	);
}
