export const removeSwapColumns = <T>(showSwaps: boolean): T => {
  const removeColumns: T = showSwaps
    ? ([] as T)
    : ([
        'swap_id',
        'swap_source',
        'trend_all_line_items',
        'trend_all_quantity',
        'trend_7_day_line_items',
        'trend_7_day_quantity',
        'trend_uom',
      ] as T);
  return removeColumns;
};
