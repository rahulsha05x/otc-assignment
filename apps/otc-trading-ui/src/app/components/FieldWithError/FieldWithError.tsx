import { ErrorMessage, Field, FieldAttributes } from 'formik';
import { FC } from 'react';

// This component wrap formik field and error component to allow to display error with form fields.
export const FieldWithError: FC<FieldAttributes<any>> = ({
  name,
  className,
  type,
  value,
  ...props
}) => {
  return (
    <>
      <Field name={name} className={className} type={type} {...props} />
      <ErrorMessage name={name}>
        {(msg) => <p className="error-message">{msg}</p>}
      </ErrorMessage>
    </>
  );
};
