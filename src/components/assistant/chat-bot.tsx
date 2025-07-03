import { ArrowUp, ChartArea, Paperclip, SquareActivity } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

export function ChatBot() {
	return (
		<div className="w-full h-full flex items-center justify-center">
			<div className="flex flex-col gap-8 justify-center items-center">
				<div>
					<h1 className="text-3xl font-medium">Como posso ajudar?</h1>
				</div>

				<div
					className="flex flex-col p-6 h-[200px] w-[800px] rounded-xl border border-muted
			shadow-sm justify-between bg-muted"
				>
					<Input
						placeholder="Digite sua mensagem aqui"
						className="!border-none !outline-none !shadow-none !ring-0 p-0 "
					/>

					<div className="flex items-center gap-2 text-muted-foreground w-full">
						<Button variant="outline" size="icon">
							<Paperclip size={16} />
						</Button>

						<Button variant="outline">
							<SquareActivity size={16} /> Criar nova prescrição
						</Button>

						<Button variant="outline">
							<ChartArea size={16} />
							Criar gráfico
						</Button>

						<Button className="ml-auto" size="icon">
							<ArrowUp size={16} />
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
}
