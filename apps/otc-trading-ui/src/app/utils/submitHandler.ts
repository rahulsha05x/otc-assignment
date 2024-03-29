import { FormikHelpers } from 'formik';
import { FormValues, INSTRUMENT } from '../types';
import { checkTradeConsistency } from './checkTradeConsistency';
import { Content } from '../hooks/useAppContent';

export const submitHandler = (
  values: FormValues,
  options: FormikHelpers<FormValues>,
  content: Readonly<Content<string>>
) => {
  const hasError = checkTradeConsistency(values, options, content);

  if (Object.keys(hasError).length > 0) {
    options.setErrors(hasError);
    options.setSubmitting(false);
    return;
  }
  // Removing option specific fields if intrument is spot from final submission.
  if (values.instrument === INSTRUMENT.SPOT) {
    const { type, strikePrice, expirationDate, ...rest } = values;
    console.log(rest);
  } else {
    console.log(values);
  }
};
