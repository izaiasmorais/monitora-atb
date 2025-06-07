import { Dose } from "@/@types/dose";
import { TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { flexRender, Table } from "@tanstack/react-table";

interface DosesTableHeaderProps {
	table: Table<Dose>;
	widths?: string[];
}

export function DosesTableHeader({
	table,
	widths = ["w-[50px]", "w-[200px]", "w-[300px]", "w-[150px]", "w-[150px]"],
}: DosesTableHeaderProps) {
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
