"use client";
import {
	Sheet,
	SheetContent,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";
import { Form } from "../ui/form";
import { LoaderCircle, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCreatePrescription } from "@/hooks/use-create-prescription";
import { MedicalRecordField } from "./add-prescription-form/medical-record-input";
import { PatientNameField } from "./add-prescription-form/patient-name-input";
import { TreatmentDaysPicker } from "./add-prescription-form/treatment-days-picker";
import { UnitCombobox } from "./add-prescription-form/unit-combobox";
import { MedicineCombobox } from "./add-prescription-form/medicine-combobox";
import { DoseCombobox } from "./add-prescription-form/dose-combobox";
import { PosologyCombobox } from "./add-prescription-form/posology-combobox";
import { ViaCombobox } from "./add-prescription-form/via-combobox";
import { PrescriptionTypeToggle } from "./add-prescription-form/prescription-type-toggle";

export function AddPrescriptionForm() {
	const { form, isSheetOpen, setIsSheetOpen, isLoadingCreatePrescription } =
		useCreatePrescription();

	return (
		<Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
			<SheetTrigger asChild>
				<Button className="flex items-center gap-2 ml-auto w-full lg:max-w-[200px]">
					<Plus className="w-5 h-5" />
					Adicionar prescrição
				</Button>
			</SheetTrigger>

			<SheetContent data-state="open">
				<SheetHeader>
					<SheetTitle>Adicionar Prescrição</SheetTitle>
				</SheetHeader>

				<Form {...form}>
					<form onSubmit={form.handleSubmitForm} className="space-y-6 pt-6">
						<div className="grid grid-cols-2 gap-6">
							<MedicalRecordField form={form} />
							<PatientNameField form={form} />
							<UnitCombobox form={form} />
							<TreatmentDaysPicker form={form} />
						</div>

						<PrescriptionTypeToggle form={form} />

						<MedicineCombobox form={form} />

						<DoseCombobox form={form} />

						<ViaCombobox form={form} />

						<PosologyCombobox form={form} />

						<div className="flex w-full justify-end gap-4">
							<Button
								variant="secondary"
								onClick={() => [setIsSheetOpen(false), form.reset()]}
								className="w-[100px]"
							>
								Cancelar
							</Button>

							<Button type="submit" className="w-[100px]">
								{isLoadingCreatePrescription && (
									<LoaderCircle className="animate-spin" />
								)}

								{!isLoadingCreatePrescription && "Confirmar"}
							</Button>
						</div>
					</form>
				</Form>
			</SheetContent>
		</Sheet>
	);
}
