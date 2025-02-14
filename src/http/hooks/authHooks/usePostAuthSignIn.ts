import client from '@kubb/plugin-client/clients/axios'
import type { PostAuthSignInMutationRequest, PostAuthSignInMutationResponse, PostAuthSignIn400 } from '../../models/PostAuthSignIn.ts'
import type { RequestConfig, ResponseErrorConfig } from '@kubb/plugin-client/clients/axios'
import type { UseMutationOptions } from '@tanstack/react-query'
import { postAuthSignIn } from '../../clients/postAuthSignIn.ts'
import { useMutation } from '@tanstack/react-query'

export const postAuthSignInMutationKey = () => [{ url: '/auth/sign-in' }] as const

export type PostAuthSignInMutationKey = ReturnType<typeof postAuthSignInMutationKey>

/**
 * @summary Authenticate with password
 * {@link /auth/sign-in}
 */
export function usePostAuthSignIn(
  options: {
    mutation?: UseMutationOptions<PostAuthSignInMutationResponse, ResponseErrorConfig<PostAuthSignIn400>, { data: PostAuthSignInMutationRequest }>
    client?: Partial<RequestConfig<PostAuthSignInMutationRequest>> & { client?: typeof client }
  } = {},
) {
  const { mutation: mutationOptions, client: config = {} } = options ?? {}
  const mutationKey = mutationOptions?.mutationKey ?? postAuthSignInMutationKey()

  return useMutation<PostAuthSignInMutationResponse, ResponseErrorConfig<PostAuthSignIn400>, { data: PostAuthSignInMutationRequest }>({
    mutationFn: async ({ data }) => {
      return postAuthSignIn(data, config)
    },
    mutationKey,
    ...mutationOptions,
  })
}