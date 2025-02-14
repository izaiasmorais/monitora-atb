import client from '@kubb/plugin-client/clients/axios'
import type {
  PostPrescriptionsMutationRequest,
  PostPrescriptionsMutationResponse,
  PostPrescriptions400,
  PostPrescriptions401,
} from '../../models/PostPrescriptions.ts'
import type { RequestConfig, ResponseErrorConfig } from '@kubb/plugin-client/clients/axios'
import type { UseMutationOptions } from '@tanstack/react-query'
import { postPrescriptions } from '../../clients/postPrescriptions.ts'
import { useMutation } from '@tanstack/react-query'

export const postPrescriptionsMutationKey = () => [{ url: '/prescriptions' }] as const

export type PostPrescriptionsMutationKey = ReturnType<typeof postPrescriptionsMutationKey>

/**
 * @summary Create a new prescription
 * {@link /prescriptions}
 */
export function usePostPrescriptions(
  options: {
    mutation?: UseMutationOptions<
      PostPrescriptionsMutationResponse,
      ResponseErrorConfig<PostPrescriptions400 | PostPrescriptions401>,
      { data: PostPrescriptionsMutationRequest }
    >
    client?: Partial<RequestConfig<PostPrescriptionsMutationRequest>> & { client?: typeof client }
  } = {},
) {
  const { mutation: mutationOptions, client: config = {} } = options ?? {}
  const mutationKey = mutationOptions?.mutationKey ?? postPrescriptionsMutationKey()

  return useMutation<
    PostPrescriptionsMutationResponse,
    ResponseErrorConfig<PostPrescriptions400 | PostPrescriptions401>,
    { data: PostPrescriptionsMutationRequest }
  >({
    mutationFn: async ({ data }) => {
      return postPrescriptions(data, config)
    },
    mutationKey,
    ...mutationOptions,
  })
}