import {
	FormField,
	FormItem,
	FormLabel,
	FormControl,
	FormDescription,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { UseFormReturn } from "react-hook-form";
import type { PrescriptionFormData } from "../schemas/prescription";

export function MedicalRecordField({
	form,
}: {
	form: UseFormReturn<PrescriptionFormData>;
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
