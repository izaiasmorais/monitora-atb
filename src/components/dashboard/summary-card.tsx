import { ReactNode } from "react";
import { Card } from "../ui/card";
interface SummaryCardProps {
	title: string;
	value: number;
	icon: ReactNode;
	description: ReactNode;
}

export function SummaryCard({ value, icon, title }: SummaryCardProps) {
	return (
		<Card className="p-4 md:p-6">
			<div className="flex justify-between items-center">
				<span className="text-sm text-muted-foreground font-medium">
					{title}
				</span>
				{icon}
			</div>

			<h1 className="text-xl md:text-4xl mt-4 font-semibold leading-tight">
				{value}
			</h1>
		</Card>
	);
}
