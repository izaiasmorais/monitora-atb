import {
	ChevronLeft,
	ChevronRight,
	ChevronsLeft,
	ChevronsRight,
} from "lucide-react";
import { Button } from "../ui/button";

export interface PaginationProps {
	page: number;
	totalItems: number;
	totalPages: number;
	onPageChange: (page: number) => Promise<void> | void;
}

export function Pagination({
	page,
	totalItems,
	totalPages,
	onPageChange,
}: PaginationProps) {
	return (
		<div className="flex gap-2 flex-wrap items-center justify-between">
			<span className="text-sm text-muted-foreground">
				Total de {totalItems} item(s)
			</span>

			<div className="flex justify-between sm:justify-end items-center gap-6 lg:gap-8">
				<div className="text-sm font-medium">Página 1 de 1</div>

				<div className="flex items-center gap-2">
					<Button
						onClick={() => onPageChange(0)}
						variant="outline"
						className="h-8 w-8 p-0"
						disabled={page === 0}
					>
						<ChevronsLeft className="h-4 w-4" />
						<span className="sr-only">Primeira página</span>
					</Button>

					<Button
						onClick={() => onPageChange(page - 1)}
						variant="outline"
						className="h-8 w-8 p-0"
						disabled={page === 0}
					>
						<ChevronLeft className="h-4 w-4" />
						<span className="sr-only">Página anterior</span>
					</Button>

					<Button
						onClick={() => onPageChange(page + 1)}
						variant="outline"
						className="h-8 w-8 p-0"
						disabled={page >= totalPages - 1}
					>
						<ChevronRight className="h-4 w-4" />
						<span className="sr-only">Próxima página</span>
					</Button>

					<Button
						onClick={() => onPageChange(totalPages - 1)}
						variant="outline"
						className="h-8 w-8 p-0"
						disabled={page >= totalPages - 1}
					>
						<ChevronsRight className="h-4 w-4" />
						<span className="sr-only">Última página</span>
					</Button>
				</div>
			</div>
		</div>
	);
}
