import { useMemo } from 'react';

/**
 *
 * @param data collection of data
 * @param param1 accepts and object which creates an object with value of key as key and valueKey as value
 * @returns accepts and object which creates an object with value of key as key and valueKey as value
 */
export const useRetrieveSymbolData = <T extends Record<string, any>>(
  data: Array<T>,
  { key, valueKey }: { key: keyof T; valueKey: keyof T }
) => {
  const optionsSymbolPriceMapper = useMemo(() => {
    const mapper: Record<string, string> = {};
    for (let i = 0; i < data.length; i++) {
      if (!mapper[data[i][key]]) {
        mapper[data[i][key] as string] = data[i][valueKey] as unknown as string;
      }
    }

    return mapper;
  }, [data, key, valueKey]);
  return optionsSymbolPriceMapper;
};
