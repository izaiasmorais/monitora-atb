import client from '@kubb/plugin-client/clients/axios'
import type { PostAuthSignUpMutationRequest, PostAuthSignUpMutationResponse, PostAuthSignUp400, PostAuthSignUp409 } from '../models/PostAuthSignUp.ts'
import type { RequestConfig, ResponseErrorConfig } from '@kubb/plugin-client/clients/axios'

export function getPostAuthSignUpUrl() {
  return `http://localhost:3333/auth/sign-up` as const
}

/**
 * @summary Register a new user
 * {@link /auth/sign-up}
 */
export async function postAuthSignUp(
  data: PostAuthSignUpMutationRequest,
  config: Partial<RequestConfig<PostAuthSignUpMutationRequest>> & { client?: typeof client } = {},
) {
  const { client: request = client, ...requestConfig } = config

  const res = await request<PostAuthSignUpMutationResponse, ResponseErrorConfig<PostAuthSignUp400 | PostAuthSignUp409>, PostAuthSignUpMutationRequest>({
    method: 'POST',
    url: getPostAuthSignUpUrl().toString(),
    data,
    ...requestConfig,
  })
  return res.data
}