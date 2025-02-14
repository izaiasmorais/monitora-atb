import client from '@kubb/plugin-client/clients/axios'
import type { GetPrescriptionsQueryResponse, GetPrescriptionsQueryParams, GetPrescriptions401 } from '../../models/GetPrescriptions.ts'
import type { RequestConfig, ResponseErrorConfig } from '@kubb/plugin-client/clients/axios'
import type { QueryKey, QueryObserverOptions, UseQueryResult } from '@tanstack/react-query'
import { getPrescriptions } from '../../clients/getPrescriptions.ts'
import { queryOptions, useQuery } from '@tanstack/react-query'

export const getPrescriptionsQueryKey = (params?: GetPrescriptionsQueryParams) => [{ url: '/prescriptions' }, ...(params ? [params] : [])] as const

export type GetPrescriptionsQueryKey = ReturnType<typeof getPrescriptionsQueryKey>

export function getPrescriptionsQueryOptions(params?: GetPrescriptionsQueryParams, config: Partial<RequestConfig> & { client?: typeof client } = {}) {
  const queryKey = getPrescriptionsQueryKey(params)
  return queryOptions<GetPrescriptionsQueryResponse, ResponseErrorConfig<GetPrescriptions401>, GetPrescriptionsQueryResponse, typeof queryKey>({
    queryKey,
    queryFn: async ({ signal }) => {
      config.signal = signal
      return getPrescriptions(params, config)
    },
  })
}

/**
 * @summary Get paginated prescriptions
 * {@link /prescriptions}
 */
export function useGetPrescriptions<
  TData = GetPrescriptionsQueryResponse,
  TQueryData = GetPrescriptionsQueryResponse,
  TQueryKey extends QueryKey = GetPrescriptionsQueryKey,
>(
  params?: GetPrescriptionsQueryParams,
  options: {
    query?: Partial<QueryObserverOptions<GetPrescriptionsQueryResponse, ResponseErrorConfig<GetPrescriptions401>, TData, TQueryData, TQueryKey>>
    client?: Partial<RequestConfig> & { client?: typeof client }
  } = {},
) {
  const { query: queryOptions, client: config = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? getPrescriptionsQueryKey(params)

  const query = useQuery({
    ...(getPrescriptionsQueryOptions(params, config) as unknown as QueryObserverOptions),
    queryKey,
    ...(queryOptions as unknown as Omit<QueryObserverOptions, 'queryKey'>),
  }) as UseQueryResult<TData, ResponseErrorConfig<GetPrescriptions401>> & { queryKey: TQueryKey }

  query.queryKey = queryKey as TQueryKey

  return query
}