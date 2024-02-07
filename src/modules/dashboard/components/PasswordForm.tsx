import { Formik } from 'formik';
import * as Yup from 'yup';
import { useState } from 'react';
import { useEditPassword } from '@modules/dashboard/hooks/useEditPassword';

const PasswordValidationSchema = Yup.object({
  oldPassword: Yup.string().min(3).required(),
  newPassword: Yup.string().min(3).required(),
  confirmPassword: Yup.string().min(3).required(),
});

export const PasswordForm = ({ onSuccess }: any) => {
  const [nonFieldErrors, setNonFieldErrors] = useState([]);
  const { doEditPassword, isLoading } = useEditPassword();

  const submitHandler = async (values: any, formikOpts: any) => {
    try {
      await doEditPassword(values);
      setNonFieldErrors([]);
      onSuccess();
    } catch (errorData: any) {
      setNonFieldErrors(errorData?.nonFieldErrors);
      if (errorData.fields) {
        formikOpts.setErrors(errorData.fields);
      }
    }
  };

  return (
    <Formik
      initialValues={{ oldPassword: '', newPassword: '', confirmPassword: '' }}
      validationSchema={PasswordValidationSchema}
      onSubmit={submitHandler}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
      }) => (
        <form onSubmit={handleSubmit}>
          {nonFieldErrors?.length > 0 && (
            <article className="message is-danger">
              <div className="message-body">
                <ul>
                  {nonFieldErrors?.map((field: string, index) => (
                    <li key={index}>{field}</li>
                  ))}
                </ul>
              </div>
            </article>
          )}

          <div className="field">
            <label className="label">Password Lama</label>
            <div className="control">
              <input
                name="oldPassword"
                className={[
                  'input',
                  errors.oldPassword &&
                  touched.oldPassword &&
                  errors.oldPassword
                    ? 'is-danger'
                    : '',
                ].join(' ')}
                type="password"
                disabled={isLoading}
                placeholder="Enter your Name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.oldPassword}
              />
            </div>
            {errors.oldPassword && touched.oldPassword && (
              <p className="help is-danger">{errors.oldPassword}</p>
            )}
          </div>

          <div className="field">
            <label className="label">Password Baru</label>
            <div className="control">
              <input
                name="newPassword"
                className={[
                  'input',
                  errors.newPassword &&
                  touched.newPassword &&
                  errors.newPassword
                    ? 'is-danger'
                    : '',
                ].join(' ')}
                type="password"
                disabled={isLoading}
                placeholder="Enter your Name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.newPassword}
              />
            </div>
            {errors.newPassword && touched.newPassword && (
              <p className="help is-danger">{errors.newPassword as any}</p>
            )}
          </div>

          <div className="field">
            <label className="label">Password Konfirmasi</label>
            <div className="control">
              <input
                name="confirmPassword"
                className={[
                  'input',
                  errors.confirmPassword &&
                  touched.confirmPassword &&
                  errors.confirmPassword
                    ? 'is-danger'
                    : '',
                ].join(' ')}
                type="password"
                disabled={isLoading}
                placeholder="Enter your Name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.confirmPassword}
              />
            </div>
            {errors.confirmPassword && touched.confirmPassword && (
              <p className="help is-danger">{errors.confirmPassword as any}</p>
            )}
          </div>

          <div className="field">
            <div className="control">
              <button
                className="button is-primary"
                disabled={isSubmitting || isLoading}
              >
                Edit Password
              </button>
            </div>
          </div>
        </form>
      )}
    </Formik>
  );
};
