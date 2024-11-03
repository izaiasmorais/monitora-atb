"use client";
import { BarChartContainer } from "@/components/charts/bar-chart";
import { PieChartContainer } from "@/components/charts/pie-chart";
import { Summary } from "@/components/dashboard/summary";

export default function Dashboard() {
	return (
		<main className="flex flex-col gap-4">
			<Summary />

			<section className="grid gap-4 md:gap-6 md:grid-cols-2 h-[400px]">
				<BarChartContainer />
				<PieChartContainer />
			</section>
		</main>
	);
}
