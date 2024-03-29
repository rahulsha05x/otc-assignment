import { ErrorMessage, Field, FieldProps, useFormikContext } from 'formik';
import { FormValues, INSTRUMENT } from '../../types';
import { FieldWithError } from '../FieldWithError/FieldWithError';
import { useAppContent } from '../../hooks/useAppContent';
import { useRetrieveSymbolData } from '../../hooks/useRetrieveSymbolData';
import optionsData from '../../mocks/optionsPrices.json';
import spotData from '../../mocks/spotPrices.json';

export const OTCFormFields = () => {
  const { values, setFieldValue, handleChange } =
    useFormikContext<FormValues>();
  const spotSymbolPriceMapper = useRetrieveSymbolData(spotData, {
    key: 'symbol',
    valueKey: 'price',
  });
  const optionsSymbolPriceMapper = useRetrieveSymbolData(optionsData, {
    key: 'symbol',
    valueKey: 'lastPrice',
  });
  const {
    intrumentLabel,
    minNotionalLabel,
    maxNotionalLabel,
    quantityLabel,
    tokenNameLabel,
    instrumentOptionsLabel,
    intrumentSpotLabel,
  } = useAppContent<string>('labels');

  const handleTokenNameChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const optionsMapper =
      values.instrument === INSTRUMENT.SPOT
        ? spotSymbolPriceMapper
        : optionsSymbolPriceMapper;
    const selectedValue = event.target.value;
    setFieldValue('tokenName', selectedValue);
    setFieldValue('price', optionsMapper[selectedValue]);
    handleChange(event);
  };

  return (
    <>
      <div className="row mb-3">
        <div className="col-12 col-md-4">
          <label htmlFor="instrument" className="form-label">
            {intrumentLabel}
          </label>
          <Field name="instrument">
            {({ field, form }: FieldProps<INSTRUMENT, FormValues>) => {
              return (
                <select
                  {...field}
                  onChange={(event) => {
                    form.resetForm();
                    field.onChange(event);
                  }}
                  className="form-select"
                  id="instrument"
                >
                  <option value={INSTRUMENT.SPOT}>{intrumentSpotLabel}</option>
                  <option value={INSTRUMENT.OPTION}>
                    {instrumentOptionsLabel}
                  </option>
                </select>
              );
            }}
          </Field>
        </div>
      </div>

      <div className="row mb-3">
        <div className="col-12 col-lg-4">
          <label htmlFor="minNotional" className="form-label">
            {minNotionalLabel}
          </label>
          <FieldWithError
            name="minNotional"
            className="form-control"
            type="number"
          />
        </div>

        <div className="col-12 col-lg-4">
          <label htmlFor="maxNotional" className="form-label">
            {maxNotionalLabel}
          </label>
          <FieldWithError
            name="maxNotional"
            className="form-control"
            type="number"
            step={'.01'}
          />
        </div>
      </div>

      <div className="row mb-3">
        <div className="col-12 col-lg-4">
          <label htmlFor="quantity" className="form-label">
            {quantityLabel}
          </label>
          <FieldWithError
            name="quantity"
            className="form-control"
            type="number"
            value={values.quantity}
          />
        </div>

        <div className="col-12 col-lg-4">
          <label htmlFor="tokenName" className="form-label">
            {tokenNameLabel}
          </label>

          <Field className="form-select" name="tokenName">
            {({ field, form }: FieldProps<INSTRUMENT, FormValues>) => {
              const { values } = form;
              const optionsMapper =
                values.instrument === INSTRUMENT.SPOT
                  ? spotSymbolPriceMapper
                  : optionsSymbolPriceMapper;
              return (
                <select
                  {...field}
                  onChange={handleTokenNameChange}
                  className="form-select"
                >
                  <option defaultValue={undefined}>--Select Token---</option>
                  {Object.keys(optionsMapper).map((symbol) => (
                    <option value={symbol} key={symbol}>
                      {symbol.toUpperCase()}
                    </option>
                  ))}
                </select>
              );
            }}
          </Field>
          <ErrorMessage name="tokenName">
            {(msg) => <p className="error-message">{msg}</p>}
          </ErrorMessage>
        </div>
      </div>
    </>
  );
};
