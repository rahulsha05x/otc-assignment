import * as Yup from 'yup';
import { INSTRUMENT } from '../types';

export const validationSchema = Yup.object({
  instrument: Yup.string()
    .oneOf([INSTRUMENT.OPTION, INSTRUMENT.SPOT], 'Invalid entry')
    .required('Instrument is required.'),
  minNotional: Yup.number()
    .min(0, 'Number should be positive.')
    .required('Max notional value is Required'),
  maxNotional: Yup.number()
    .moreThan(Yup.ref('minNotional'), 'Must be greater than Min. Notional')
    .required('Min notional value is Required'),
  type: Yup.string().when('instrument', {
    is: INSTRUMENT.OPTION,
    then: (schema) => schema.required('Type is required'),
  }),
  price: Yup.number().when('instrument', {
    is: INSTRUMENT.SPOT,
    then: (schema) =>
      schema
        .min(0, 'Number should be positive.')
        .required('Price is required.'),
  }),
  strikePrice: Yup.number()
    .min(0, 'Must be a positive number.')
    .when('instrument', {
      is: INSTRUMENT.OPTION,
      then: (schema) => schema.required('Strike price is required.'),
    }),
  quantity: Yup.number()
    .min(1, 'Must be greater than 0')
    .required('Quantity is required'),
  tokenName: Yup.string().required('Token name is required'),
});



