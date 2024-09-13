import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetDescription,
	SheetFooter,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";
import { Plus } from "lucide-react";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "../ui/select";
import { PrescriptionDoseCheckbox } from "./prescription-dose-checkbox";

export function AddPrescriptionSheet() {
	return (
		<Sheet>
			<SheetTrigger asChild>
				<Button className="flex items-center gap-2" size="sm">
					<Plus className="w-5 h-5" />
					Adicionar paciente
				</Button>
			</SheetTrigger>

			<SheetContent>
				<SheetHeader>
					<SheetTitle>Adicionar Prescrição</SheetTitle>
					{/* <SheetDescription>

					</SheetDescription> */}
				</SheetHeader>

				<div className="grid gap-6 py-8">
					<div className="flex flex-col gap-3">
						<Label htmlFor="medicalReport">Número do Prontuário</Label>
						<Input id="medicalReport" placeholder="534047/6" />
					</div>

					<div className="flex flex-col gap-3">
						<Label htmlFor="name">Nome do paciente</Label>
						<Input id="name" placeholder="Digite um nome" />
					</div>

					<div className="flex flex-col gap-3">
						<Label htmlFor="unit">Unidade</Label>
						<Select name="unit">
							<SelectTrigger className="h-9">
								<SelectValue placeholder="Selecione uma unidade" />
							</SelectTrigger>
							<SelectContent>
								<SelectItem value="1">Posto 1</SelectItem>
								<SelectItem value="2">Posto 2</SelectItem>
								<SelectItem value="3">Posto 3</SelectItem>
								<SelectItem value="uti">UTI</SelectItem>
								<SelectItem value="unacon">UNACON</SelectItem>
							</SelectContent>
						</Select>
					</div>

					<div className="flex flex-col gap-3">
						<Label htmlFor="unit">Medicamento</Label>
						<Select name="unit">
							<SelectTrigger className="h-9">
								<SelectValue placeholder="Selecione um Medicamento" />
							</SelectTrigger>
							<SelectContent>
								<SelectItem value="1">Polimixina B1</SelectItem>
								<SelectItem value="2">Ciprofloxacino Inj</SelectItem>
								<SelectItem value="3">Metronidazol Inj</SelectItem>
								<SelectItem value="4">Cefepime</SelectItem>
								<SelectItem value="5"> Tazobactam</SelectItem>
							</SelectContent>
						</Select>
					</div>

					<div className="flex flex-col gap-3">
						<Label htmlFor="via">Via de administração</Label>
						<Select name="via">
							<SelectTrigger className="h-9">
								<SelectValue placeholder="Selecione a Via" />
							</SelectTrigger>
							<SelectContent>
								<SelectItem value="1">EV</SelectItem>
								<SelectItem value="2">VO</SelectItem>
							</SelectContent>
						</Select>
					</div>

					<div className="flex flex-col gap-3">
						<Label htmlFor="dose">Dose</Label>
						<Input type="number" id="dose" placeholder="500mg" />
						<Button>Definir dose manualmente</Button>
						<PrescriptionDoseCheckbox />
					</div>

					<div className="flex flex-col gap-3">
						<Label htmlFor="unit">Posologia</Label>
						<Select name="unit">
							<SelectTrigger className="h-9">
								<SelectValue placeholder="Selecione a Posologia" />
							</SelectTrigger>
							<SelectContent>
								<SelectItem value="1">6/6h</SelectItem>
								<SelectItem value="2">8/8h</SelectItem>
								<SelectItem value="3">12/12h</SelectItem>
								<SelectItem value="uti">24/24h</SelectItem>
							</SelectContent>
						</Select>
					</div>

					<div className="flex flex-col gap-3">
						<Label htmlFor="dose">Dias de tratamento</Label>
						<Button>Selecionar dias</Button>
					</div>
				</div>

				<SheetFooter>
					<SheetClose asChild>
						<Button type="submit">Confirmar</Button>
					</SheetClose>
				</SheetFooter>
			</SheetContent>
		</Sheet>
	);
}
