"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
	Sheet,
	SheetContent,
	SheetFooter,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";
import { LoaderCircle, SquarePen } from "lucide-react";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "../ui/select";
import { PrescriptionDoseCheckbox } from "./prescription-dose-checkbox";
import { PosologyDaysPicker } from "./posology-days-picker";
import { useForm, Controller, type SubmitErrorHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { queryClient } from "@/lib/react-query";
import { toast } from "sonner";
import { useState, useEffect } from "react";
import { z } from "zod";
import { editPrescription } from "@/api/prescriptions/edit-prescription";
import type { Prescription } from "@/@types/prescription";

const createPrescriptionsFormSchema = z.object({
	medicalRecord: z.string().min(1),
	name: z.string().min(1),
	unit: z.string().min(1),
	medicine: z.string().min(1),
	via: z.string().min(1),
	dose: z.coerce.number().min(1),
	posology: z.string().min(1),
	posologyDays: z.array(z.string()).min(1),
});

export type EditPrescriptionFormData = z.infer<
	typeof createPrescriptionsFormSchema
>;

interface EditPrescriptionSheetProps {
	prescription: Prescription;
}

export function EditPrescriptionSheet({
	prescription,
}: EditPrescriptionSheetProps) {
	const [isSheetOpen, setIsSheetOpen] = useState(false);

	const { register, handleSubmit, control, setValue } =
		useForm<EditPrescriptionFormData>({
			defaultValues: {
				medicalRecord: prescription.medicalRecord,
				name: prescription.name,
				dose: prescription.dose,
				unit: prescription.unit,
				medicine: prescription.medicine,
				via: prescription.via,
				posology: prescription.posology,
				posologyDays: prescription.posologyDays,
			},
			resolver: zodResolver(createPrescriptionsFormSchema),
		});

	const { mutate: updatePrescriptionFn, isLoading } = useMutation({
		mutationFn: (data: EditPrescriptionFormData) =>
			editPrescription(prescription.id, data),
		mutationKey: ["edit-prescription"],
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: ["prescriptions"],
			});
			toast.success("Prescrição atualizada com sucesso!");
			setIsSheetOpen(false);
		},
	});

	const onFormError: SubmitErrorHandler<EditPrescriptionFormData> = (
		errors
	) => {
		console.log(errors);
		toast.error("Preencha todos os campos obrigatórios");
	};

	function handleUpdatePrescription(data: EditPrescriptionFormData) {
		updatePrescriptionFn(data);
	}

	return (
		<Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
			<SheetTrigger asChild>
				<Button variant="outline" size="sm">
					<SquarePen className="h-4 w-4" />
				</Button>
			</SheetTrigger>

			<SheetContent data-state="open">
				<SheetHeader>
					<SheetTitle>Editar Prescrição</SheetTitle>
				</SheetHeader>

				<form
					onSubmit={handleSubmit(handleUpdatePrescription, onFormError)}
					className="grid gap-8 py-8"
				>
					<div className="flex items-center gap-4">
						<div className="flex flex-col gap-3 w-full">
							<Label htmlFor="medicalRecord">Número do Prontuário*</Label>
							<Input
								id="medicalRecord"
								placeholder="534047436"
								type="text"
								{...register("medicalRecord")}
								required
							/>
						</div>

						<div className="flex flex-col gap-3 w-full">
							<Label htmlFor="name">Nome do paciente*</Label>
							<Input
								id="name"
								placeholder="Digite um nome"
								type="text"
								{...register("name")}
								required
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
									<Select
										onValueChange={field.onChange}
										value={field.value}
										required
									>
										<SelectTrigger className="h-9">
											<SelectValue placeholder="Selecione uma unidade" />
										</SelectTrigger>
										<SelectContent>
											<SelectItem value="Posto 1">Posto 1</SelectItem>
											<SelectItem value="Posto 2">Posto 3</SelectItem>
											<SelectItem value="Posto 3">Posto 3</SelectItem>
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
									<Select
										onValueChange={field.onChange}
										value={field.value}
										required
									>
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
								<Select
									onValueChange={field.onChange}
									value={field.value}
									required
								>
									<SelectTrigger className="h-9">
										<SelectValue placeholder="Selecione a via" />
									</SelectTrigger>
									<SelectContent>
										<SelectItem value="EV">EV</SelectItem>
										<SelectItem value="VO">VO</SelectItem>
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
								placeholder="500"
								{...register("dose")}
								required
							/>
							<Button type="button" className="w-full">
								Definir dose manualmente
							</Button>
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
									<Select
										onValueChange={field.onChange}
										value={field.value}
										required
									>
										<SelectTrigger className="h-9">
											<SelectValue placeholder="Selecione a posologia" />
										</SelectTrigger>

										<SelectContent>
											<SelectItem value="6/6h">6/6h</SelectItem>
											<SelectItem value="8/8h">8/8h</SelectItem>
											<SelectItem value="12/12">12/12h</SelectItem>
											<SelectItem value="24/24h">24/24h</SelectItem>
										</SelectContent>
									</Select>
								)}
							/>
						</div>

						<div className="flex flex-col gap-3 w-full">
							<Label htmlFor="posologyDays">Dias de tratamento*</Label>
							<PosologyDaysPicker
								setValue={setValue}
								posologyDays={prescription.posologyDays}
							/>
						</div>
					</div>

					<SheetFooter className="flex-1 flex justify-end">
						<Button type="submit" className="w-[125px]">
							{isLoading && <LoaderCircle className="animate-spin" />}

							{!isLoading && "Confirmar"}
						</Button>
					</SheetFooter>
				</form>
			</SheetContent>
		</Sheet>
	);
}
