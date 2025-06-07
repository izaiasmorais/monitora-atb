import {
	LayoutDashboard,
	SquareActivity,
	Pill,
	Database,
	Calendar,
	BotMessageSquare,
	Settings,
	PillBottle,
	Hospital,
	Clock,
	Syringe,
} from "lucide-react";

export interface RouteMetadata {
	route: string;
	title: string;
	description: string;
	icon: React.ReactNode;
}

export const routeMetadata: RouteMetadata[] = [
	{
		route: "/",
		title: "Dashboard",
		description: "Visualize as métricas principais das terapias.",
		icon: <LayoutDashboard size={20} strokeWidth={1.75} />,
	},
	{
		route: "/prescricoes",
		title: "Prescrições",
		description: "Gerencie e visualize todas as prescrições médicas.",
		icon: <SquareActivity size={20} strokeWidth={1.75} />,
	},
	{
		route: "/medicamentos",
		title: "Medicamentos",
		description: "Gerencie e visualize todos os medicamentos cadastrados.",
		icon: <Pill size={20} strokeWidth={1.75} />,
	},
	{
		route: "/dados",
		title: "Dados",
		description: "Visualize e gerencie os dados do sistema.",
		icon: <Database size={20} strokeWidth={1.75} />,
	},
	{
		route: "/dados/doses",
		title: "Doses",
		description: "Gerencie e visualize todas as doses cadastradas.",
		icon: <PillBottle size={20} strokeWidth={1.75} />,
	},
	{
		route: "/dados/unidades-hospitalares",
		title: "Unidades Hospitalares",
		description:
			"Gerencie e visualize todas as unidades hospitalares cadastradas.",
		icon: <Hospital size={20} strokeWidth={1.75} />,
	},
	{
		route: "/dados/posologias",
		title: "Posologias",
		description: "Gerencie e visualize todas as posologias cadastradas.",
		icon: <Clock size={20} strokeWidth={1.75} />,
	},
	{
		route: "/dados/vias-de-administracao",
		title: "Vias de Administração",
		description:
			"Gerencie e visualize todas as vias de administração cadastradas.",
		icon: <Syringe size={20} strokeWidth={1.75} />,
	},
	{
		route: "/calendario",
		title: "Calendário",
		description: "Visualize os dias de tratamento de cada paciente.",
		icon: <Calendar size={20} strokeWidth={1.75} />,
	},
	{
		route: "/assistente",
		title: "Assistente",
		description:
			"Chatbot inteligente que auxilia com prescrições, cadastro de pacientes e responde dúvidas sobre o sistema.",
		icon: <BotMessageSquare size={20} strokeWidth={1.75} />,
	},
	{
		route: "/configuracoes",
		title: "Configurações",
		description: "Configure as preferências do sistema.",
		icon: <Settings size={20} strokeWidth={1.75} />,
	},
];

export function getRouteMetadata(pathname: string): RouteMetadata {
	const cleanPath = pathname.split("?")[0].split("#")[0];
	return (
		routeMetadata.find((route) => route.route === cleanPath) || routeMetadata[0]
	);
}
