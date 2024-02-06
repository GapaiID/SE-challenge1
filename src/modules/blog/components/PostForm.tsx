import { Formik } from 'formik';
import * as Yup from 'yup';
import { useState } from 'react';
import {useCreate} from "@modules/blog/hooks";

const PostValidationSchema = Yup.object({
    title: Yup.string().min(10).max(200).required(),
    body: Yup.string().min(10).required(),
});

export const PostForm = ({ onSuccess }: any) => {
    const [nonFieldErrors, setNonFieldErrors] = useState([]);
    const { doCreate, isLoading } = useCreate();

    const submitHandler = async (values: any, formikOpts: any) => {
        try {
            await doCreate(values);
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
            initialValues={{ title: '', body: '' }}
            validationSchema={PostValidationSchema}
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
                    {nonFieldErrors.length > 0 && (
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
                        <div className="control">
                            <input
                                name="title"
                                className={[
                                    'input',
                                    errors.title && touched.title && errors.title
                                        ? 'is-danger'
                                        : '',
                                ].join(' ')}
                                type="text"
                                disabled={isLoading}
                                placeholder="Enter your title"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.title}
                            />
                        </div>
                        {errors.title && touched.title && (
                            <p className="help is-danger">{errors.title}</p>
                        )}
                    </div>

                    <div className="field">
                        <div className="control">
                            <textarea
                                name="body"
                                className={[
                                    'textarea',
                                    errors.body && touched.body && errors.body
                                        ? 'is-danger'
                                        : '',
                                ].join(' ')}
                                rows={4}
                                disabled={isLoading}
                                placeholder="Enter your description"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.body}
                            >
                            </textarea>
                        </div>
                        {errors.body && touched.body && (
                            <p className="help is-danger">{errors.body}</p>
                        )}
                    </div>
                    <div className="field">
                        <div className="control">
                            <button
                                type="submit"
                                className="button is-primary is-fullwidth"
                                disabled={isSubmitting || isLoading}
                            >
                                Create
                            </button>
                        </div>
                    </div>
                </form>
            )}
        </Formik>
    );
};
