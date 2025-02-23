import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CreatePrescriptionFormData } from "@/hooks/use-create-prescription";
import { useManualStore } from "@/store/use-manual";
import { UseFormReturn } from "react-hook-form";

export function PrescriptionTypeToggle({
	form,
}: {
	form: UseFormReturn<CreatePrescriptionFormData>;
}) {
	const { isManually, setIsManually } = useManualStore();

	function resetPrescription(isManually: boolean) {
		setIsManually(isManually);
		form.reset({
			medicalRecord: form.watch("medicalRecord"),
			patientName: form.watch("patientName"),
			unit: form.watch("unit"),
			treatmentDays: form.watch("treatmentDays"),
			medicine: "",
			via: "",
			dose: "",
			posology: "",
		});
	}

	return (
		<Tabs value={isManually ? "manually" : "medicine"}>
			<TabsList className="grid w-full grid-cols-2 h-12">
				<TabsTrigger value="medicine" onClick={() => resetPrescription(false)}>
					Por Medicamento
				</TabsTrigger>

				<TabsTrigger value="manually" onClick={() => resetPrescription(true)}>
					Definir Manualmente
				</TabsTrigger>
			</TabsList>

			<TabsContent value="medicine" />

			<TabsContent value="manually" />
		</Tabs>
	);
}
