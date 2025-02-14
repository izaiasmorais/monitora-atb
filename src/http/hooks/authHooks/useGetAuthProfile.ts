import client from '@kubb/plugin-client/clients/axios'
import type { GetAuthProfileQueryResponse, GetAuthProfile401, GetAuthProfile404 } from '../../models/GetAuthProfile.ts'
import type { RequestConfig, ResponseErrorConfig } from '@kubb/plugin-client/clients/axios'
import type { QueryKey, QueryObserverOptions, UseQueryResult } from '@tanstack/react-query'
import { getAuthProfile } from '../../clients/getAuthProfile.ts'
import { queryOptions, useQuery } from '@tanstack/react-query'

export const getAuthProfileQueryKey = () => [{ url: '/auth/profile' }] as const

export type GetAuthProfileQueryKey = ReturnType<typeof getAuthProfileQueryKey>

export function getAuthProfileQueryOptions(config: Partial<RequestConfig> & { client?: typeof client } = {}) {
  const queryKey = getAuthProfileQueryKey()
  return queryOptions<GetAuthProfileQueryResponse, ResponseErrorConfig<GetAuthProfile401 | GetAuthProfile404>, GetAuthProfileQueryResponse, typeof queryKey>({
    queryKey,
    queryFn: async ({ signal }) => {
      config.signal = signal
      return getAuthProfile(config)
    },
  })
}

/**
 * @summary Get authenticated user profile
 * {@link /auth/profile}
 */
export function useGetAuthProfile<
  TData = GetAuthProfileQueryResponse,
  TQueryData = GetAuthProfileQueryResponse,
  TQueryKey extends QueryKey = GetAuthProfileQueryKey,
>(
  options: {
    query?: Partial<QueryObserverOptions<GetAuthProfileQueryResponse, ResponseErrorConfig<GetAuthProfile401 | GetAuthProfile404>, TData, TQueryData, TQueryKey>>
    client?: Partial<RequestConfig> & { client?: typeof client }
  } = {},
) {
  const { query: queryOptions, client: config = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? getAuthProfileQueryKey()

  const query = useQuery({
    ...(getAuthProfileQueryOptions(config) as unknown as QueryObserverOptions),
    queryKey,
    ...(queryOptions as unknown as Omit<QueryObserverOptions, 'queryKey'>),
  }) as UseQueryResult<TData, ResponseErrorConfig<GetAuthProfile401 | GetAuthProfile404>> & { queryKey: TQueryKey }

  query.queryKey = queryKey as TQueryKey

  return query
}