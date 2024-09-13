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
import {
	Cloud,
	CreditCard,
	GitCommit,
	LifeBuoy,
	LogOut,
	Settings,
	User,
} from "lucide-react";
import { Avatar } from "./avatar";
import { Button } from "../ui/button";
import Link from "next/link";

export function Menu() {
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
						<GitCommit className="mr-2 h-4 w-4" />
						<span>GitHub</span>
					</a>
				</DropdownMenuItem>

				<DropdownMenuItem className="cursor-pointer" asChild>
					<Link href="/auth/log-in">
						<LogOut className="mr-2 h-4 w-4" />
						<span>Sair</span>
					</Link>
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
