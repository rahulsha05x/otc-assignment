import { useFormikContext } from 'formik';
import { FormValues } from '../../types';
import { FieldWithError } from '../FieldWithError/FieldWithError';
import { useAppContent } from '../../hooks/useAppContent';

export const SpotFormFields = () => {
  const { values } = useFormikContext<FormValues>();
  const { priceLabel } = useAppContent<string>('labels');
  return (
    <div className="row mb-3">
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
  );
};
