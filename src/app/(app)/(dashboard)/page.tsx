import { DddChart } from "@/components/charts/ddd-chart";
import { DotChart } from "@/components/charts/dot-chart";
import { LotChart } from "@/components/charts/lot-chart";

export default function Dashboard() {
	return (
		<main className="grid md:grid-cols-2 xl:flex gap-4">
			<DotChart />
			<LotChart />
			<DddChart />
		</main>
	);
}
