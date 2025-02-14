"use client";
import { LoaderCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useSignIn } from "@/hooks/use-sign-in";

import Link from "next/link";
import Image from "next/image";

export default function SignIn() {
	const { handleSubmitForm, isLoadingSignIn, register } = useSignIn();

	return (
		<div className="grid w-full min-h-screen grid-cols-1 lg:grid-cols-3 px-4 md:px-0">
			<div className="min-h-screen bg-muted/50 flex-col hidden lg:flex px-2 md:px-0">
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

			<div className="flex items-center justify-center col-span-2 flex-col gap-8">
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

				<form
					className="flex flex-col w-[400px] gap-5"
					onSubmit={handleSubmitForm}
				>
					<h1 className="text-xl font-medium">Entrar</h1>
					<div className="flex flex-col gap-2">
						<Label htmlFor="email">E-mail</Label>
						<Input
							id="email"
							type="email"
							placeholder="Digite um email"
							{...register("email")}
						/>
					</div>

					<div className="flex flex-col gap-2">
						<Label htmlFor="password">Senha</Label>
						<Input
							id="password"
							type="password"
							placeholder="Digite uma senha"
							{...register("password")}
						/>
					</div>

					<div className="flex flex-col gap-1">
						<Button>
							{isLoadingSignIn && <LoaderCircle className="animate-spin" />}

							{!isLoadingSignIn && "Entrar"}
						</Button>

						<Link href="/cadastro">
							<Button
								variant="link"
								className="justify-start p-0 text-blue-500"
							>
								Não possui uma conta? Cadastre-se
							</Button>
						</Link>
					</div>
				</form>
			</div>
		</div>
	);
}
