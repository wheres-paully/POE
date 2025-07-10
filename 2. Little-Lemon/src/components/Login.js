import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './Login.css'; 

const validationSchema = Yup.object({
  username: Yup.string().required('Username is required'),
  password: Yup.string().min(6, 'Minimum 6 characters').required('Password is required'),
});

function Login() {
  const handleLogin = (values) => {
    console.log('Logging in with:', values);
    // Add real login logic here
  };

  return (
    <section className="reservation-form">
      <h2>Welcome Back</h2>
      <Formik
        initialValues={{ username: '', password: '' }}
        validationSchema={validationSchema}
        onSubmit={handleLogin}
      >
        <Form>
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <Field name="username" className="form-input" />
            <ErrorMessage name="username" component="div" className="error" />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <Field name="password" type="password" className="form-input" />
            <ErrorMessage name="password" component="div" className="error" />
          </div>
          <br />
          <div className="forgot-password">
            <a href="/forgot-password">Forgot Password?</a>
          </div>

          <button type="submit" className="form-button">Log In</button>
        </Form>
      </Formik>
    </section>
  );
}

export default Login;