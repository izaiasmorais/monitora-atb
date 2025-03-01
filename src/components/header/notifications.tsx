import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { ClockAlert, Merge, Rocket, Settings, Split } from "lucide-react";
import { Tabs, TabsList, TabsTrigger } from "../ui/tabs";
import { BellIcon } from "@radix-ui/react-icons";
import { Separator } from "../ui/separator";
import { Button } from "../ui/button";
import Link from "next/link";

export async function Notifications() {
	return (
		<Popover>
			<PopoverTrigger asChild>
				<Button
					variant="outline"
					className="relative gap-1 rounded-sm h-10 px-2 text-secondary-foreground"
					size="sm"
				>
					<BellIcon className="h-5 w-5" />
					<span>3</span>

					<span className="absolute -right-0.5 -top-0.5 flex h-2 w-2">
						<span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75"></span>
						<span className="relative inline-flex h-2 w-2 rounded-full bg-blue-500"></span>
					</span>
				</Button>
			</PopoverTrigger>

			<PopoverContent align="end" alignOffset={-16} className="w-96 p-4">
				<div className="flex items-center justify-between">
					<span className="text-sm font-medium">Notificações</span>
					<Link
						className="text-muted-foreground hover:text-primary"
						href="/configuracoes"
					>
						<Settings size={16} />
					</Link>
				</div>

				<Tabs defaultValue="new" className="mt-2">
					<TabsList className="space-x-1 max-h-max w-full p-1 bg-muted/50">
						<TabsTrigger value="new">Novas (2)</TabsTrigger>
						<TabsTrigger value="archived">Arquivadas</TabsTrigger>
					</TabsList>
				</Tabs>

				<Separator className="my-4" />

				<div className="space-y-4">
					<div className="flex items-start gap-4">
						<div className="rounded-full border border-primary/10 bg-primary/5 p-2">
							<ClockAlert className="h-4 w-4 text-red-500" strokeWidth={2} />
						</div>

						<div className="space-y-1">
							<p className="text-xs leading-relaxed">
								O tratamento de <strong>Izaías Lima</strong> chegou ao fim.
							</p>

							<time className="text-xs text-muted-foreground">
								1 hora atrás
							</time>
						</div>
					</div>

					<div className="flex items-start gap-4">
						<div className="rounded-full border border-primary/10 bg-primary/5 p-2">
							<ClockAlert className="h-4 w-4 text-red-500" strokeWidth={2} />
						</div>

						<div className="space-y-1">
							<p className="text-xs leading-relaxed">
								O tratamento de <strong>Dário</strong> chegou ao fim.
							</p>

							<time className="text-xs text-muted-foreground">
								1 hora atrás
							</time>
						</div>
					</div>

					<Button variant="outline" className="w-full">
						Arquivar todas
					</Button>
				</div>
			</PopoverContent>
		</Popover>
	);
}
