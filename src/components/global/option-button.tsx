import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Eye, MoreVertical, PenSquare, Trash2 } from "lucide-react";
import { Button } from "../ui/button";

export function OptionsButton() {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger>
				<Button variant="outline" size="sm">
					<MoreVertical className="h-4 w-4" />
				</Button>
			</DropdownMenuTrigger>

			<DropdownMenuContent>
				<DropdownMenuItem className="flex items-center gap-2 cursor-pointer text-base">
					<PenSquare size={16} />
					Editar
				</DropdownMenuItem>
				<DropdownMenuSeparator />
				<DropdownMenuItem className="flex items-center gap-2 text-red-500 !hover:text-red-500 cursor-pointer text-base">
					<Trash2 size={16} />
					Excluir
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
