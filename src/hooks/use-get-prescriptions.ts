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
	const name = searchParams.get("name");
	const unit = searchParams.get("unit");
	const medicine = searchParams.get("medicine");
	const posology = searchParams.get("posology");

	const pageIndex = z.coerce
		.number()
		.transform((page) => page)
		.parse(searchParams.get("page") ?? 0);

	const perPage = z.coerce
		.number()
		.transform((perPage) => perPage)
		.parse(searchParams.get("perPage") ?? 5);

	const { data: result, isLoading: isLoadingPrescriptions } = useQuery({
		queryKey: [
			"prescriptions",
			pageIndex,
			id,
			name,
			unit,
			medicalRecord,
			medicine,
			posology,
		],
		queryFn: () =>
			getPrescriptions({
				pageIndex: pageIndex != 0 ? pageIndex - 1 : 0,
				perPage,
				id,
				name,
				unit,
				medicalRecord,
				medicine,
				posology,
			}),
		staleTime: 1000 * 60 * 5,
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
