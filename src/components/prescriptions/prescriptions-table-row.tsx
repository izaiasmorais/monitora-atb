import { MoreVertical, Search } from "lucide-react";
import { Button } from "../ui/button";
import { Dialog, DialogTrigger } from "../ui/dialog";
import { TableCell, TableRow } from "../ui/table";
import { PatientDetails } from "./prescription-details-modal";
import { IPrescription } from "@/api/get-patients";

export interface PrescriptionsTableRowProps {
	prescription: IPrescription;
}

export function PrescriptionsTableRow({
	prescription,
}: PrescriptionsTableRowProps) {
	return (
		<TableRow>
			<TableCell className="font-mono text-xs font-medium">
				{prescription.medicalRecord}
			</TableCell>

			<TableCell className="font-medium">{prescription.name}</TableCell>

			<TableCell>{prescription.unit}</TableCell>

			<TableCell>{prescription.medicine}</TableCell>

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
							<span className="sr-only">Detalhes do pedido: </span>
						</Button>
					</DialogTrigger>
					<PatientDetails />
				</Dialog>
			</TableCell>

			<TableCell>
				<Button variant="outline" size="sm">
					<MoreVertical className="h-4 w-4" />
				</Button>
			</TableCell>
		</TableRow>
	);
}
