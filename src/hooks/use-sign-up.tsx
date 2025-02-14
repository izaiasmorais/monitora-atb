import { usePostAuthSignUp } from "@/http";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { useFormMutation } from "./use-form-mutation";
import { z } from "zod";

const signUpFormSchema = z.object({
	name: z.string().min(1, "O nome é obrigatório."),
	email: z.string().email("Digite um email válido."),
	password: z.string().min(6, "A senha deve ter no mínimo 6 caracteres."),
});

export function useSignUp() {
	const router = useRouter();

	const { handleSubmitForm, register, watch } = useFormMutation({
		schema: signUpFormSchema,
		defaultValues: {
			name: "",
			email: "",
			password: "",
		},
		onSubmit: (data) => {
			signUpFn({ data });
		},
	});

	const { mutate: signUpFn, isLoading: isLoadingSignUp } = usePostAuthSignUp({
		mutation: {
			onError: (error) => {
				if (error instanceof Error) {
					if (error.message === "Email already registered") {
						toast.error("Este email já está em uso!");
					}

					if (error.message !== "Email already registered") {
						toast.error("Ocorreu um erro ao criar a conta!");
					}
				}
			},

			onSuccess: () => {
				toast.success("Conta criada com sucesso!", {
					action: {
						label: "Entrar",
						onClick: () => router.push(`/entrar?email=${watch("email")}`),
					},
				});
			},
		},
	});

	return {
		register,
		handleSubmitForm,
		isLoadingSignUp,
	};
}
