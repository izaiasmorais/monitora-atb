import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetDescription,
	SheetFooter,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";
import { Plus } from "lucide-react";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "../ui/select";
import { PrescriptionDoseCheckbox } from "./prescription-dose-checkbox";
import { PosologyDaysPicker } from "./posology-days-picker";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import type { FormEvent } from "react";

const createPrescriptionsFormSchema = z.object({
	medicalReport: z.number().min(1),
	name: z.string().min(1),
	unit: z.string().min(1),
	medicine: z.string().min(1),
	via: z.string().min(1),
	dose: z.string().min(1),
	posology: z.string().min(1),
	posologyDays: z.string().array().min(1),
});

type createPrescriptionFormData = z.infer<typeof createPrescriptionsFormSchema>;

export function AddPrescriptionSheet() {
	const {
		register,
		handleSubmit,
		control,
		watch,
		formState: { errors },
	} = useForm<createPrescriptionFormData>({
		defaultValues: {
			medicalReport: undefined,
			name: "",
		},
		resolver: zodResolver(createPrescriptionsFormSchema),
	});

	const fields = watch([
		"medicalReport",
		"name",
		"unit",
		"medicine",
		"via",
		"dose",
		"posology",
	]);

	return (
		<Sheet>
			<SheetTrigger asChild>
				<Button className="flex items-center gap-2" size="sm">
					<Plus className="w-5 h-5" />
					Adicionar prescrição
				</Button>
			</SheetTrigger>

			<SheetContent data-state="open">
				<SheetHeader>
					<SheetTitle>Adicionar Prescrição</SheetTitle>
					{/* <SheetDescription>

					</SheetDescription> */}
				</SheetHeader>

				<form className="grid gap-8 py-8" onSubmit={() => console.log(fields)}>
					<div className="flex items-center gap-4">
						<div className="flex flex-col gap-3 w-full">
							<Label htmlFor="medicalReport">Número do Prontuário*</Label>
							<Input
								id="medicalReport"
								placeholder="534047436"
								type="number"
								required
								{...register("medicalReport", { required: true })}
							/>
						</div>

						<div className="flex flex-col gap-3 w-full">
							<Label htmlFor="name">Nome do paciente*</Label>
							<Input
								id="name"
								placeholder="Digite um nome"
								type="text"
								required
								{...register("name", { required: true })}
							/>
						</div>
					</div>

					<div className="flex items-center gap-4">
						<div className="flex flex-col gap-3 w-full">
							<Label htmlFor="unit">Unidade*</Label>

							<Controller
								name="unit"
								control={control}
								render={({ field }) => (
									<Select onValueChange={field.onChange} value={field.value}>
										<SelectTrigger className="h-9">
											<SelectValue placeholder="Selecione uma unidade" />
										</SelectTrigger>
										<SelectContent>
											<SelectItem value="Posto 1">Posto 1</SelectItem>
											<SelectItem value="Posto 2">Posto 2</SelectItem>
											<SelectItem value="Posto 2">Posto 2</SelectItem>
											<SelectItem value="UTI">UTI</SelectItem>
											<SelectItem value="UNACON">UNACON</SelectItem>
										</SelectContent>
									</Select>
								)}
							/>
						</div>

						<div className="flex flex-col gap-3 w-full">
							<Label htmlFor="unit">Medicamento*</Label>

							<Controller
								name="medicine"
								control={control}
								render={({ field }) => (
									<Select onValueChange={field.onChange} value={field.value}>
										<SelectTrigger className="h-9">
											<SelectValue placeholder="Selecione um medicamento" />
										</SelectTrigger>
										<SelectContent>
											<SelectItem value="Polimixina B1">
												Polimixina B1
											</SelectItem>
											<SelectItem value="Ciprofloxacino Inj">
												Ciprofloxacino Inj
											</SelectItem>
											<SelectItem value="Metronidazol Inj">
												Metronidazol Inj
											</SelectItem>
											<SelectItem value="Cefepime">Cefepime</SelectItem>
											<SelectItem value="Tazobactam">Tazobactam</SelectItem>
										</SelectContent>
									</Select>
								)}
							/>
						</div>
					</div>

					<div className="flex flex-col gap-3">
						<Label htmlFor="via">Via de administração*</Label>
						<Controller
							name="via"
							control={control}
							render={({ field }) => (
								<Select onValueChange={field.onChange} value={field.value}>
									<SelectTrigger className="h-9">
										<SelectValue placeholder="Selecione a via" />
									</SelectTrigger>
									<SelectContent>
										<SelectItem value="1">EV</SelectItem>
										<SelectItem value="2">VO</SelectItem>
									</SelectContent>
								</Select>
							)}
						/>
					</div>

					<div className="flex flex-col gap-3">
						<Label htmlFor="dose">Dose*</Label>
						<div className="flex items-center gap-4">
							<Input
								className="w-full"
								type="number"
								id="dose"
								placeholder="500mg"
								required
								{...register("dose", { required: true })}
							/>
							<Button className="w-full">Definir dose manualmente</Button>
						</div>
						<PrescriptionDoseCheckbox />
					</div>

					<div className="flex items-center gap-4">
						<div className="flex flex-col gap-3 w-full">
							<Label htmlFor="unit">Posologia*</Label>
							<Controller
								name="posology"
								control={control}
								render={({ field }) => (
									<Select onValueChange={field.onChange} value={field.value}>
										<SelectTrigger className="h-9">
											<SelectValue placeholder="Selecione a posologia" />
										</SelectTrigger>

										<SelectContent>
											<SelectItem value="1">6/6h</SelectItem>
											<SelectItem value="2">8/8h</SelectItem>
											<SelectItem value="3">12/12h</SelectItem>
											<SelectItem value="uti">24/24h</SelectItem>
										</SelectContent>
									</Select>
								)}
							/>
						</div>

						<div className="flex flex-col gap-3 w-full">
							<Label htmlFor="dose">Dias de tratamento*</Label>
							<PosologyDaysPicker />
						</div>
					</div>

					<div className="flex-1 flex justify-end">
						<Button type="submit">Confirmar</Button>
					</div>
				</form>

				{/* <SheetFooter className="flex-1 flex items-end">
					<SheetClose asChild>
						<Button type="submit">Confirmar</Button>
					</SheetClose>
				</SheetFooter> */}
			</SheetContent>
		</Sheet>
	);
}
