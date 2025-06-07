import { Posology } from "@/@types/posology";
import { TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { flexRender, Table } from "@tanstack/react-table";

interface PosologiesTableHeaderProps {
	table: Table<Posology>;
	widths?: string[];
}

export function PosologiesTableHeader({
	table,
	widths = ["w-[50px]", "w-[200px]", "w-[300px]", "w-[150px]", "w-[150px]"],
}: PosologiesTableHeaderProps) {
	return (
		<TableHeader className="bg-muted">
			{table.getHeaderGroups().map((headerGroup) => (
				<TableRow key={headerGroup.id} className="border-none">
					{headerGroup.headers.map((header) => {
						return (
							<TableHead
								key={header.id}
								className={`h-5 ${widths[header.index] || "w-full"}`}
							>
								{header.isPlaceholder
									? null
									: flexRender(
											header.column.columnDef.header,
											header.getContext()
									  )}
							</TableHead>
						);
					})}
				</TableRow>
			))}
		</TableHeader>
	);
}
