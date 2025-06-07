import { Prescription } from "@/@types/new-prescription";
import { TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { flexRender, Table } from "@tanstack/react-table";

interface PrescriptionsTableHeaderProps {
	table: Table<Prescription>;
	widths?: string[];
}

export function PrescriptionsTableHeader({
	table,
	widths = [
		"w-[50px]",
		"w-[200px]",
		"w-[200px]",
		"w-[150px]",
		"w-[150px]",
		"w-[100px]",
		"w-[150px]",
		"w-[150px]",
	],
}: PrescriptionsTableHeaderProps) {
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
