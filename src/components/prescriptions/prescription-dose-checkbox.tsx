"use client";

import { Checkbox } from "@/components/ui/checkbox";

export function PrescriptionDoseCheckbox() {
	return (
		<div className="flex items-center space-x-2">
			<Checkbox id="defaultDose" />
			<label
				htmlFor="defaultDose"
				className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
			>
				Utilizar dose padronizada
			</label>
		</div>
	);
}
