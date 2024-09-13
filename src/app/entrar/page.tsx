import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RememberPasswordCheckbox } from "@/components/global/remeber-password";
import Link from "next/link";

export default function SignIn() {
	return (
		<div className="grid w-full min-h-screen grid-cols-1 md:grid-cols-3 px-4 md:px-0">
			<div className="min-h-screen bg-muted/50 flex-col hidden md:flex px-2 md:px-0">
				<div className="flex items-start p-6 justify-start">
					<h1 className="flex items-center gap-1 text-2xl leading-tight font-medium">
						<Image
							src={"/image.png"}
							alt="Símbolo da Saúde Azul"
							width={512}
							height={512}
							className="w-10 h-10"
						/>
						Prescrições
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

			<div className="flex items-center justify-center col-span-2">
				<div className="flex flex-col w-[400px] gap-5">
					<h1 className="text-xl font-medium">Entrar</h1>
					<div className="flex flex-col gap-2">
						<Label htmlFor="email">E-mail</Label>
						<Input id="email" type="email" placeholder="Digite um email" />
					</div>

					<div className="flex flex-col gap-2">
						<Label htmlFor="password">Senha</Label>
						<Input
							id="password"
							type="password"
							placeholder="Digite uma senha"
						/>
					</div>

					<RememberPasswordCheckbox />

					<div className="flex flex-col gap-1">
						<Button>Entrar</Button>

						<Link href="/cadastro">
							<Button
								variant="link"
								className="justify-start p-0 text-blue-500"
							>
								Não possui uma conta? Cadastre-se
							</Button>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}
