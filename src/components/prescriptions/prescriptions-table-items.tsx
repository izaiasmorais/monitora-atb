import { MoreVertical, Search, SquarePen, Trash2 } from "lucide-react";
import { Button } from "../ui/button";
import { Dialog, DialogTrigger } from "../ui/dialog";
import { TableCell, TableRow } from "../ui/table";
import { PrescriptionDetailsModal } from "./prescription-details-dialog";
import { DeletePrescriptionDialog } from "./delete-prescriptions-dialog";
import type { Prescription } from "@/models/prescription";

export interface PrescriptionsTableItemsProps {
	prescription: Prescription;
}

export function PrescriptionsTableItems({
	prescription,
}: PrescriptionsTableItemsProps) {
	return (
		<TableRow>
			<TableCell className="font-mono text-xs font-medium">
				{prescription.medicalRecord}
			</TableCell>

			<TableCell className="font-medium">{prescription.name}</TableCell>

			<TableCell>{prescription.unit}</TableCell>

			<TableCell>{prescription.medicine}</TableCell>

			<TableCell>{prescription.via}</TableCell>

			<TableCell className="text-muted-foreground">
				{prescription.dose}mg
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
				<Dialog>
					<DialogTrigger asChild>
						<Button variant="outline" size="sm">
							<SquarePen className="h-4 w-4" />
						</Button>
					</DialogTrigger>

					<PrescriptionDetailsModal prescription={prescription} />
				</Dialog>
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
