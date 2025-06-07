"use client";

import * as React from "react";
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";
import { DateRange } from "react-day-picker";
import { isWithinInterval, parseISO } from "date-fns";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import {
	ChartConfig,
	ChartContainer,
	ChartTooltip,
	ChartTooltipContent,
} from "@/components/ui/chart";
import { DateRangePicker } from "@/components/ui/date-range-picker";

export const description = "An interactive bar chart";

const chartData = [
	{ date: "2025-05-01", dot: 1.43, lot: 0.9, ddd: 0.78, ddg: 1.57 },
	{ date: "2025-05-02", dot: 1.56, lot: 0.93, ddd: 0.86, ddg: 1.68 },
	{ date: "2025-05-03", dot: 1.35, lot: 0.87, ddd: 0.73, ddg: 1.45 },
	{ date: "2025-05-04", dot: 1.68, lot: 0.95, ddd: 0.92, ddg: 1.79 },
	{ date: "2025-05-05", dot: 1.9, lot: 1.05, ddd: 0.98, ddg: 2.02 },
	{ date: "2025-05-06", dot: 1.78, lot: 1.02, ddd: 0.94, ddg: 1.89 },
	{ date: "2025-05-07", dot: 1.46, lot: 0.89, ddd: 0.77, ddg: 1.52 },
	{ date: "2025-05-08", dot: 1.64, lot: 0.97, ddd: 0.9, ddg: 1.75 },
	{ date: "2025-05-09", dot: 1.38, lot: 0.85, ddd: 0.71, ddg: 1.43 },
	{ date: "2025-05-10", dot: 1.73, lot: 1.0, ddd: 0.93, ddg: 1.83 },
	{ date: "2025-05-11", dot: 1.59, lot: 0.95, ddd: 0.87, ddg: 1.69 },
	{ date: "2025-05-12", dot: 1.49, lot: 0.92, ddd: 0.82, ddg: 1.58 },
	{ date: "2025-05-13", dot: 1.42, lot: 0.86, ddd: 0.75, ddg: 1.49 },
	{ date: "2025-05-14", dot: 1.85, lot: 1.04, ddd: 0.96, ddg: 1.96 },
	{ date: "2025-05-15", dot: 1.77, lot: 1.01, ddd: 0.93, ddg: 1.86 },
	{ date: "2025-05-16", dot: 1.64, lot: 0.96, ddd: 0.89, ddg: 1.74 },
	{ date: "2025-05-17", dot: 1.93, lot: 1.06, ddd: 1.02, ddg: 2.04 },
	{ date: "2025-05-18", dot: 1.54, lot: 0.94, ddd: 0.84, ddg: 1.63 },
	{ date: "2025-05-19", dot: 1.39, lot: 0.86, ddd: 0.74, ddg: 1.47 },
	{ date: "2025-05-20", dot: 1.48, lot: 0.9, ddd: 0.8, ddg: 1.56 },
	{ date: "2025-05-21", dot: 1.33, lot: 0.83, ddd: 0.7, ddg: 1.38 },
	{ date: "2025-05-22", dot: 1.29, lot: 0.82, ddd: 0.68, ddg: 1.35 },
	{ date: "2025-05-23", dot: 1.61, lot: 0.96, ddd: 0.88, ddg: 1.72 },
	{ date: "2025-05-24", dot: 1.56, lot: 0.93, ddd: 0.83, ddg: 1.65 },
	{ date: "2025-05-25", dot: 1.5, lot: 0.91, ddd: 0.8, ddg: 1.57 },
	{ date: "2025-05-26", dot: 1.43, lot: 0.89, ddd: 0.76, ddg: 1.51 },
	{ date: "2025-05-27", dot: 1.82, lot: 1.03, ddd: 0.95, ddg: 1.91 },
	{ date: "2025-05-28", dot: 1.51, lot: 0.93, ddd: 0.83, ddg: 1.61 },
	{ date: "2025-05-29", dot: 1.37, lot: 0.84, ddd: 0.71, ddg: 1.41 },
	{ date: "2025-05-30", dot: 1.69, lot: 0.99, ddd: 0.91, ddg: 1.78 },
	{ date: "2025-05-31", dot: 1.45, lot: 0.9, ddd: 0.77, ddg: 1.54 },
];

