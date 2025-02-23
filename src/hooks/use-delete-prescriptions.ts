import { deletePrescription } from "@/api/prescriptions/delete-prescription";
import { useQueryClient, useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

export function useDeletePrescription() {
	const queryClient = useQueryClient();

	const {
		mutate: deletePresciptionFn,
		isLoading: isLoadingDeletePrescription,
	} = useMutation({
		mutationFn: (prescriptionId: string) => deletePrescription(prescriptionId),
		mutationKey: ["delete-prescription"],
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: ["prescriptions"],
			});
			toast.success("Prescrição excluída com sucesso!");
		},
	});

	return { deletePresciptionFn, isLoadingDeletePrescription };
}
