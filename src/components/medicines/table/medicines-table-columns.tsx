import { Button } from "@/components/ui/button";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowDown, ArrowUp, Eye, SquarePen, Trash } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { Medicine } from "@/@types/medicine";
import { formatDate } from "@/utils/format-date";
import { Tag } from "@/components/ui/tag";
import { translateMedicinesTableKeys } from "@/utils/translate/translate-medicines-table-keys";

export const medicinesTableColumns: ColumnDef<Medicine>[] = [
	{
		id: "select",
		header: ({ table }) => (
			<Checkbox
				checked={
					table.getIsAllPageRowsSelected() ||
					(table.getIsSomePageRowsSelected() && "indeterminate")
				}
				onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
				aria-label="Select all"
			/>
		),
		cell: ({ row }) => (
			<Checkbox
				checked={row.getIsSelected()}
				onCheckedChange={(value) => row.toggleSelected(!!value)}
				aria-label="Select row"
			/>
		),
		enableSorting: false,
		enableHiding: false,
	},
	{
		accessorKey: "name",
		header: ({ column }) => (
			<Button
				variant="ghost"
				className="!p-0 hover:bg-transparent"
				onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
			>
				{translateMedicinesTableKeys("name")}
				{column.getIsSorted() !== "desc" && (
					<ArrowUp className="ml-2 h-4 w-4" />
				)}
				{column.getIsSorted() === "desc" && (
					<ArrowDown className="ml-2 h-4 w-4" />
				)}
			</Button>
		),
		cell: ({ row }) => (
			<div className="capitalize font-semibold">{row.getValue("name")}</div>
		),
	},
	{
		accessorKey: "description",
		header: ({ column }) => (
			<Button
				variant="ghost"
				className="!p-0 hover:bg-transparent"
				onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
			>
				{translateMedicinesTableKeys("description")}
				{column.getIsSorted() !== "desc" && (
					<ArrowUp className="ml-2 h-4 w-4" />
				)}
				{column.getIsSorted() === "desc" && (
					<ArrowDown className="ml-2 h-4 w-4" />
				)}
			</Button>
		),
		cell: ({ row }) => (
			<div className="text-sm text-muted-foreground max-w-[200px] truncate">
				{row.getValue("description")}
			</div>
		),
	},
	{
		accessorKey: "doses",
		header: ({ column }) => (
			<Button
				variant="ghost"
				className="!p-0 hover:bg-transparent"
				onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
			>
				Doses Disponíveis
				{column.getIsSorted() !== "desc" && (
					<ArrowUp className="ml-2 h-4 w-4" />
				)}
				{column.getIsSorted() === "desc" && (
					<ArrowDown className="ml-2 h-4 w-4" />
				)}
			</Button>
		),
		cell: ({ row }) => {
			const doses = row.getValue("doses") as string[];
			return (
				<div className="flex flex-wrap gap-1">
					{doses && <Tag>{doses.length} doses</Tag>}
				</div>
			);
		},
	},
	{
		accessorKey: "vias",
		header: ({ column }) => (
			<Button
				variant="ghost"
				className="!p-0 hover:bg-transparent"
				onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
			>
				Vias de Administração
				{column.getIsSorted() !== "desc" && (
					<ArrowUp className="ml-2 h-4 w-4" />
				)}
				{column.getIsSorted() === "desc" && (
					<ArrowDown className="ml-2 h-4 w-4" />
				)}
			</Button>
		),
		cell: ({ row }) => {
			const vias = row.getValue("vias") as string[];
			return (
				<div className="flex flex-wrap gap-1">
					{vias && <Tag>{vias.length} vias</Tag>}
				</div>
			);
		},
	},
	{
		accessorKey: "posologies",
		header: ({ column }) => (
			<Button
				variant="ghost"
				className="!p-0 hover:bg-transparent"
				onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
			>
				Posologias Disponíveis
				{column.getIsSorted() !== "desc" && (
					<ArrowUp className="ml-2 h-4 w-4" />
				)}
				{column.getIsSorted() === "desc" && (
					<ArrowDown className="ml-2 h-4 w-4" />
				)}
			</Button>
		),
		cell: ({ row }) => {
			const posologies = row.getValue("posologies") as string[];
			return (
				<div className="flex flex-wrap gap-1">
					{posologies && <Tag>{posologies.length} posologias</Tag>}
				</div>
			);
		},
	},
	{
		accessorKey: "createdAt",
		header: ({ column }) => (
			<Button
				variant="ghost"
				className="!p-0 hover:bg-transparent"
				onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
			>
				{translateMedicinesTableKeys("createdAt")}
				{column.getIsSorted() !== "desc" && (
					<ArrowUp className="ml-2 h-4 w-4" />
				)}
				{column.getIsSorted() === "desc" && (
					<ArrowDown className="ml-2 h-4 w-4" />
				)}
			</Button>
		),
		cell: ({ row }) => <div>{formatDate(row.getValue("createdAt"))}</div>,
		sortingFn: "datetime",
	},
	{
		id: "actions",
		header: "Ações",
		cell: () => {
			return (
				<div className="flex items-center gap-4">
					<Button variant="outline" size="icon">
						<Eye size={16} />
						<span className="sr-only">Ver detalhes</span>
					</Button>

					<Button variant="outline" size="icon">
						<SquarePen size={16} />
						<span className="sr-only">Editar</span>
					</Button>

					<Button variant="outline" size="icon">
						<Trash size={16} />
						<span className="sr-only">Excluir</span>
					</Button>
				</div>
			);
		},
	},
];
