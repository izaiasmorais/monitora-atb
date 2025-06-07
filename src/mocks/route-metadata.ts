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
	"/configuracoes": {
		title: "Configurações",
		description: "Configure as preferências do sistema.",
	},
	"/dados": {
		title: "Dados",
		description: "Visualize e gerencie os dados do sistema.",
	},
};

export function getRouteMetadata(pathname: string): RouteMetadata {
	const cleanPath = pathname.split("?")[0].split("#")[0];

	return routeMetadata[cleanPath] || routeMetadata["/"];
}
