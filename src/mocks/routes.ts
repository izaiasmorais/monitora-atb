export interface RouteMetadata {
	route: string;
	title: string;
	description: string;
}

export const routeMetadata: RouteMetadata[] = [
	{
		route: "/",
		title: "Dashboard",
		description: "Visualize as métricas principais das terapias.",
	},
	{
		route: "/prescricoes",
		title: "Prescrições",
		description: "Gerencie e visualize todas as prescrições médicas.",
	},
	{
		route: "/medicamentos",
		title: "Medicamentos",
		description: "Gerencie e visualize todos os medicamentos cadastrados.",
	},
	{
		route: "/dados",
		title: "Dados",
		description: "Visualize e gerencie os dados do sistema.",
	},
	{
		route: "/dados/doses",
		title: "Doses",
		description: "Gerencie e visualize todas as doses cadastradas.",
	},
	{
		route: "/dados/unidades-hospitalares",
		title: "Unidades Hospitalares",
		description:
			"Gerencie e visualize todas as unidades hospitalares cadastradas.",
	},
	{
		route: "/dados/posologias",
		title: "Posologias",
		description: "Gerencie e visualize todas as posologias cadastradas.",
	},
	{
		route: "/dados/vias-de-administracao",
		title: "Vias Administrativas",
		description:
			"Gerencie e visualize todas as vias administrativas cadastradas.",
	},
	{
		route: "/calendario",
		title: "Calendário",
		description: "Visualize os dias de tratamento de cada paciente.",
	},
	{
		route: "/assistente",
		title: "Assistente",
		description: "Chatbot inteligente que auxilia com prescrições, cadastro de pacientes e responde dúvidas sobre o sistema.",
	},
	{
		route: "/configuracoes",
		title: "Configurações",
		description: "Configure as preferências do sistema.",
	},
];

export function getRouteMetadata(pathname: string): RouteMetadata {
	const cleanPath = pathname.split("?")[0].split("#")[0];
	return (
		routeMetadata.find((route) => route.route === cleanPath) || routeMetadata[0]
	);
}
