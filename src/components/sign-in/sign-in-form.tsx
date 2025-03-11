"use client";
import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useSignIn } from "@/hooks/use-sign-in";
import { LoaderCircle } from "lucide-react";

export function SignInForm() {
	const { form, isLoadingSignIn } = useSignIn();

	return (
		<Form {...form}>
			<div className="text-center flex flex-col mb-4">
				<h1 className="text-2xl font-bold">Conecte-se</h1>
				<span className="text-muted-foreground text-sm">
					Digite seu email e senha para entrar
				</span>
			</div>

			<form onSubmit={form.handleSubmitForm} className="space-y-4 w-[400px]">
				<FormField
					control={form.control}
					name="email"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Email</FormLabel>
							<FormControl>
								<Input type="email" placeholder="Digite seu email" {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<FormField
					control={form.control}
					name="password"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Senha</FormLabel>
							<FormControl>
								<Input
									type="password"
									placeholder="Digite sua senha"
									{...field}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<Button type="submit" className="w-full" disabled={isLoadingSignIn}>
					{isLoadingSignIn && (
						<LoaderCircle className="animate-spin" size={16} />
					)}
					Entrar
				</Button>
			</form>
		</Form>
	);
}
