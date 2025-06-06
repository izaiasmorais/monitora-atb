import { useMutation } from "@tanstack/react-query";
import { useFormMutation } from "./use-form-mutation";
import { resetPassword } from "@/api/auth/reset-password";
import { toast } from "sonner";
import { z } from "zod";

const resetPasswordFormSchema = z
	.object({
		password: z.string().min(6, "A senha deve ter no mínimo 6 caracteres"),
		newPassword: z
			.string()
			.min(6, "A nova senha deve ter no mínimo 6 caracteres"),
	})
	.refine((data) => data.password !== data.newPassword, {
		message: "As senhas não podem ser iguais",
	});

export function useResetPassword() {
	const form = useFormMutation({
		schema: resetPasswordFormSchema,
		defaultValues: {
			password: "",
			newPassword: "",
		},
		onSubmit: (data) => {
			if (data.password === data.newPassword) {
				toast.error("A nova senha não pode ser igual a senha atual.");
				return;
			}

			resetPasswordFn({
				password: data.password,
				new_password: data.newPassword,
			});
		},
	});

	const { mutate: resetPasswordFn, isLoading: isLoadingResetPassword } =
		useMutation({
			mutationFn: resetPassword,
			mutationKey: ["update-password"],
			onSuccess: (response) => {
				if (response.success) {
					toast.success("Senha alterada com sucesso");
					form.reset();
					return;
				}

			for (const error of response.errors) {
				toast.error(error);
			}
			},
		});

	return {
		form,
		isLoadingResetPassword,
	};
}
