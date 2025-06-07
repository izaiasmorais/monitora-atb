import { ChartBarInteractive } from "@/components/charts/metric-charts";
import { Summary } from "@/components/dashboard/summary";

export default function Dashboard() {
	return (
		<main className="w-full flex flex-col gap-6">
			<Summary />

			<ChartBarInteractive />
		</main>
	);
}
