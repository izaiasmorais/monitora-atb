import { Database, LayoutDashboard, Pill, Settings, Users } from "lucide-react";
import { SidebarItem } from "./sidebar-item";

export function SidebarContent() {
	return (
		<>
			<div className="flex flex-col gap-1">
				<span className="text-sm text-muted-foreground font-medium mb-1">
					GERAL
				</span>

				<SidebarItem
					title="Dashboard"
					href="/"
					icon={<LayoutDashboard size={20} strokeWidth={1.75} />}
				/>

				<SidebarItem
					title="Prescrições"
					href="/prescricoes"
					icon={<Users size={20} strokeWidth={1.75} />}
				/>

				<SidebarItem
					title="Medicamentos"
					href="/medicamentos"
					icon={<Pill size={20} strokeWidth={1.75} />}
				/>

				<SidebarItem
					title="Dados"
					href="/dados"
					icon={<Database size={20} strokeWidth={1.75} />}
				/>

				<SidebarItem
					title="Configurações"
					href="/configuracoes"
					icon={<Settings size={20} strokeWidth={1.75} />}
				/>
			</div>
		</>
	);
}
