"use client";

import * as React from "react";
import { LayoutDashboard, Users, Database, Settings } from "lucide-react";
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
						<CommandItem asChild>
							<Link href="/" onClick={() => setOpen(false)}>
								<LayoutDashboard className="mr-2" />
								<span>Dashboard</span>
							</Link>
						</CommandItem>

						<CommandItem asChild>
							<Link href="/prescricoes" onClick={() => setOpen(false)}>
								<Users className="mr-2" />
								<span>Prescrições</span>
							</Link>
						</CommandItem>

						<CommandItem asChild>
							<Link href="/dados" onClick={() => setOpen(false)}>
								<Database className="mr-2" />
								<span>Dados</span>
							</Link>
						</CommandItem>

						<CommandItem asChild>
							<Link href="/configuracoes" onClick={() => setOpen(false)}>
								<Settings className="mr-2" />
								<span>Configurações</span>
							</Link>
						</CommandItem>
					</CommandGroup>
				</CommandList>
			</CommandDialog>
		</>
	);
}
