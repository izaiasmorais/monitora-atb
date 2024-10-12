import { MoreVertical, Search, SquarePen, Trash2 } from "lucide-react";
import { TableCell, TableRow } from "../ui/table";
import { Skeleton } from "../ui/skeleton";
import { Button } from "../ui/button";

export function PrescriptionsTableSkeleton() {
	return Array.from({ length: 8 }).map((_, index) => {
		return (
			<TableRow key={index}>
				<TableCell>
					<Skeleton className="h-4 w-[100px]" />
				</TableCell>
				<TableCell>
					<Skeleton className="h-4 w-[250px]" />
				</TableCell>
				<TableCell>
					<Skeleton className="h-4 w-[50px]" />
				</TableCell>
				<TableCell>
					<Skeleton className="h-4 w-[120px]" />
				</TableCell>
				<TableCell>
					<Skeleton className="h-4 w-[50px]" />
				</TableCell>
				<TableCell>
					<Skeleton className="h-4 w-[50px]" />
				</TableCell>
				<TableCell>
					<Skeleton className="h-4 w-[80px]" />
				</TableCell>
				<TableCell>
					<Button variant="outline" size="sm" disabled>
						<Search className="h-4 w-4" />
						<span className="sr-only">Detalhes do pedido: </span>
					</Button>
				</TableCell>

				<TableCell>
					<Button variant="outline" size="sm" disabled>
						<SquarePen className="h-4 w-4" />
						<span className="sr-only">Editar Prescrição</span>
					</Button>
				</TableCell>

				<TableCell>
					<Button variant="outline" size="sm" disabled>
						<Trash2 className="h-4 w-4" />
						<span className="sr-only">Deletar Prescrição</span>
					</Button>
				</TableCell>
			</TableRow>
		);
	});
}
