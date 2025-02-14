import client from '@kubb/plugin-client/clients/axios'
import type { PostAuthSignInMutationRequest, PostAuthSignInMutationResponse, PostAuthSignIn400 } from '../models/PostAuthSignIn.ts'
import type { RequestConfig, ResponseErrorConfig } from '@kubb/plugin-client/clients/axios'

export function getPostAuthSignInUrl() {
  return `http://localhost:3333/auth/sign-in` as const
}

/**
 * @summary Authenticate with password
 * {@link /auth/sign-in}
 */
export async function postAuthSignIn(
  data: PostAuthSignInMutationRequest,
  config: Partial<RequestConfig<PostAuthSignInMutationRequest>> & { client?: typeof client } = {},
) {
  const { client: request = client, ...requestConfig } = config

  const res = await request<PostAuthSignInMutationResponse, ResponseErrorConfig<PostAuthSignIn400>, PostAuthSignInMutationRequest>({
    method: 'POST',
    url: getPostAuthSignInUrl().toString(),
    data,
    ...requestConfig,
  })
  return res.data
}