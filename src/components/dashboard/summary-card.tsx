import { ReactNode } from "react";
import { Card } from "../ui/card";
interface SummaryCardProps {
	title: string;
	value: number;
	icon: ReactNode;
	description: string;
}

export function SummaryCard({
	value,
	icon,
	title,
	description,
}: SummaryCardProps) {
	return (
		<Card className="p-4 md:p-6 bg-muted/20 shadow-none border-muted">
			<div className="flex gap-2 items-center">
				{icon}

				<span className="text-muted-foreground font-semibold">{title}</span>
			</div>

			<div className="flex items-end gap-2">
				<h1 className="text-xl md:text-3xl mt-4 font-semibold leading-tight">
					{value}
				</h1>

				<span className="text-muted-foreground font-medium text-sm block mb-1">
					{description}
				</span>
			</div>
		</Card>
	);
}
