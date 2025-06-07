"use client";
import * as React from "react";
import {
	ColumnFiltersState,
	SortingState,
	VisibilityState,
	getCoreRowModel,
	getFilteredRowModel,
	getPaginationRowModel,
	getSortedRowModel,
	useReactTable,
} from "@tanstack/react-table";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { prescriptionsTableColumns } from "./prescriptions-table-columns";
import { SearchInput } from "@/components/ui/search-input";
import { PrescriptionsTable } from "./prescriptions-table";
import { TablePagination } from "@/components/table/table-pagination";
import { TableHideColumnsDropDown } from "@/components/table/table-hide-columns-dropdown";
import { prescriptions } from "@/mocks/new-prescriptions";
import { AddPrescriptionSheet } from "@/components/prescriptions/modals/add-prescription-sheet";

export function PrescriptionsTableContainer() {
	const [sorting, setSorting] = React.useState<SortingState>([
		{
			id: "patientName",
			desc: false,
		},
	]);
	const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
		[]
	);
	const [columnVisibility, setColumnVisibility] =
		React.useState<VisibilityState>({});
	const [rowSelection, setRowSelection] = React.useState({});

	const table = useReactTable({
		data: prescriptions,
		columns: prescriptionsTableColumns,
		onSortingChange: setSorting,
		onColumnFiltersChange: setColumnFilters,
		getCoreRowModel: getCoreRowModel(),
		getPaginationRowModel: getPaginationRowModel(),
		getSortedRowModel: getSortedRowModel(),
		getFilteredRowModel: getFilteredRowModel(),
		onColumnVisibilityChange: setColumnVisibility,
		onRowSelectionChange: setRowSelection,
		state: {
			sorting,
			columnFilters,
			columnVisibility,
			rowSelection,
		},
	});

	return (
		<div className="w-full space-y-6">
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:flex items-center gap-4">
				<SearchInput
					className="w-full xl:w-[300px]"
					placeholder="Pesquisar prescrições..."
					value={
						(table.getColumn("patientName")?.getFilterValue() as string) ?? ""
					}
					onChange={(event) =>
						table.getColumn("patientName")?.setFilterValue(event.target.value)
					}
				/>

				{table.getColumn("patientName")?.getIsFiltered() && (
					<Button
						variant="secondary"
						className="font-semibold"
						onClick={() => [table.resetSorting(), table.resetColumnFilters()]}
					>
						<X />
						Limpar Filtros
					</Button>
				)}

				<TableHideColumnsDropDown
					table={table}
					translateFunction={(key) => key}
				/>

				<AddPrescriptionSheet />
			</div>

			<PrescriptionsTable
				table={table}
				isLoadingGetPrescriptions={false}
				data={prescriptions}
			/>

			<TablePagination table={table} />
		</div>
	);
}
