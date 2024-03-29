import { ErrorMessage, Field, useFormikContext } from 'formik';
import { FormValues, TYPE } from '../../types';
import { FieldWithError } from '../FieldWithError/FieldWithError';
import { useAppContent } from '../../hooks/useAppContent';

export const OptionsFormFields = () => {
  const { values } = useFormikContext<FormValues>();
  const {
    expirationDateLabel,
    typeLabel,
    callOption,
    putOption,
    strikePriceLabel,
    priceLabel,
  } = useAppContent<string>('labels');
  return (
    <>
      <div className="row mb-3">
        <div className="col-12 col-lg-4">
          <label htmlFor="expirationDate" className="form-label">
            {expirationDateLabel}
          </label>
          <Field
            name="expirationDate"
            className="form-control"
            type="date"
            value={values.expirationDate}
            min={new Date().toISOString().split('T')[0]}
          />
          <ErrorMessage name="expirationDate">
            {(msg) => <p className="error-message">{msg}</p>}
          </ErrorMessage>
        </div>

        <div className="col-12 col-lg-4">
          <label htmlFor="type" className="form-label">
            {typeLabel}
          </label>
          <Field as="select" name="type" className="form-select">
            <option value={TYPE.PUT}>{putOption}</option>
            <option value={TYPE.CALL}>{callOption}</option>
          </Field>
          <ErrorMessage name="type">
            {(msg) => <p className="error-message">{msg}</p>}
          </ErrorMessage>
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-lg-4">
          <label htmlFor="strikePrice" className="form-label">
            {strikePriceLabel}
          </label>
          <FieldWithError
            name="strikePrice"
            type="number"
            className="form-control"
            value={values.strikePrice || 0}
          />
        </div>
        <div className="col-12 col-lg-4">
          <label htmlFor="price" className="form-label">
            {priceLabel}
          </label>
          <FieldWithError
            name="price"
            type="number"
            className="form-control"
            value={values.price || 0}
            readOnly
          />
        </div>
      </div>
    </>
  );
};
