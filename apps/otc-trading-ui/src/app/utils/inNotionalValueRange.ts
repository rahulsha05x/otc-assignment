import { FormValues, INSTRUMENT } from '../types';

export const inNotinalValueRange = (values: FormValues): boolean => {
  const {
    instrument,
    maxNotional,
    minNotional,
    price = 0,
    quantity = 0,
    strikePrice = 0,
  } = values;
  if (instrument === INSTRUMENT.SPOT) {
    const product = price * quantity;
    if (product <= minNotional || product >= maxNotional) {
      return false;
    }
  }
  if (instrument === INSTRUMENT.OPTION) {
    const product = strikePrice * quantity;
    if (product < minNotional || product > maxNotional) {
      return false;
    }
  }

  return true;
};
