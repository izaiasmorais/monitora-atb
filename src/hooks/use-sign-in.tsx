
import { usePostAuthSignIn } from "@/http";
import { useFormMutation } from "./use-form-mutation";
import { useRouter } from "next/navigation";
import { z } from "zod";

import Cookies from "universal-cookie";

const signInFormSchema = z.object({
	email: z.string().email("Digite um email válido."),
	password: z.string().min(6, "A senha deve ter no mínimo 6 caracteres."),
});

export function useSignIn() {
	const cookies = new Cookies();
	const router = useRouter();

	const { mutate: signInFn, isLoading: isLoadingSignIn } = usePostAuthSignIn({
		mutation: {
			onSuccess: (response) => {
				cookies.set("prescriptions_token", response.data.token, {
					maxAge: 60,
				});
				router.push("/");
			},
		},
	});

	const { handleSubmitForm, register } = useFormMutation({
		schema: signInFormSchema,
		defaultValues: {
			email: "",
			password: "",
		},
		onSubmit: (data) => {
			signInFn({ data });
		},
	});

	return {
		handleSubmitForm,
		register,
		isLoadingSignIn,
	};
}
