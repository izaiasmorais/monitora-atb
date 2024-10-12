import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Button } from "../ui/button";
import { DialogContent } from "../ui/dialog";
import { LoaderCircle, TriangleAlert } from "lucide-react";
import { deletePrescription } from "@/api/prescriptions/delete-prescription";

interface DeletePrescriptionDialogProps {
	prescriptionId: string;
}

export function DeletePrescriptionDialog({
	prescriptionId,
}: DeletePrescriptionDialogProps) {
	const queryClient = useQueryClient();
	const { mutate: deletePresciptionFn, isLoading } = useMutation({
		mutationFn: (prescriptionId: string) => deletePrescription(prescriptionId),
		mutationKey: ["delete-prescriptions"],
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: ["prescriptions"],
			});
		},
	});

	function handleDeletePrescription() {
		deletePresciptionFn(prescriptionId);
	}

	return (
		<DialogContent className="w-[400px]">
			<div className="flex flex-col gap-2 w-full items-center text-center">
				<div className="p-3 rounded-full bg-red-50 max-w-max">
					<TriangleAlert className="w-8 h-8 text-red-500" />
				</div>

				<h2 className="text-2xl font-bold">Você tem certeza?</h2>

				<span className="text-muted-foreground">
					Tem certeza que quer excluir essa prescrição? Essa ação não pode ser
					desfeita.
				</span>

				<Button
					onClick={() => handleDeletePrescription()}
					variant="destructive"
					className="w-full mt-4"
				>
					{isLoading && <LoaderCircle className="animate-spin" />}

					{!isLoading && "Excluir prescrição"}
				</Button>
			</div>
		</DialogContent>
	);
}
