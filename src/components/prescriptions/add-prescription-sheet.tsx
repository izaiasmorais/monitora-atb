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
import { UnitSelect } from "./add-prescription-form/unit-select";
import { TreatmentDaysPciker } from "./add-prescription-form/treatment-days-picker";
import { MedicineCombobox } from "./add-prescription-form/medicine-combobox";
import { DoseCombobox } from "./add-prescription-form/dose-combobox";
import { PosologyCombobox } from "./add-prescription-form/posology-combobox";
import { ViaCombobox } from "./add-prescription-form/via-combobox";

export function AddPrescriptionSheet() {
	const { form, isSheetOpen, setIsSheetOpen, isLoadingCreatePrescription } =
		useCreatePrescription();

	return (
		<Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
			<SheetTrigger asChild>
				<Button className="flex items-center gap-2" size="sm">
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
							<UnitSelect form={form} />
							<TreatmentDaysPciker form={form} />
						</div>

						<MedicineCombobox form={form} />

						<DoseCombobox form={form} />

						<ViaCombobox form={form} />

						<PosologyCombobox form={form} />

						<div className="flex w-full justify-end gap-4">
							<Button
								variant="secondary"
								onClick={() => [setIsSheetOpen(false), form.reset()]}
							>
								Cancelar
							</Button>

							<Button type="submit">
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
