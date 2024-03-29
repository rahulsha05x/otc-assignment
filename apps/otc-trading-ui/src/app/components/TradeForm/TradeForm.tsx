import React from 'react';
import { Formik, Form } from 'formik';
import { OptionsFormFields } from '../OptionsFormFields';
import { SpotFormFields } from '../SpotFormFields';
import { OTCFormFields } from '../OTCFormFields';
import { FormValues, INSTRUMENT, TYPE } from '../../types';
import { submitHandler, validationSchema } from '../../utils';
import { useAppContent } from '../../hooks/useAppContent';


const initialValues = {
  instrument: INSTRUMENT.SPOT,
  minNotional: 0,
  maxNotional: 0,
  quantity: 0,
  tokenName: '',
  type: TYPE.PUT,
  price: 0,
  strikePrice: 0,
  expirationDate: new Date().toISOString().split('T')[0],
};

export const TradeForm: React.FC = () => {
  const { submitLabel } = useAppContent<string>('labels');
  const errorContent = useAppContent<string>('errors');
  return (
    <Formik<FormValues>
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values, action) => submitHandler(values, action, errorContent)}
    >
      {(formik) => (
        <Form>
          <OTCFormFields />
          {formik.values.instrument === INSTRUMENT.OPTION && (
            <OptionsFormFields />
          )}

          {formik.values.instrument === INSTRUMENT.SPOT && <SpotFormFields />}

          <button type="submit" className="btn btn-primary mt-3">
            {submitLabel}
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default TradeForm;
