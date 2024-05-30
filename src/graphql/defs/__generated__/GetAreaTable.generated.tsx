/* eslint-disable */
import * as Types from '../../types.generated';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type AreaFragment = { __typename?: 'ViewArea', id?: string | null, code?: string | null, name?: string | null, description?: string | null, isEmpty?: boolean | null, storageLocation?: string | null, storageLocationId?: string | null, status?: Types.AreaStatus | null, targetTemperature?: number | null, entryPoint: boolean, exitPoint: boolean, warehouseId?: string | null };

export type AreaTableQueryVariables = Types.Exact<{
  paging?: Types.InputMaybe<Types.OffsetPaging>;
  filter?: Types.InputMaybe<Types.ViewAreaFilter>;
  sorting?: Types.InputMaybe<Array<Types.ViewAreaSort> | Types.ViewAreaSort>;
  includePageInfo?: Types.InputMaybe<Types.Scalars['Boolean']['input']>;
  includeNodes?: Types.InputMaybe<Types.Scalars['Boolean']['input']>;
  includeTotalCount?: Types.InputMaybe<Types.Scalars['Boolean']['input']>;
}>;


export type AreaTableQuery = { __typename?: 'Query', query: { __typename?: 'ViewAreaOffsetConnection', totalCount?: number, pageInfo?: { __typename?: 'OffsetPageInfo', hasNextPage?: boolean | null, hasPreviousPage?: boolean | null }, nodes?: Array<{ __typename?: 'ViewArea', id?: string | null, code?: string | null, name?: string | null, description?: string | null, isEmpty?: boolean | null, storageLocation?: string | null, storageLocationId?: string | null, status?: Types.AreaStatus | null, targetTemperature?: number | null, entryPoint: boolean, exitPoint: boolean, warehouseId?: string | null }> } };

export const AreaFragmentDoc = gql`
    fragment Area on ViewArea {
  id
  code
  name
  description
  isEmpty
  storageLocation
  storageLocationId
  status
  targetTemperature
  entryPoint
  exitPoint
  warehouseId
}
    `;
export const AreaTableDocument = gql`
    query AreaTable($paging: OffsetPaging, $filter: ViewAreaFilter, $sorting: [ViewAreaSort!], $includePageInfo: Boolean = true, $includeNodes: Boolean = true, $includeTotalCount: Boolean = false) {
  query: viewAreas(sorting: $sorting, paging: $paging, filter: $filter) {
    pageInfo @include(if: $includePageInfo) {
      hasNextPage
      hasPreviousPage
    }
    nodes @include(if: $includeNodes) {
      ...Area
    }
    totalCount @include(if: $includeTotalCount)
  }
}
    ${AreaFragmentDoc}`;

/**
 * __useAreaTableQuery__
 *
 * To run a query within a React component, call `useAreaTableQuery` and pass it any options that fit your needs.
 * When your component renders, `useAreaTableQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAreaTableQuery({
 *   variables: {
 *      paging: // value for 'paging'
 *      filter: // value for 'filter'
 *      sorting: // value for 'sorting'
 *      includePageInfo: // value for 'includePageInfo'
 *      includeNodes: // value for 'includeNodes'
 *      includeTotalCount: // value for 'includeTotalCount'
 *   },
 * });
 */
export function useAreaTableQuery(baseOptions?: Apollo.QueryHookOptions<AreaTableQuery, AreaTableQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AreaTableQuery, AreaTableQueryVariables>(AreaTableDocument, options);
      }
export function useAreaTableLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AreaTableQuery, AreaTableQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AreaTableQuery, AreaTableQueryVariables>(AreaTableDocument, options);
        }
export function useAreaTableSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<AreaTableQuery, AreaTableQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<AreaTableQuery, AreaTableQueryVariables>(AreaTableDocument, options);
        }
export type AreaTableQueryHookResult = ReturnType<typeof useAreaTableQuery>;
export type AreaTableLazyQueryHookResult = ReturnType<typeof useAreaTableLazyQuery>;
export type AreaTableSuspenseQueryHookResult = ReturnType<typeof useAreaTableSuspenseQuery>;
export type AreaTableQueryResult = Apollo.QueryResult<AreaTableQuery, AreaTableQueryVariables>;