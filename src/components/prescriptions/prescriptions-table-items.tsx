import { MoreVertical, Search } from "lucide-react";
import { Button } from "../ui/button";
import { Dialog, DialogTrigger } from "../ui/dialog";
import { TableCell, TableRow } from "../ui/table";
import { PrescriptionDetailsModal } from "./prescription-details-modal";
import { IPrescription } from "@/api/get-prescriptions";
import { OptionsButton } from "../global/option-button";

export interface PrescriptionsTableItemsProps {
	prescription: IPrescription;
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
				<OptionsButton />
			</TableCell>
		</TableRow>
	);
}
