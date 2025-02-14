import client from '@kubb/plugin-client/clients/axios'
import type {
  PutPrescriptionsIdMutationRequest,
  PutPrescriptionsIdMutationResponse,
  PutPrescriptionsIdPathParams,
  PutPrescriptionsId400,
  PutPrescriptionsId401,
  PutPrescriptionsId404,
} from '../../models/PutPrescriptionsId.ts'
import type { RequestConfig, ResponseErrorConfig } from '@kubb/plugin-client/clients/axios'
import type { UseMutationOptions } from '@tanstack/react-query'
import { putPrescriptionsId } from '../../clients/putPrescriptionsId.ts'
import { useMutation } from '@tanstack/react-query'

export const putPrescriptionsIdMutationKey = () => [{ url: '/prescriptions/{id}' }] as const

export type PutPrescriptionsIdMutationKey = ReturnType<typeof putPrescriptionsIdMutationKey>

/**
 * @summary Edit an existing prescription
 * {@link /prescriptions/:id}
 */
export function usePutPrescriptionsId(
  options: {
    mutation?: UseMutationOptions<
      PutPrescriptionsIdMutationResponse,
      ResponseErrorConfig<PutPrescriptionsId400 | PutPrescriptionsId401 | PutPrescriptionsId404>,
      { id: PutPrescriptionsIdPathParams['id']; data: PutPrescriptionsIdMutationRequest }
    >
    client?: Partial<RequestConfig<PutPrescriptionsIdMutationRequest>> & { client?: typeof client }
  } = {},
) {
  const { mutation: mutationOptions, client: config = {} } = options ?? {}
  const mutationKey = mutationOptions?.mutationKey ?? putPrescriptionsIdMutationKey()

  return useMutation<
    PutPrescriptionsIdMutationResponse,
    ResponseErrorConfig<PutPrescriptionsId400 | PutPrescriptionsId401 | PutPrescriptionsId404>,
    { id: PutPrescriptionsIdPathParams['id']; data: PutPrescriptionsIdMutationRequest }
  >({
    mutationFn: async ({ id, data }) => {
      return putPrescriptionsId({ id }, data, config)
    },
    mutationKey,
    ...mutationOptions,
  })
}