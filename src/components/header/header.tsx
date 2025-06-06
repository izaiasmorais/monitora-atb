import { Menu } from "./menu";
import { ThemeSwitcher } from "./theme-switcher";
import { Notifications } from "./notifications";
import { GlobalSearchCommand } from "../global/global-search";

export function Header() {
	return (
		<header className="lg:flex w-full h-[73px] justify-between p-4 border-b">
			<GlobalSearchCommand />

			<div className="hidden xl:flex gap-3 ml-auto">
				<Notifications />
				<ThemeSwitcher />
				<Menu />
			</div>
		</header>
	);
}
