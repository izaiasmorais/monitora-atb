"use client";
import * as React from "react";
import { TrendingUp } from "lucide-react";
import { Label, Pie, PieChart } from "recharts";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import {
	ChartConfig,
	ChartContainer,
	ChartTooltip,
	ChartTooltipContent,
} from "@/components/ui/chart";

const chartData = [
	{ browser: "Posto 1", visitors: 4, fill: "var(--color-chrome)" },
	{ browser: "Posto 2", visitors: 3, fill: "var(--color-safari)" },
	{ browser: "Posto 3", visitors: 6, fill: "var(--color-firefox)" },
	{ browser: "UTI", visitors: 2, fill: "var(--color-edge)" },
	{ browser: "UNACON", visitors: 5, fill: "var(--color-other)" },
];

const chartConfig = {
	visitors: {
		label: "Pacientes",
	},
	chrome: {
		label: "Posto 1",
		color: "#172554",
	},
	safari: {
		label: "Posto 2",
		color: "#1d4ed8",
	},
	firefox: {
		label: "Posto 3",
		color: "#3b82f6",
	},
	edge: {
		label: "UTI",
		color: "#93c5fd",
	},
	other: {
		label: "UNACON",
		color: "#eff6ff",
	},
} satisfies ChartConfig;

export function PieChartContainer() {
	const totalPatients = React.useMemo(() => {
		return chartData.reduce((acc, curr) => acc + curr.visitors, 0);
	}, []);

	return (
		<Card className="flex flex-col h-[450px]">
			<CardHeader className="items-center pb-0">
				<CardTitle>Pacientes por Unidade</CardTitle>
				<CardDescription>Pacientes ativos no mês de Setembro 2024</CardDescription>
			</CardHeader>
			<CardContent className="flex-1 pb-0">
				<ChartContainer
					config={chartConfig}
					className="mx-auto aspect-square max-h-[300px]"
				>
					<PieChart>
						<ChartTooltip
							cursor={false}
							content={<ChartTooltipContent hideLabel />}
						/>
						<Pie
							data={chartData}
							dataKey="visitors"
							nameKey="browser"
							innerRadius={80}
							strokeWidth={5}
						>
							<Label
								content={({ viewBox }) => {
									if (viewBox && "cx" in viewBox && "cy" in viewBox) {
										return (
											<text
												x={viewBox.cx}
												y={viewBox.cy}
												textAnchor="middle"
												dominantBaseline="middle"
											>
												<tspan
													x={viewBox.cx}
													y={viewBox.cy}
													className="fill-foreground text-3xl font-bold"
												>
													{totalPatients.toLocaleString()}
												</tspan>
												<tspan
													x={viewBox.cx}
													y={(viewBox.cy || 0) + 24}
													className="fill-muted-foreground"
												>
													Pacientes
												</tspan>
											</text>
										);
									}
								}}
							/>
						</Pie>
					</PieChart>
				</ChartContainer>
			</CardContent>

			<CardFooter className="flex-col gap-2 text-sm">
				<div className="flex items-center gap-2 font-medium leading-none">
					A quantidade de pacientes aumentou 20.2% neste período{" "}
					<TrendingUp className="h-4 w-4" />
				</div>
				<div className="leading-none text-muted-foreground">
					Mostrando dados do mês de setembro
				</div>
			</CardFooter>
		</Card>
	);
}
