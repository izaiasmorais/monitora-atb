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

export function PatientNameField({
	form,
}: {
	form: UseFormReturn<CreatePrescriptionFormData>;
}) {
	return (
		<FormField
			control={form.control}
			name="patientName"
			render={({ field }) => (
				<FormItem>
					<FormLabel>Nome do Paciente</FormLabel>
					<FormControl>
						<Input placeholder="John Doe" {...field} />
					</FormControl>
					<FormDescription />
					<FormMessage />
				</FormItem>
			)}
		/>
	);
}
