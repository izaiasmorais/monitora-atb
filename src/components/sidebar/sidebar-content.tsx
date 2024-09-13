import {
	Banknote,
	CalendarDays,
	ClipboardCheck,
	CreditCard,
	Home,
	Landmark,
	LineChart,
	Settings,
	Users,
	Wallet,
} from "lucide-react";
import { SidebarItem } from "./sidebar-item";

export function SidebarContent() {
	return (
		<>
			<div className="flex flex-col gap-1">
				<span className="text-sm font-medium mb-1">GERAL</span>

				<SidebarItem
					title="Dashboard"
					href="/"
					icon={<Home size={20} strokeWidth={1.5} />}
				/>

				<SidebarItem
					title="Pacientes"
					href="/pacientes"
					icon={<Users size={20} strokeWidth={1.5} />}
				/>
			</div>
		</>
	);
}
