"use client";
import { SidebarContent } from "./sidebar-content";
import { Button } from "../ui/button";
import { Menu as MenuIcon, Syringe } from "lucide-react";
import {
	Collapsible,
	CollapsibleContent,
	CollapsibleTrigger,
} from "@/components/ui/collapsible";
import Image from "next/image";
import { useState } from "react";
import { ThemeSwitcher } from "../header/theme-switcher";
import { Menu } from "../header/menu";

export function Sidebar() {
	const [isOpen, setIsOpen] = useState<"open" | "closed">("closed");

	async function handleToggleCollapsible() {
		setIsOpen((prev) => (prev === "open" ? "closed" : "open"));
	}

	return (
		<Collapsible
			data-state={isOpen}
			className="border-b bg-background data-[state=open]:bottom-0 xl:data-[state=closed]:bottom-0 left-0 top-0
			right-0 flex flex-col p-4 fixed z-20 xl:right-auto xl:w-64 xl:border-r gap-6 border-muted
			data-[state=open]:h-screen xl:data-[state=open]:h-screen xl:h-auto"
		>
			<div className="flex items-center justify-between ">
				<h1 className="text-xl xl:text-2xl font-medium flex items-center gap-2">
					<Image
						src={"/image.png"}
						alt="Símbolo da Saúde Azul"
						width={512}
						height={512}
						className="w-8 h-8"
					/>
					Prescrições
				</h1>

				<div className="flex items-center gap-3">
					<div className="flex gap-3 xl:hidden">
						<ThemeSwitcher />
						<Menu />
					</div>

					<CollapsibleTrigger
						asChild
						className="xl:hidden"
						onClick={() => handleToggleCollapsible()}
					>
						<Button variant="ghost">
							<MenuIcon className="w-6 h-6 text-zinc-500" />
						</Button>
					</CollapsibleTrigger>
				</div>
			</div>

			<CollapsibleContent
				asChild
				forceMount
				data-state={isOpen}
				className="data-[state=closed]:hidden data-[state=closed]:animate-slideUpAndFade
				data-[state=open]:animate-slideDownAndFade xl:data-[state=closed]:flex"
			>
				<div className="flex flex-1 flex-col">
					<div onClick={() => handleToggleCollapsible()}>
						<SidebarContent />
					</div>
				</div>
			</CollapsibleContent>
		</Collapsible>
	);
}
