"use client";

import { TrendingUp } from "lucide-react";
import { Bar, BarChart, CartesianGrid, LabelList, XAxis } from "recharts";
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

export const description = "A multiple bar chart";

const chartData = [
	{ month: "Polimixina", desktop: 5 },
	{ month: "Gentamicina", desktop: 3 },
	{ month: "Ciprofloxacino", desktop: 4 },
	{ month: "Metronidazol", desktop: 8 },
	{ month: "Cefepime", desktop: 3 },
	{ month: "Piperacilina", desktop: 6 },
	{ month: "Vancomicina", desktop: 7 },
	{ month: "Meropenem", desktop: 13 },
	{ month: "Tigeciclina", desktop: 5 },
	{ month: "Fluconazol", desktop: 2 },
];

const chartConfig = {
	desktop: {
		label: "Desktop",
		color: "hsl(var(--chart-1))",
	},
} satisfies ChartConfig;

export function BarChartContainer() {
	return (
		<Card className="h-[450px]">
			<CardHeader>
				<CardTitle>Prescrições por Medicamento</CardTitle>
				<CardDescription>Setembro 2024</CardDescription>
			</CardHeader>

			<CardContent>
				<ChartContainer config={chartConfig} className="h-[250px] w-full">
					<BarChart
						accessibilityLayer
						data={chartData}
						margin={{
							top: 20,
						}}
					>
						<CartesianGrid vertical={false} />
						<XAxis
							dataKey="month"
							tickLine={false}
							tickMargin={10}
							axisLine={false}
							tickFormatter={(value) => value.slice(0, 10)}
						/>
						<ChartTooltip
							cursor={false}
							content={<ChartTooltipContent indicator="dashed" />}
						/>
						<Bar dataKey="desktop" fill="#2563eb" radius={0}>
							<LabelList
								position="top"
								offset={12}
								className="fill-foreground"
								fontSize={12}
							/>
						</Bar>
					</BarChart>
				</ChartContainer>
			</CardContent>

			<CardFooter className="flex-col items-start gap-2 text-sm">
				<div className="flex gap-2 font-medium leading-none">
					A quantidade de prescrições aumentou em 15% este mês.{" "}
					<TrendingUp className="h-4 w-4" />
				</div>
				<div className="leading-none text-muted-foreground">
					Mostrando dados do mês de setembro
				</div>
			</CardFooter>
		</Card>
	);
}
