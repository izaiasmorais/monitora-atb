import { PatientTable } from "@/components/patients/patient-table";

export default function Patients() {
	return (
		<main className="flex flex-col gap-4">
			<PatientTable />
		</main>
	);
}
