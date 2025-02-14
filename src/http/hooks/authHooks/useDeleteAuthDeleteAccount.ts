import client from '@kubb/plugin-client/clients/axios'
import type { DeleteAuthDeleteAccountMutationResponse, DeleteAuthDeleteAccount401, DeleteAuthDeleteAccount404 } from '../../models/DeleteAuthDeleteAccount.ts'
import type { RequestConfig, ResponseErrorConfig } from '@kubb/plugin-client/clients/axios'
import type { UseMutationOptions } from '@tanstack/react-query'
import { deleteAuthDeleteAccount } from '../../clients/deleteAuthDeleteAccount.ts'
import { useMutation } from '@tanstack/react-query'

export const deleteAuthDeleteAccountMutationKey = () => [{ url: '/auth/delete-account' }] as const

export type DeleteAuthDeleteAccountMutationKey = ReturnType<typeof deleteAuthDeleteAccountMutationKey>

/**
 * @summary Delete your own account
 * {@link /auth/delete-account}
 */
export function useDeleteAuthDeleteAccount(
  options: {
    mutation?: UseMutationOptions<DeleteAuthDeleteAccountMutationResponse, ResponseErrorConfig<DeleteAuthDeleteAccount401 | DeleteAuthDeleteAccount404>>
    client?: Partial<RequestConfig> & { client?: typeof client }
  } = {},
) {
  const { mutation: mutationOptions, client: config = {} } = options ?? {}
  const mutationKey = mutationOptions?.mutationKey ?? deleteAuthDeleteAccountMutationKey()

  return useMutation<DeleteAuthDeleteAccountMutationResponse, ResponseErrorConfig<DeleteAuthDeleteAccount401 | DeleteAuthDeleteAccount404>>({
    mutationFn: async () => {
      return deleteAuthDeleteAccount(config)
    },
    mutationKey,
    ...mutationOptions,
  })
}