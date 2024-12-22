"use client";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { FolderGit, LogOut, Settings } from "lucide-react";
import { Avatar } from "./avatar";
import { Button } from "../ui/button";
import Cookies from "universal-cookie";
import { useRouter } from "next/navigation";

export function Menu() {
	const router = useRouter();

	function handleLogout() {
		const cookies = new Cookies();
		cookies.remove("prescriptions_token", { path: "/" });
		router.push("/entrar");
	}

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button className="p-0 rounded-full bg-transparent cursor-pointer">
					<Avatar src="" fall="IM" />
				</Button>
			</DropdownMenuTrigger>

			<DropdownMenuContent className="w-56 mr-4">
				<DropdownMenuLabel>Izaías Morais</DropdownMenuLabel>
				<DropdownMenuSeparator />
				<DropdownMenuGroup>
					<DropdownMenuItem disabled className="cursor-pointer">
						<Settings className="mr-2 h-4 w-4" />
						<span>Configurações</span>
					</DropdownMenuItem>
				</DropdownMenuGroup>

				<DropdownMenuItem className="cursor-pointer">
					<a
						href="https://github.com/izaiasmorais"
						className="flex items-center"
					>
						<FolderGit className="mr-2 h-4 w-4" />
						<span>GitHub</span>
					</a>
				</DropdownMenuItem>

				<DropdownMenuItem
					className="cursor-pointer"
					asChild
					onClick={handleLogout}
				>
					<div className="flex items-center">
						<LogOut className="mr-2 h-4 w-4" />
						<span>Sair</span>
					</div>
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
