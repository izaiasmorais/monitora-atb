"use client";

import { Checkbox } from "@/components/ui/checkbox";

export function RememberPasswordCheckbox() {
	return (
		<div className="flex items-center space-x-2">
			<Checkbox id="remeberPassword" />
			<label
				htmlFor="remeberPassword"
				className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
			>
				Lembrar senha
			</label>
		</div>
	);
}
