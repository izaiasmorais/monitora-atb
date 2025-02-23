"use client";
import { Prescription } from "@/@types/prescription";
import { Button } from "../ui/button";
import { SquarePen } from "lucide-react";

interface EditPrescriptionSheetProps {
	prescription: Prescription;
}

export function EditPrescriptionSheet({
	prescription,
}: EditPrescriptionSheetProps) {
	return (
		<div>
			<Button variant="outline" size="sm">
				<SquarePen className="h-4 w-4" />
			</Button>
		</div>
	);
}
