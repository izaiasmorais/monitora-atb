import { ClipboardPlus, Pill, Syringe, Users } from "lucide-react";
import { SummaryCard } from "./summary-card";

export function Summary() {
	return (
		<div className="grid grid-cols-4 gap-6">
			<SummaryCard
				title="Pacientes"
				description="Em Terapia"
				icon={<Users size={20} className="text-muted-foreground" />}
				value={64}
			/>

			<SummaryCard
				title="Prescriçoes"
				description="Cadastradas"
				icon={<ClipboardPlus size={20} className="text-muted-foreground" />}
				value={78}
			/>

			<SummaryCard
				title="Medicamentos"
				description="Prescritos"
				icon={<Pill size={20} className="text-muted-foreground" />}
				value={26}
			/>

			<SummaryCard
				title="Doses"
				description="Aplicadas"
				icon={<Syringe size={20} className="text-muted-foreground" />}
				value={234}
			/>
		</div>
	);
}
