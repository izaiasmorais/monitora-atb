import { SearchInput } from "../global/search-input";
import { Menu } from "./menu";
import { ThemeSwitcher } from "./theme-switcher";
import { Notifications } from "./notifications";

export function Header() {
	return (
		<header className="lg:flex w-full h-[73px] justify-between p-4 border-b">
			<SearchInput
				placeholder="Pesquisar..."
				className="hidden xl:flex bg-muted/50"
			/>

			<div className="hidden xl:flex gap-3 ml-auto">
				<Notifications />
				<ThemeSwitcher />
				<Menu />
			</div>
		</header>
	);
}
