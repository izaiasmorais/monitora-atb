import {
	FormField,
	FormItem,
	FormLabel,
	FormControl,
	FormDescription,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { CreatePrescriptionFormData } from "@/hooks/use-create-prescription";
import { UseFormReturn } from "react-hook-form";

export function MedicalRecordField({
	form,
}: {
	form: UseFormReturn<CreatePrescriptionFormData>;
}) {
	return (
		<FormField
			control={form.control}
			name="medicalRecord"
			render={({ field }) => (
				<FormItem>
					<FormLabel>Número do Prontuário</FormLabel>
					<FormControl>
						<Input type="number" placeholder="534047436" {...field} />
					</FormControl>
					<FormDescription />
					<FormMessage />
				</FormItem>
			)}
		/>
	);
}
