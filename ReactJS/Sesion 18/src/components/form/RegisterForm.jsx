/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

// Models
import ROLES from '../../models/roles.enum';

const RegisterForm = ({ onSubmit }) => {
  const initialValues = {
    username: '',
    email: '',
    password: '',
    confirm: '', // to confirm password
    role: ROLES.USER,
  };

  const registerSchema = Yup.object().shape({
    username: Yup.string()
      .min(6, 'Username too short')
      .max(12, 'Username too long')
      .required('Username is required'),
    email: Yup.string().email('Invalid email format').required('Email is required'),
    role: Yup.string()
      .oneOf([ROLES.USER, ROLES.ADMIN], 'You must select a Role: User / Admin')
      .required('Role is required'),
    password: Yup.string().min(8, 'Password too short').required('Password is required'),
    confirm: Yup.string()
      .when('password', {
        is: (value) => !!(value && value.length > 0),
        then: Yup.string().oneOf([Yup.ref('password')], '¡Passwords must match!'),
      })
      .required('You must confirm the password'),
  });

  return (
    <div>
      <h4>Register Formik</h4>
      <Formik
        initialValues={initialValues}
        // *** Yup Validation Schema ***
        validationSchema={registerSchema}
        // ** onSubmit Event
        onSubmit={async (values) => {
          await new Promise((r) => setTimeout(r, 1000));
          onSubmit(values);
        }}
      >
        {({ touched, errors, isSubmitting }) => (
          <Form>
            <label htmlFor="username">Username</label>
            <Field id="username" type="text" name="username" placeholder="Your username" />

            {/* Username Errors */}
            {errors.username && touched.username && <ErrorMessage name="username" component="div" />}

            <label htmlFor="email">Email</label>
            <Field id="email" type="email" name="email" placeholder="example@email.com" />

            {/* Email Errors */}
            {errors.email && touched.email && <ErrorMessage name="email" component="div" />}

            <label htmlFor="password">Password</label>
            <Field id="password" name="password" placeholder="password" type="password" />
            {/* Password Errors */}
            {errors.password && touched.password && <ErrorMessage name="password" component="div" />}

            <label htmlFor="confirm">Password</label>
            <Field id="confirm" name="confirm" placeholder="confirm passsword" type="password" />
            {/* Confirm Password Errors */}
            {errors.confirm && touched.confirm && <ErrorMessage name="confirm" component="div" />}

            <button type="submit">Register Account</button>
            {isSubmitting ? <p>Sending your credentials...</p> : null}
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default RegisterForm;
