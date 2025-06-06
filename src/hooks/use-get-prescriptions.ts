import { usePathname, useSearchParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { getPrescriptions } from "@/api/prescriptions/get-prescriptions";
import { useRouter } from "next/navigation";
import { z } from "zod";

export function useGetPrescriptions() {
	const router = useRouter();
	const pathname = usePathname();
	const searchParams = useSearchParams();

	const id = searchParams.get("id");
	const medicalRecord = searchParams.get("medicalRecord");
	const patientName = searchParams.get("patientName");
	const medicine = searchParams.get("medicine");

	const page = z.coerce
		.number()
		.transform((page) => page)
		.parse(searchParams.get("page") ?? 0);

	const itemsPerPage = z.coerce
		.number()
		.transform((itemsPerPage) => itemsPerPage)
		.parse(searchParams.get("itemsPerPage") ?? 5);

	const { data: result, isLoading: isLoadingPrescriptions } = useQuery({
		queryKey: ["prescriptions", page, id, patientName, medicalRecord],
		queryFn: () =>
			getPrescriptions({
				page: page != 0 ? page - 1 : 0,
				itemsPerPage,
				medicalRecord,
				patientName,
				medicine,
			}),
		staleTime: 60 * 60, // 1 hour
		refetchOnMount: false,
		refetchOnWindowFocus: false,
	});

	function handlePaginate(pageIndex: number) {
		const state = new URLSearchParams(Array.from(searchParams.entries()));

		state.set("page", (pageIndex + 1).toString());

		const search = state.toString();
		const query = search ? `?${search}` : "";

		router.push(`${pathname}${query}`);
	}

	return {
		data: result ? result.data : null,
		isLoadingPrescriptions,
		handlePaginate,
	};
}
