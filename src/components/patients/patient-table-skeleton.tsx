import { MoreVertical, Search } from "lucide-react";
import { TableCell, TableRow } from "../ui/table";
import { Skeleton } from "../ui/skeleton";
import { Button } from "../ui/button";

export function PatientTableSkeleton() {
	return Array.from({ length: 10 }).map((_, index) => {
		return (
			<TableRow key={index}>
				<TableCell>
					<Button variant="outline" size="sm" disabled>
						<Search className="h-4 w-4" />
						<span className="sr-only">Detalhes do pedido: </span>
					</Button>
				</TableCell>
				<TableCell>
					<Skeleton className="h-4 w-[100px]" />
				</TableCell>
				<TableCell>
					<Skeleton className="h-4 w-[200px]" />
				</TableCell>
				<TableCell>
					<Skeleton className="h-4 w-[100px]" />
				</TableCell>
				<TableCell>
					<Skeleton className="h-4 w-[100px]" />
				</TableCell>
				<TableCell>
					<Skeleton className="h-4 w-[100px]" />
				</TableCell>
				<TableCell>
					<Skeleton className="h-4 w-[100px]" />
				</TableCell>
				<TableCell>
					<Skeleton className="h-4 w-[64px]" />
				</TableCell>
				<TableCell>
					<Button variant="outline" size="sm" disabled>
						<MoreVertical className="h-4 w-4" />
					</Button>
				</TableCell>
			</TableRow>
		);
	});
}
