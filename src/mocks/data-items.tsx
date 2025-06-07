import { Clock, Hospital, Pill, Syringe } from "lucide-react";

export const dataItems = [
	{
		title: "Medicamentos",
		description:
			"Cadastre, edite e gerencie de forma completa todos os medicamentos cadastrados no sistema.",
		icon: <Pill size={20} />,
		href: "#",
	},
	{
		title: "Doses",
		description:
			"Cadastre, edite e gerencie de forma completa todas as doses cadastradas no sistema.",
		icon: <Syringe size={20} />,
		href: "#",
	},
	{
		title: "Unidades Hospitalares",
		description:
			"Cadastre, edite e gerencie de forma completa todas as unidades hospitalares cadastradas no sistema.",
		icon: <Hospital size={20} />,
		href: "#",
	},
	{
		title: "Posologias",
		description:
			"Cadastre, edite e gerencie de forma completa todas as posologias cadastradas no sistema.",
		icon: <Clock size={20} />,
		href: "#",
	},
];
