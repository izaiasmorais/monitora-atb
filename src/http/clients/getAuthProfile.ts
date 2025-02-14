import client from '@kubb/plugin-client/clients/axios'
import type { GetAuthProfileQueryResponse, GetAuthProfile401, GetAuthProfile404 } from '../models/GetAuthProfile.ts'
import type { RequestConfig, ResponseErrorConfig } from '@kubb/plugin-client/clients/axios'

export function getGetAuthProfileUrl() {
  return `http://localhost:3333/auth/profile` as const
}

/**
 * @summary Get authenticated user profile
 * {@link /auth/profile}
 */
export async function getAuthProfile(config: Partial<RequestConfig> & { client?: typeof client } = {}) {
  const { client: request = client, ...requestConfig } = config

  const res = await request<GetAuthProfileQueryResponse, ResponseErrorConfig<GetAuthProfile401 | GetAuthProfile404>, unknown>({
    method: 'GET',
    url: getGetAuthProfileUrl().toString(),
    ...requestConfig,
  })
  return res.data
}