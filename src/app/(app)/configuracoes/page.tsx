"use client";
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LoaderCircle, LockKeyhole } from "lucide-react";
import { useResetPassword } from "@/hooks/use-reset-password";
import {
	Form,
	FormField,
	FormItem,
	FormLabel,
	FormControl,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

export default function Settings() {
	const { form, isLoadingResetPassword } = useResetPassword();

	return (
		<Card className="w-full shadow-none overflow-auto">
			<CardHeader>
				<div className="flex items-center w-full gap-2">
					<LockKeyhole className="w-5 h-5" />
					<h2 className="text-lg font-semibold">Altualizar Senha</h2>
				</div>
			</CardHeader>

			<CardContent>
				<Form {...form}>
					<form
						id="reset-password-form"
						onSubmit={form.handleSubmitForm}
						className="space-y-4 w-full max-w-[400px]"
					>
						<FormField
							control={form.control}
							name="password"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Senha Atual</FormLabel>
									<FormControl>
										<Input
											type="password"
											placeholder="Digite sua senha atual"
											{...field}
										/>
									</FormControl>

									<FormMessage />
								</FormItem>
							)}
						/>

						<FormField
							control={form.control}
							name="newPassword"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Nova Senha</FormLabel>
									<FormControl>
										<Input
											type="password"
											placeholder="Digite sua nova senha"
											{...field}
										/>
									</FormControl>

									<FormMessage />
								</FormItem>
							)}
						/>
					</form>
				</Form>
			</CardContent>

			<CardFooter className="flex gap-4  p-4 justify-end border-t bg-muted">
				<Button
					form="reset-password-form"
					type="submit"
					className="w-[200px]"
					disabled={isLoadingResetPassword}
				>
					{isLoadingResetPassword && <LoaderCircle className="animate-spin" />}
					Redifinir Senha
				</Button>
			</CardFooter>
		</Card>
	);
}
