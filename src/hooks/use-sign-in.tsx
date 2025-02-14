import { useFormMutation } from "./use-form-mutation";
import { useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";
import { signIn } from "@/api/auth/sign-in";
import { z } from "zod";
import Cookies from "js-cookie";

const signInFormSchema = z.object({
	email: z.string().email("Digite um email válido."),
	password: z.string().min(6, "A senha deve ter no mínimo 6 caracteres."),
});

export function useSignIn() {
	const router = useRouter();

	const { mutate: signInFn, isLoading: isLoadingSignIn } = useMutation({
		mutationFn: signIn,
		onSuccess: (response) => {
			Cookies.set("prescriptions_token", response.data.token, {
				expires: 60 * 60,
			});
			router.push("/");
		},
	});

	const { handleSubmitForm, register } = useFormMutation({
		schema: signInFormSchema,
		defaultValues: {
			email: "",
			password: "",
		},
		onSubmit: (data) => {
			signInFn({
				...data,
			});
		},
	});

	return {
		handleSubmitForm,
		register,
		isLoadingSignIn,
	};
}
