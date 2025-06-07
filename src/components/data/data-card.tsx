import { ArrowRight } from "lucide-react";
import Link from "next/link";

interface DataCardProps {
	title: string;
	description: string;
	icon: React.ReactNode;
	href: string;
}

export function DataCard({ title, description, icon, href }: DataCardProps) {
	return (
		<div className="bg-muted/20 rounded-lg border border-muted p-6 flex flex-col gap-6">
			<div className="flex flex-col gap-2">
				<div className="flex items-center gap-2">
					{icon}
					<strong>{title}</strong>
				</div>

				<span className="text-sm text-muted-foreground">{description}</span>
			</div>

			<div className="w-full flex justify-end">
				<Link
					href={href}
					className="flex items-center gap-2 text-sm
				hover:text-primary transition-all"
				>
					Acessar
					<ArrowRight size={16} />
				</Link>
			</div>
		</div>
	);
}
