import { Clock, Hospital, PillBottle, Syringe } from "lucide-react";

export const dataItems = [
	{
		title: "Doses",
		description:
			"Cadastre, edite e gerencie de forma completa todas as doses cadastradas no sistema.",
		icon: <PillBottle size={20} />,
		href: "/dados/doses",
	},
	{
		title: "Unidades Hospitalares",
		description:
			"Cadastre, edite e gerencie de forma completa todas as unidades hospitalares cadastradas no sistema.",
		icon: <Hospital size={20} />,
		href: "/dados/unidades-hospitalares",
	},
	{
		title: "Posologias",
		description:
			"Cadastre, edite e gerencie de forma completa todas as posologias cadastradas no sistema.",
		icon: <Clock size={20} />,
		href: "/dados/posologias",
	},
	{
		title: "Vias",
		description:
			"Cadastre, edite e gerencie de forma completa todas as vias cadastradas no sistema.",
		icon: <Syringe size={20} />,
		href: "/dados/vias-de-administracao",
	},
];