const chartConfig = {
	views: {
		label: "Valor",
		color: "",
	},
	dot: {
		label: "DOT",
		color: "#3b82f6",
	},
	lot: {
		label: "LOT",
		color: "#3b82f6",
	},
	ddd: {
		label: "DDD",
		color: "#3b82f6",
	},
	ddg: {
		label: "DDG",
		color: "#3b82f6",
	},
} satisfies ChartConfig;

export function ChartBarInteractive() {
	const [activeChart, setActiveChart] =
		React.useState<keyof typeof chartConfig>("dot");
	const [dateRange, setDateRange] = React.useState<DateRange | undefined>();

	const filteredData = React.useMemo(() => {
		if (!dateRange?.from || !dateRange?.to) {
			return chartData;
		}

		return chartData.filter((item) => {
			const itemDate = parseISO(item.date);
			return isWithinInterval(itemDate, {
				start: dateRange.from!,
				end: dateRange.to!,
			});
		});
	}, [dateRange]);

const averages = React.useMemo(() => {
	const count = filteredData.length;
	if (count === 0) {
		return { dot: 0, lot: 0, ddd: 0, ddg: 0 };
	}

	return {
		dot: parseFloat(
			(filteredData.reduce((acc, curr) => acc + curr.dot, 0) / count).toFixed(2)
		),
		lot: parseFloat(
			(filteredData.reduce((acc, curr) => acc + curr.lot, 0) / count).toFixed(2)
		),
		ddd: parseFloat(
			(filteredData.reduce((acc, curr) => acc + curr.ddd, 0) / count).toFixed(2)
		),
		ddg: parseFloat(
			(filteredData.reduce((acc, curr) => acc + curr.ddg, 0) / count).toFixed(2)
		),
	};
}, [filteredData]);

	return (
		<Card className="py-0 bg-muted/20 shadow-none border-muted">
			<CardHeader className="flex flex-col items-stretch border-b !p-0 sm:flex-row">
				<div className="flex flex-1 flex-col justify-center gap-1 px-6 pt-4 pb-3 sm:!py-0">
					<CardTitle className="text-xl">Dados microbiológicos</CardTitle>

					<CardDescription>
						Análise comparativa dos indicadores microbiológicos ao longo do
						tempo
					</CardDescription>
				</div>

				<div className="flex">
					{["dot", "lot", "ddd", "ddg"].map((key) => {
						const chart = key as keyof typeof chartConfig;

						return (
							<button
								key={chart}
								data-active={activeChart === chart}
								className="data-[active=true]:bg-muted/50 relative z-30 flex flex-1 flex-col justify-center gap-1 border-t px-6 py-4 text-left even:border-l sm:border-t-0 sm:border-l sm:px-8 sm:py-6"
								onClick={() => setActiveChart(chart)}
							>
								<span className="text-muted-foreground text-xs">
									{chartConfig[chart].label}
								</span>
								<span className="text-lg leading-none font-bold sm:text-3xl">
									{averages[key as keyof typeof averages]}
								</span>
								<span className="text-muted-foreground text-xs">Média</span>
							</button>
						);
					})}
				</div>
			</CardHeader>

			<CardContent className="px-2 sm:p-6">
				<div className="mb-4">
					<DateRangePicker
						date={dateRange}
						onDateChange={setDateRange}
						className="w-fit"
					/>
				</div>

				<ChartContainer
					config={chartConfig}
					className="aspect-auto h-[250px] w-full"
				>
					<AreaChart data={filteredData}>
						<defs>
							<linearGradient id="fill" x1="0" y1="0" x2="0" y2="1">
								<stop offset="5%" stopColor="#1d4ed8" stopOpacity={0.5} />

								<stop offset="95%" stopColor="#3b82f6" stopOpacity={0.1} />
							</linearGradient>
						</defs>

						<CartesianGrid vertical={false} />

						<XAxis
							dataKey="date"
							tickLine={false}
							axisLine={false}
							tickMargin={8}
							minTickGap={32}
							tickFormatter={(value) => {
								const date = new Date(value);
								return date.toLocaleDateString("pt-BR", {
									month: "short",
									day: "numeric",
								});
							}}
						/>

						<ChartTooltip
							content={
								<ChartTooltipContent
									className="w-[150px]"
									nameKey="views"
									labelFormatter={(value) => {
										return new Date(value).toLocaleDateString("pt-BR", {
											month: "short",
											day: "numeric",
											year: "numeric",
										});
									}}
								/>
							}
						/>

						<Area dataKey={activeChart} fill="url(#fill)" type="natural" />
					</AreaChart>
				</ChartContainer>
			</CardContent>
		</Card>
	);
}
