"use client";
import * as React from "react";
import {
	CommandDialog,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
	CommandList,
} from "@/components/ui/command";
import Link from "next/link";
import { SearchInput } from "./search-input";
import { routeMetadata } from "@/mocks/routes";

export function GlobalSearchCommand() {
	const [open, setOpen] = React.useState(false);

	React.useEffect(() => {
		const down = (e: KeyboardEvent) => {
			if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
				e.preventDefault();
				setOpen((open) => !open);
			}
		};

		document.addEventListener("keydown", down);
		return () => document.removeEventListener("keydown", down);
	}, []);

	return (
		<>
			<SearchInput
				placeholder="Pesquisar..."
				className="hidden xl:flex bg-muted/50"
				onClick={() => setOpen(true)}
			/>
			<CommandDialog open={open} onOpenChange={setOpen}>
				<CommandInput placeholder="Pesquisar..." />

				<CommandList>
					<CommandEmpty>Nenhum resultado encontrado.</CommandEmpty>

					<CommandGroup heading="Menu">
						{routeMetadata.map((route) => (
							<CommandItem asChild key={route.route}>
								<Link
									href={route.route}
									onClick={() => setOpen(false)}
									className="flex items-center gap-2"
								>
									{route.icon}
									<span>{route.title}</span>
								</Link>
							</CommandItem>
						))}
					</CommandGroup>
				</CommandList>
			</CommandDialog>
		</>
	);
}
