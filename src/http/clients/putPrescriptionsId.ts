import client from '@kubb/plugin-client/clients/axios'
import type {
  PutPrescriptionsIdMutationRequest,
  PutPrescriptionsIdMutationResponse,
  PutPrescriptionsIdPathParams,
  PutPrescriptionsId400,
  PutPrescriptionsId401,
  PutPrescriptionsId404,
} from '../models/PutPrescriptionsId.ts'
import type { RequestConfig, ResponseErrorConfig } from '@kubb/plugin-client/clients/axios'

export function getPutPrescriptionsIdUrl(id: PutPrescriptionsIdPathParams['id']) {
  return `http://localhost:3333/prescriptions/${id}` as const
}

/**
 * @summary Edit an existing prescription
 * {@link /prescriptions/:id}
 */
export async function putPrescriptionsId(
  id: PutPrescriptionsIdPathParams['id'],
  data: PutPrescriptionsIdMutationRequest,
  config: Partial<RequestConfig<PutPrescriptionsIdMutationRequest>> & { client?: typeof client } = {},
) {
  const { client: request = client, ...requestConfig } = config

  const res = await request<
    PutPrescriptionsIdMutationResponse,
    ResponseErrorConfig<PutPrescriptionsId400 | PutPrescriptionsId401 | PutPrescriptionsId404>,
    PutPrescriptionsIdMutationRequest
  >({ method: 'PUT', url: getPutPrescriptionsIdUrl(id).toString(), data, ...requestConfig })
  return res.data
}