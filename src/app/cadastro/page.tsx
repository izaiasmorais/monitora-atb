import Image from "next/image";
import { SignUpForm } from "@/components/sign-up/sign-up-form";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function SignUp() {
	return (
		<div className="grid w-full min-h-screen grid-cols-1 lg:grid-cols-3 px-4 md:px-0">
			<div className="min-h-screen bg-muted/50 flex-col hidden lg:flex px-2 md:px-0">
				<div className="flex items-start p-6 justify-start">
					<h1 className="flex items-center gap-1 text-2xl leading-tight font-medium">
						<Image
							src={"/monitora-atb.png"}
							alt="Símbolo da Saúde Azul"
							width={512}
							height={512}
							className="w-10 h-10"
						/>
						MonitoraATB
					</h1>
				</div>

				<div className="h-full w-full flex items-center justify-center">
					<div className="flex-col">
						<h1 className="text-5xl font-semibold leading-tight">
							Seja <br /> Bem-vindo
						</h1>
						<span className="text-muted-foreground">
							Um trabalho simplificado espera por você.
						</span>
					</div>
				</div>
			</div>

			<div className="flex items-center justify-center col-span-2 flex-col gap-8">
				<div className="flex items-start p-6 justify-start">
					<h1 className="lg:hidden flex items-center gap-1 text-2xl leading-tight font-medium">
						<Image
							src={"/monitora-atb.png"}
							alt="Símbolo da Saúde Azul"
							width={512}
							height={512}
							className="w-10 h-10"
						/>
						MonitoraATB
					</h1>
				</div>

				<div className="w-full items-center justify-center flex flex-col">
					<SignUpForm />

					<Button
						variant="link"
						className="justify-center w-full p-0 text-blue-500"
						asChild
					>
						<Link href="/entrar">Já possui uma conta? Entre</Link>
					</Button>
				</div>
			</div>
		</div>
	);
}
