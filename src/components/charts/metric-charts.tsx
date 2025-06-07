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
	{ date: "2025-05-01", dot: 142, lot: 89, ddd: 78, ddg: 156 },
	{ date: "2025-05-02", dot: 156, lot: 92, ddd: 85, ddg: 168 },
	{ date: "2025-05-03", dot: 134, lot: 87, ddd: 72, ddg: 145 },
	{ date: "2025-05-04", dot: 167, lot: 95, ddd: 91, ddg: 179 },
	{ date: "2025-05-05", dot: 189, lot: 104, ddd: 98, ddg: 201 },
	{ date: "2025-05-06", dot: 178, lot: 101, ddd: 94, ddg: 188 },
	{ date: "2025-05-07", dot: 145, lot: 88, ddd: 76, ddg: 152 },
	{ date: "2025-05-08", dot: 163, lot: 97, ddd: 89, ddg: 174 },
	{ date: "2025-05-09", dot: 138, lot: 84, ddd: 71, ddg: 142 },
	{ date: "2025-05-10", dot: 172, lot: 99, ddd: 93, ddg: 183 },
	{ date: "2025-05-11", dot: 159, lot: 94, ddd: 86, ddg: 169 },
	{ date: "2025-05-12", dot: 148, lot: 91, ddd: 81, ddg: 158 },
	{ date: "2025-05-13", dot: 141, lot: 86, ddd: 74, ddg: 148 },
	{ date: "2025-05-14", dot: 185, lot: 103, ddd: 96, ddg: 195 },
	{ date: "2025-05-15", dot: 176, lot: 100, ddd: 92, ddg: 186 },
	{ date: "2025-05-16", dot: 164, lot: 96, ddd: 88, ddg: 173 },
	{ date: "2025-05-17", dot: 192, lot: 106, ddd: 101, ddg: 204 },
	{ date: "2025-05-18", dot: 153, lot: 93, ddd: 84, ddg: 162 },
	{ date: "2025-05-19", dot: 139, lot: 85, ddd: 73, ddg: 146 },
	{ date: "2025-05-20", dot: 147, lot: 90, ddd: 80, ddg: 155 },
	{ date: "2025-05-21", dot: 132, lot: 82, ddd: 69, ddg: 138 },
	{ date: "2025-05-22", dot: 128, lot: 81, ddd: 67, ddg: 135 },
	{ date: "2025-05-23", dot: 161, lot: 95, ddd: 87, ddg: 171 },
	{ date: "2025-05-24", dot: 155, lot: 93, ddd: 83, ddg: 164 },
	{ date: "2025-05-25", dot: 149, lot: 91, ddd: 79, ddg: 157 },
	{ date: "2025-05-26", dot: 143, lot: 88, ddd: 75, ddg: 150 },
	{ date: "2025-05-27", dot: 181, lot: 102, ddd: 95, ddg: 191 },
	{ date: "2025-05-28", dot: 151, lot: 92, ddd: 82, ddg: 160 },
	{ date: "2025-05-29", dot: 136, lot: 84, ddd: 70, ddg: 141 },
	{ date: "2025-05-30", dot: 168, lot: 98, ddd: 90, ddg: 177 },
	{ date: "2025-05-31", dot: 144, lot: 89, ddd: 77, ddg: 153 },
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
			dot: Math.round(
				filteredData.reduce((acc, curr) => acc + curr.dot, 0) / count
			),
			lot: Math.round(
				filteredData.reduce((acc, curr) => acc + curr.lot, 0) / count
			),
			ddd: Math.round(
				filteredData.reduce((acc, curr) => acc + curr.ddd, 0) / count
			),
			ddg: Math.round(
				filteredData.reduce((acc, curr) => acc + curr.ddg, 0) / count
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
