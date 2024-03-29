import { FormikProps } from 'formik';

export enum INSTRUMENT {
  OPTION = 'Option',
  SPOT = 'Spot',
}
export enum TYPE {
  PUT = 'put',
  CALL = 'call',
}
// Define types for your form values
export interface FormValues {
  instrument: INSTRUMENT;
  minNotional: number;
  maxNotional: number;
  expirationDate?: string;
  type?: TYPE;
  price?: number;
  strikePrice?: number;
  quantity?: number;
  tokenName?: string;
}

export type FormFieldsType = {
  formik: FormikProps<FormValues>;
};
