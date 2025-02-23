import { HTTPSuccessResponse } from "@/@types/http";
import { api } from "@/lib/axios";
import {
	GetPrescriptionsQueryParams,
	GetPrescriptionsResponse,
} from "@/@types/prescription";

interface GetPrescriptionsResponseBody extends HTTPSuccessResponse {
	data: GetPrescriptionsResponse;
}

export async function getPrescriptions(
	params: GetPrescriptionsQueryParams
): Promise<GetPrescriptionsResponseBody> {
	try {
		const response = await api.get<GetPrescriptionsResponseBody>(
			"/prescriptions",
			{
				params,
			}
		);

		return response.data;
	} catch (error) {
		throw error;
	}
}
