import client from '@kubb/plugin-client/clients/axios'
import type { GetPrescriptionsQueryResponse, GetPrescriptionsQueryParams, GetPrescriptions401 } from '../models/GetPrescriptions.ts'
import type { RequestConfig, ResponseErrorConfig } from '@kubb/plugin-client/clients/axios'

export function getGetPrescriptionsUrl() {
  return `http://localhost:3333/prescriptions` as const
}

/**
 * @summary Get paginated prescriptions
 * {@link /prescriptions}
 */
export async function getPrescriptions(params?: GetPrescriptionsQueryParams, config: Partial<RequestConfig> & { client?: typeof client } = {}) {
  const { client: request = client, ...requestConfig } = config

  const res = await request<GetPrescriptionsQueryResponse, ResponseErrorConfig<GetPrescriptions401>, unknown>({
    method: 'GET',
    url: getGetPrescriptionsUrl().toString(),
    params,
    ...requestConfig,
  })
  return res.data
}