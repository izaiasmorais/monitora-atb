import client from '@kubb/plugin-client/clients/axios'
import type { PostAuthSignUpMutationRequest, PostAuthSignUpMutationResponse, PostAuthSignUp400, PostAuthSignUp409 } from '../../models/PostAuthSignUp.ts'
import type { RequestConfig, ResponseErrorConfig } from '@kubb/plugin-client/clients/axios'
import type { UseMutationOptions } from '@tanstack/react-query'
import { postAuthSignUp } from '../../clients/postAuthSignUp.ts'
import { useMutation } from '@tanstack/react-query'

export const postAuthSignUpMutationKey = () => [{ url: '/auth/sign-up' }] as const

export type PostAuthSignUpMutationKey = ReturnType<typeof postAuthSignUpMutationKey>

/**
 * @summary Register a new user
 * {@link /auth/sign-up}
 */
export function usePostAuthSignUp(
  options: {
    mutation?: UseMutationOptions<
      PostAuthSignUpMutationResponse,
      ResponseErrorConfig<PostAuthSignUp400 | PostAuthSignUp409>,
      { data: PostAuthSignUpMutationRequest }
    >
    client?: Partial<RequestConfig<PostAuthSignUpMutationRequest>> & { client?: typeof client }
  } = {},
) {
  const { mutation: mutationOptions, client: config = {} } = options ?? {}
  const mutationKey = mutationOptions?.mutationKey ?? postAuthSignUpMutationKey()

  return useMutation<PostAuthSignUpMutationResponse, ResponseErrorConfig<PostAuthSignUp400 | PostAuthSignUp409>, { data: PostAuthSignUpMutationRequest }>({
    mutationFn: async ({ data }) => {
      return postAuthSignUp(data, config)
    },
    mutationKey,
    ...mutationOptions,
  })
}