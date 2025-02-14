import client from '@kubb/plugin-client/clients/axios'
import type {
  DeletePrescriptionsIdMutationResponse,
  DeletePrescriptionsIdPathParams,
  DeletePrescriptionsId401,
  DeletePrescriptionsId404,
} from '../../models/DeletePrescriptionsId.ts'
import type { RequestConfig, ResponseErrorConfig } from '@kubb/plugin-client/clients/axios'
import type { UseMutationOptions } from '@tanstack/react-query'
import { deletePrescriptionsId } from '../../clients/deletePrescriptionsId.ts'
import { useMutation } from '@tanstack/react-query'

export const deletePrescriptionsIdMutationKey = () => [{ url: '/prescriptions/{id}' }] as const

export type DeletePrescriptionsIdMutationKey = ReturnType<typeof deletePrescriptionsIdMutationKey>

/**
 * @summary Delete a prescription
 * {@link /prescriptions/:id}
 */
export function useDeletePrescriptionsId(
  options: {
    mutation?: UseMutationOptions<
      DeletePrescriptionsIdMutationResponse,
      ResponseErrorConfig<DeletePrescriptionsId401 | DeletePrescriptionsId404>,
      { id: DeletePrescriptionsIdPathParams['id'] }
    >
    client?: Partial<RequestConfig> & { client?: typeof client }
  } = {},
) {
  const { mutation: mutationOptions, client: config = {} } = options ?? {}
  const mutationKey = mutationOptions?.mutationKey ?? deletePrescriptionsIdMutationKey()

  return useMutation<
    DeletePrescriptionsIdMutationResponse,
    ResponseErrorConfig<DeletePrescriptionsId401 | DeletePrescriptionsId404>,
    { id: DeletePrescriptionsIdPathParams['id'] }
  >({
    mutationFn: async ({ id }) => {
      return deletePrescriptionsId({ id }, config)
    },
    mutationKey,
    ...mutationOptions,
  })
}