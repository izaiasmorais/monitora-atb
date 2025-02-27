import { SearchInput } from "../global/search-input";
import { Menu } from "./menu";
import { ThemeSwitcher } from "./theme-switcher";
import { Notifications } from "./notifications";

export function Header() {
	return (
		<header className="flex w-full justify-between p-4 border-b border-muted">
			<SearchInput
				placeholder="Pesquisar..."
				className="hidden md:flex bg-muted/50"
			/>

			<div className="flex gap-3">
				<Notifications />
				<ThemeSwitcher />
				<Menu />
			</div>
		</header>
	);
}
