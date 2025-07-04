"use client";
import { Separator } from "../ui/separator";
import { Button } from "../ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Tabs, TabsList, TabsTrigger } from "../ui/tabs";
import { ClockAlert, Settings, BellIcon } from "lucide-react";
import Link from "next/link";

export function Notifications() {
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

			<PopoverContent align="end" alignOffset={-16} className="w-[400px] p-4">
				<div className="flex items-center justify-between">
					<span className="text-sm font-medium">Notificações</span>
					<Link
						href={"/configuracoes"}
						className="text-muted-foreground hover:text-primary"
					>
						<Settings size={16} />
					</Link>
				</div>

				<Tabs defaultValue="new" className="mt-2">
					<TabsList className="space-x-1 max-h-max w-full p-1 bg-muted/50">
						<TabsTrigger value="new">Novas (3)</TabsTrigger>
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
								O tratamento de <strong>Pacient 1</strong> chegou ao fim.
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
								O tratamento de <strong>Paciente 2</strong> chegou ao fim.
							</p>

							<time className="text-xs text-muted-foreground">
								8 hora atrás
							</time>
						</div>
					</div>

					<div className="flex items-start gap-4">
						<div className="rounded-full border border-primary/10 bg-primary/5 p-2">
							<ClockAlert className="h-4 w-4 text-red-500" strokeWidth={2} />
						</div>

						<div className="space-y-1">
							<p className="text-xs leading-relaxed">
								O tratamento de <strong>Paciente 3</strong> chegou ao fim.
							</p>

							<time className="text-xs text-muted-foreground">
								17 horas atrás
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
