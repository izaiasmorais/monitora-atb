import client from '@kubb/plugin-client/clients/axios'
import type { DeleteAuthDeleteAccountMutationResponse, DeleteAuthDeleteAccount401, DeleteAuthDeleteAccount404 } from '../models/DeleteAuthDeleteAccount.ts'
import type { RequestConfig, ResponseErrorConfig } from '@kubb/plugin-client/clients/axios'

export function getDeleteAuthDeleteAccountUrl() {
  return `http://localhost:3333/auth/delete-account` as const
}

/**
 * @summary Delete your own account
 * {@link /auth/delete-account}
 */
export async function deleteAuthDeleteAccount(config: Partial<RequestConfig> & { client?: typeof client } = {}) {
  const { client: request = client, ...requestConfig } = config

  const res = await request<DeleteAuthDeleteAccountMutationResponse, ResponseErrorConfig<DeleteAuthDeleteAccount401 | DeleteAuthDeleteAccount404>, unknown>({
    method: 'DELETE',
    url: getDeleteAuthDeleteAccountUrl().toString(),
    ...requestConfig,
  })
  return res.data
}