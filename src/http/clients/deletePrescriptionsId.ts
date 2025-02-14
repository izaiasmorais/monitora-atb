import client from '@kubb/plugin-client/clients/axios'
import type {
  DeletePrescriptionsIdMutationResponse,
  DeletePrescriptionsIdPathParams,
  DeletePrescriptionsId401,
  DeletePrescriptionsId404,
} from '../models/DeletePrescriptionsId.ts'
import type { RequestConfig, ResponseErrorConfig } from '@kubb/plugin-client/clients/axios'

export function getDeletePrescriptionsIdUrl(id: DeletePrescriptionsIdPathParams['id']) {
  return `http://localhost:3333/prescriptions/${id}` as const
}

/**
 * @summary Delete a prescription
 * {@link /prescriptions/:id}
 */
export async function deletePrescriptionsId(id: DeletePrescriptionsIdPathParams['id'], config: Partial<RequestConfig> & { client?: typeof client } = {}) {
  const { client: request = client, ...requestConfig } = config

  const res = await request<DeletePrescriptionsIdMutationResponse, ResponseErrorConfig<DeletePrescriptionsId401 | DeletePrescriptionsId404>, unknown>({
    method: 'DELETE',
    url: getDeletePrescriptionsIdUrl(id).toString(),
    ...requestConfig,
  })
  return res.data
}