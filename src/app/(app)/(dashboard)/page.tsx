import { DddChart } from "@/components/charts/ddd-chart";
import { DotChart } from "@/components/charts/dot/dot-chart";
import { LotChart } from "@/components/charts/lot-chart";

export default function Dashboard() {
	return (
		<main className="flex gap-4">
			<DotChart />
			<DddChart />
			<LotChart />
		</main>
	);
}
