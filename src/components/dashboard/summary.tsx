import { SummaryCard } from "./summary-card";
import { Users, Pill, Hospital, NotepadTextDashed } from "lucide-react";

export function Summary() {
	return (
		<section id="summary" className="grid gap-6 md:grid-cols-4">
			<SummaryCard
				title="Pacientes"
				icon={<Users size={20} />}
				value={20}
				description={
					<p>
						<span className="text-emerald-500 dark:text-emerald-400">
							+2.1%
						</span>{" "}
						a mais que o mês passado
					</p>
				}
			/>

			<SummaryCard
				title="Prescrições"
				icon={<NotepadTextDashed size={20} />}
				value={56}
				description={
					<p>
						<span className="text-red-500 dark:text-red-400">-6.34%</span> a
						menos que o mês passado
					</p>
				}
			/>

			<SummaryCard
				title="Unidades"
				icon={<Hospital size={20} />}
				value={5}
				description={
					<p>
						<span className="text-emerald-500 dark:text-emerald-400">
							+20.14%
						</span>{" "}
						a mais que o mês passado
					</p>
				}
			/>

			<SummaryCard
				title="Medicamentos"
				icon={<Pill size={20} />}
				value={27}
				description={
					<p>
						<span className="text-emerald-500 dark:text-emerald-400">
							+20.14%
						</span>{" "}
						a mais que o mês passado
					</p>
				}
			/>
		</section>
	);
}
