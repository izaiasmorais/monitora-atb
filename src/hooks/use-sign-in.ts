import { useFormMutation } from "./use-form-mutation";
import { useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";
import { signIn } from "@/api/auth/sign-in";
import { toast } from "sonner";
import { z } from "zod";
import Cookies from "js-cookie";

const signInFormSchema = z.object({
	email: z.string().email("Digite um email válido."),
	password: z.string().min(6, "A senha deve ter no mínimo 6 caracteres."),
});

export function useSignIn() {
	const router = useRouter();

	const form = useFormMutation({
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

	const { mutate: signInFn, isLoading: isLoadingSignIn } = useMutation({
		mutationFn: signIn,
		onSuccess: (response) => {
			if (response.success) {
				Cookies.set("prescriptions_token", response.data.accessToken, {
					expires: 1 / 24,
				});
				router.push("/");
				return;
			}

			for (const error of response.errors) {
				toast.error(error);
			}
		},
	});

	return {
		form,
		isLoadingSignIn,
	};
}
