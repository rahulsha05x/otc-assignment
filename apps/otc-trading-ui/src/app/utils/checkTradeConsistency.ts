import { FormikHelpers } from 'formik';
import { FormValues, INSTRUMENT, TYPE } from '../types';
import { inNotinalValueRange } from './inNotionalValueRange';
import { isValidDate } from './validateDateRange';
import { Content } from '../hooks/useAppContent';
/**
 * @description This method checks for trade consistency after initial validation checks are done using Yup.
 * @param values form values
 * @param form form bag
 * @param content content
 * @returns returns error object
 */
export const checkTradeConsistency = (
  values: FormValues,
  form: FormikHelpers<FormValues>,
  content: Readonly<Content<string>>
) => {
  const {
    instrument,
    price = 0,
    type,
    strikePrice = 0,
    expirationDate,
  } = values;
  const errors: Record<string, string> = {};
  const {
    spotNotionalRangeErrorForQuantity,
    spotNotionalRangeErrorForMaxNotionalValue,
    expirationDateError,
    optionNotionalRangeErrorForMaxNotionalValue,
    optionNotionalRangeErrorForQuantity,
    optionNotionalRangeErrorForStrikePrice,
    callTypeStrikePriceError,
    putTypeStrikePriceError,
  } = content;

  switch (instrument) {
    case INSTRUMENT.SPOT:
      if (!inNotinalValueRange(values)) {
        errors.quantity = spotNotionalRangeErrorForQuantity;
        errors.maxNotional = spotNotionalRangeErrorForMaxNotionalValue;
        errors.minNotional = spotNotionalRangeErrorForMaxNotionalValue;
      }
      break;
    case INSTRUMENT.OPTION:
      {
        const isValidPeriod = isValidDate(
          expirationDate || new Date().toString()
        );
        if (!isValidPeriod) {
          errors.expirationDate = expirationDateError;
        }
        if (!inNotinalValueRange(values)) {
          errors.quantity = optionNotionalRangeErrorForQuantity;
          errors.maxNotional = optionNotionalRangeErrorForMaxNotionalValue;
          errors.strikePrice = optionNotionalRangeErrorForStrikePrice;
        } else {
          if (type === TYPE.CALL && price >= strikePrice) {
            errors.strikePrice = callTypeStrikePriceError;
          } else if (type === TYPE.PUT && price <= strikePrice) {
            errors.strikePrice = putTypeStrikePriceError;
          }
        }
      }
      break;
  }

  return errors;
};
