"use client";
import {
	Sheet,
	SheetContent,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Form } from "../ui/form";
import { LoaderCircle, SquarePen } from "lucide-react";
import { MedicalRecordField } from "./add-prescription-form/medical-record-input";
import { PatientNameField } from "./add-prescription-form/patient-name-input";
import { TreatmentDaysPicker } from "./add-prescription-form/treatment-days-picker";
import { UnitCombobox } from "./add-prescription-form/unit-combobox";
import { MedicineCombobox } from "./add-prescription-form/medicine-combobox";
import { DoseCombobox } from "./add-prescription-form/dose-combobox";
import { PosologyCombobox } from "./add-prescription-form/posology-combobox";
import { ViaCombobox } from "./add-prescription-form/via-combobox";
import { PrescriptionTypeToggle } from "./add-prescription-form/prescription-type-toggle";
import { Prescription } from "@/@types/prescription";
import { useEffect } from "react";
import { useEditPrescription } from "@/hooks/use-edit-prescription";
import { useManualStore } from "@/store/use-manual";

interface EditPrescriptionFormProps {
	prescription: Prescription;
}

export function EditPrescriptionForm({
	prescription,
}: EditPrescriptionFormProps) {
	const { setIsManually } = useManualStore();
	const {
		form,
		isSheetOpen,
		setIsSheetOpen,
		isLoadingEditPrescription,
		setPrescriptionId,
	} = useEditPrescription();

	useEffect(() => {
		setPrescriptionId(prescription.id);
		setIsManually(true);
		console.log('render');
		
		form.reset({
			medicalRecord: prescription.medicalRecord,
			patientName: prescription.patientName,
			unit: prescription.unit,
			medicine: prescription.medicine,
			dose: prescription.dose,
			via: prescription.via,
			posology: prescription.posology,
			treatmentDays: prescription.treatmentDays,
		});
	}, []);

	return (
		<Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
			<SheetTrigger asChild>
				<Button variant="outline" size="sm">
					<SquarePen className="h-4 w-4" />
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
								{isLoadingEditPrescription && (
									<LoaderCircle className="animate-spin" />
								)}

								{!isLoadingEditPrescription && "Confirmar"}
							</Button>
						</div>
					</form>
				</Form>
			</SheetContent>
		</Sheet>
	);
}
