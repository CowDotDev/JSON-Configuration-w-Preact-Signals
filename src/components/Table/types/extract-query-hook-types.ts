import { TLazyQueryHook } from '@/components/Table/types/data-table';
import { UnpackArray } from '@models/UnpackArray';
import { UnwrapPromise } from '@models/UnwrapPromise';

type TExtractLazyHookResponseTuple<LazyQueryHook extends TLazyQueryHook> =
  ReturnType<LazyQueryHook>;

// Extract Hook's Method
type TExtractLazyHookFetchMethod<LazyQueryHook extends TLazyQueryHook> =
  TExtractLazyHookResponseTuple<LazyQueryHook>[0];

// Extract Request Variables Type
type TExtractLazyHookFetchMethodVariables<LazyQueryHook extends TLazyQueryHook> = Parameters<
  TExtractLazyHookFetchMethod<LazyQueryHook>
>[0]['variables'];

// Extract Method's Response Type
type TExtractLazyHookFetchResponse<LazyQueryHook extends TLazyQueryHook> = UnwrapPromise<
  TExtractLazyHookResponseTuple<LazyQueryHook>[1]
>;

// Extract Response Node Data Type
export type TExtractLazyHookDataType<LazyQueryHook extends TLazyQueryHook> = UnpackArray<
  TExtractLazyHookFetchResponse<LazyQueryHook>['data']['query']['nodes']
>;

// Extract Filter Type
export type TExtractLazyHookFetchFilterType<LazyQueryHook extends TLazyQueryHook> = Exclude<
  TExtractLazyHookFetchMethodVariables<LazyQueryHook>['filter'],
  any[]
>;

// Extract Sorting Request Object Type
type TExtractLazyHookFetchSorting<LazyQueryHook extends TLazyQueryHook> = Exclude<
  TExtractLazyHookFetchMethodVariables<LazyQueryHook>['sorting'],
  any[]
>;

// Extract Sorting & Filtering Field Names/Property Keys
export type TExtractLazyHookFieldNames<LazyQueryHook extends TLazyQueryHook> =
  TExtractLazyHookFetchSorting<LazyQueryHook>['field'];
