"use client";
import { useState, useMemo } from "react";
import { ChevronLeft, ChevronRight, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { prescriptions } from "@/mocks/new-prescriptions";

const MONTHS = [
	"Janeiro",
	"Fevereiro",
	"Março",
	"Abril",
	"Maio",
	"Junho",
	"Julho",
	"Agosto",
	"Setembro",
	"Outubro",
	"Novembro",
	"Dezembro",
];

const WEEKDAYS = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];

export default function PrescriptionCalendar() {
	const [currentDate, setCurrentDate] = useState(new Date());
	const [searchTerm, setSearchTerm] = useState("");

	const filteredPrescriptions = useMemo(() => {
		if (!searchTerm) return prescriptions;
		return prescriptions.filter(
			(prescription) =>
				prescription.patientName
					.toLowerCase()
					.includes(searchTerm.toLowerCase()) ||
				prescription.medicine.toLowerCase().includes(searchTerm.toLowerCase())
		);
	}, [searchTerm]);

	const getDaysInMonth = (date: Date) => {
		return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
	};

	const getFirstDayOfMonth = (date: Date) => {
		return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
	};

	const getPrescriptionsForDate = (date: Date) => {
		const dateString = date.toISOString().split("T")[0];
		return filteredPrescriptions.filter((prescription) =>
			prescription.treatmentDays.some((treatmentDay) => {
				const treatmentDate = new Date(treatmentDay)
					.toISOString()
					.split("T")[0];
				return treatmentDate === dateString;
			})
		);
	};

	const navigateMonth = (direction: "prev" | "next") => {
		setCurrentDate((prev) => {
			const newDate = new Date(prev);
			if (direction === "prev") {
				newDate.setMonth(prev.getMonth() - 1);
			} else {
				newDate.setMonth(prev.getMonth() + 1);
			}
			return newDate;
		});
	};

	const renderCalendarDays = () => {
		const daysInMonth = getDaysInMonth(currentDate);
		const firstDayOfMonth = getFirstDayOfMonth(currentDate);
		const days = [];

		for (let i = 0; i < firstDayOfMonth; i++) {
			days.push(
				<div
					key={`empty-${i}`}
					className="min-h-[120px] p-2 border border-muted"
				></div>
			);
		}

		for (let day = 1; day <= daysInMonth; day++) {
			const date = new Date(
				currentDate.getFullYear(),
				currentDate.getMonth(),
				day
			);
			const dayPrescriptions = getPrescriptionsForDate(date);
			const isToday = new Date().toDateString() === date.toDateString();

			days.push(
				<div key={day} className="min-h-[120px] p-2 border border-muted">
					<div
						className={`text-sm font-semibold mb-2 ${
							isToday
								? "bg-blue-50 w-5 h-5 flex items-center justify-center rounded-md font-bold text-blue-600 dark:bg-blue-950 dark:border-blue-800"
								: "text-muted-foreground"
						}`}
					>
						{day}
					</div>

					<div className="space-y-1">
						{dayPrescriptions.map((prescription, index) => (
							<Card
								key={`${prescription.id}-${index}`}
								className="bg-blue-50 border-blue-200 dark:bg-blue-950/20 dark:border-blue-950"
							>
								<CardContent className="p-2">
									<div className="text-xs font-medium text-blue-800 truncate dark:text-blue-300">
										{prescription.patientName}
									</div>

									<div className="text-xs text-blue-600 truncate dark:text-blue-400">
										{prescription.medicine}
									</div>
								</CardContent>
							</Card>
						))}
					</div>
				</div>
			);
		}

		return days;
	};

	return (
		<div className="w-full min-h-screen ">
			<div className="flex items-center justify-between mb-6">
				<div className="relative flex-1 max-w-xl">
					<Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />

					<Input
						placeholder="Pesquisar por termo (nome do paciente, nome do medicamento, etc.)..."
						value={searchTerm}
						onChange={(e) => setSearchTerm(e.target.value)}
						className="pl-10"
					/>
				</div>
			</div>

			<Card className="mb-4 shadow-none border-none">
				<CardContent className="p-0">
					<div className="flex items-center justify-between mb-4">
						<div className="flex items-center space-x-4">
							<h2 className="text-xl font-semibold">
								{MONTHS[currentDate.getMonth()]} {currentDate.getFullYear()}
							</h2>

							<div className="flex items-center space-x-2">
								<Button
									variant="outline"
									size="sm"
									onClick={() => navigateMonth("prev")}
								>
									<ChevronLeft className="h-4 w-4" />
								</Button>

								<Button
									variant="outline"
									size="sm"
									onClick={() => setCurrentDate(new Date())}
								>
									Hoje
								</Button>

								<Button
									variant="outline"
									size="sm"
									onClick={() => navigateMonth("next")}
								>
									<ChevronRight className="h-4 w-4" />
								</Button>
							</div>
						</div>
						<div className="text-sm text-gray-600">Visualização do mês</div>
					</div>

					<div className="grid grid-cols-7 gap-0 rounded-t-lg border-muted border border-b-0">
						{WEEKDAYS.map((day) => (
							<div
								key={day}
								className="p-3 text-center text-sm font-medium text-muted-foreground bg-muted/50
								border border-muted border-b-0 first:rounded-tl-lg last:rounded-tr-lg"
							>
								{day}
							</div>
						))}
					</div>

					<div className="grid grid-cols-7 gap-0 border border-muted">
						{renderCalendarDays()}
					</div>
				</CardContent>
			</Card>

			<div className="flex items-center space-x-4 text-sm text-gray-600">
				<div className="flex items-center space-x-2">
					<div className="w-4 h-4 bg-blue-50 border border-blue-200 rounded" />

					<span>Prescrição ativa</span>
				</div>

				<div className="flex items-center space-x-2">
					<div className="w-4 h-4 bg-blue-600 rounded"></div>
					<span>Hoje</span>
				</div>
			</div>
		</div>
	);
}
