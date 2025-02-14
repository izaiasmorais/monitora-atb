"use client";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LogOut } from "lucide-react";
import { Avatar } from "./avatar";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

export function Menu() {
	const router = useRouter();

	function handleLogout() {
		Cookies.remove("prescriptions_token", { path: "/" });
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
