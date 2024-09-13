import { MoreVertical, Search } from "lucide-react";
import { Button } from "../ui/button";
import { Dialog, DialogTrigger } from "../ui/dialog";
import { TableCell, TableRow } from "../ui/table";
import { PatientDetails } from "./patient-details";
import { Patientstatus } from "./patient-status";
import { IPatient } from "@/api/get-patients";
import { format } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";

export interface PatientTableRowProps {
	patient: IPatient;
}

export function PatientTableRow({ patient }: PatientTableRowProps) {
	return (
		<TableRow>
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
			<TableCell className="font-mono text-xs font-medium">
				{patient.id}
			</TableCell>
			<TableCell className="font-medium">{patient.name}</TableCell>
			<TableCell className="font-medium">{patient.email}</TableCell>
			<TableCell className="text-muted-foreground">
				{format(new Date(patient.createdAt), "dd/MM/yyyy", { locale: ptBR })}
			</TableCell>

			<TableCell>
				<Button variant="outline" size="sm">
					<MoreVertical className="h-4 w-4" />
				</Button>
			</TableCell>
		</TableRow>
	);
}
