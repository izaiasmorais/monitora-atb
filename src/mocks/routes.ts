export interface RouteMetadata {
	title: string;
	description: string;
}

export const routeMetadata: Record<string, RouteMetadata> = {
	"/": {
		title: "Dashboard",
		description: "Visualize as métricas principais das terapias.",
	},
	"/prescricoes": {
		title: "Prescrições",
		description: "Gerencie e visualize todas as prescrições médicas.",
	},
	"/medicamentos": {
		title: "Medicamentos",
		description: "Gerencie e visualize todos os medicamentos cadastrados.",
	},
	"/dados": {
		title: "Dados",
		description: "Visualize e gerencie os dados do sistema.",
	},
	"/dados/doses": {
		title: "Doses",
		description: "Gerencie e visualize todas as doses cadastradas.",
	},
	"/dados/unidades-hospitalares": {
		title: "Unidades Hospitalares",
		description:
			"Gerencie e visualize todas as unidades hospitalares cadastradas.",
	},
	"/dados/posologias": {
		title: "Posologias",
		description: "Gerencie e visualize todas as posologias cadastradas.",
	},
	"/dados/vias-de-administracao": {
		title: "Vias Administrativas",
		description:
			"Gerencie e visualize todas as vias administrativas cadastradas.",
	},
	"/configuracoes": {
		title: "Configurações",
		description: "Configure as preferências do sistema.",
	},
};

export function getRouteMetadata(pathname: string): RouteMetadata {
	const cleanPath = pathname.split("?")[0].split("#")[0];

	return routeMetadata[cleanPath] || routeMetadata["/"];
}
