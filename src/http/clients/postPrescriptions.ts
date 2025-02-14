import client from '@kubb/plugin-client/clients/axios'
import type {
  PostPrescriptionsMutationRequest,
  PostPrescriptionsMutationResponse,
  PostPrescriptions400,
  PostPrescriptions401,
} from '../models/PostPrescriptions.ts'
import type { RequestConfig, ResponseErrorConfig } from '@kubb/plugin-client/clients/axios'

export function getPostPrescriptionsUrl() {
  return `http://localhost:3333/prescriptions` as const
}

/**
 * @summary Create a new prescription
 * {@link /prescriptions}
 */
export async function postPrescriptions(
  data: PostPrescriptionsMutationRequest,
  config: Partial<RequestConfig<PostPrescriptionsMutationRequest>> & { client?: typeof client } = {},
) {
  const { client: request = client, ...requestConfig } = config

  const res = await request<
    PostPrescriptionsMutationResponse,
    ResponseErrorConfig<PostPrescriptions400 | PostPrescriptions401>,
    PostPrescriptionsMutationRequest
  >({ method: 'POST', url: getPostPrescriptionsUrl().toString(), data, ...requestConfig })
  return res.data
}