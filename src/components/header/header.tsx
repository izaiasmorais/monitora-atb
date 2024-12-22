import { SearchInput } from "../global/search-input";
import { AlignJustify } from "lucide-react";
import { Button } from "../ui/button";
import { Menu } from "./menu";
import { ThemeSwitcher } from "./theme-switcher";

export function Header() {
	return (
		<header className="flex w-full justify-between p-4 border-b border-muted">
			<SearchInput placeholder="Pesquisar..." className="hidden md:flex" />

			<div className="flex gap-3">
				<ThemeSwitcher />
				<Menu />
			</div>
		</header>
	);
}
