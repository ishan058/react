import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import '../styles/Register.css';

const Register = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [passwordStrength, setPasswordStrength] = useState('');

    const checkPasswordStrength = (password) => {
        let strength = '';
        if (password.length > 8 && /[A-Z]/.test(password) && /[0-9]/.test(password) && /[!@#$%^&*]/.test(password)) {
            strength = 'Strong';
        } else if (password.length > 6 && /[A-Z]/.test(password) && /[0-9]/.test(password)) {
            strength = 'Medium';
        } else {
            strength = 'Weak';
        }
        setPasswordStrength(strength);
    };

    const validationSchema = Yup.object({
        name: Yup.string().min(3, 'Name must be at least 3 characters').required('Name is required'),
        email: Yup.string().email('Invalid email format').required('Email is required'),
        phone: Yup.string()
            .matches(/^[0-9]+$/, 'Phone number must be numeric')
            .min(10, 'Phone number must be at least 10 digits')
            .required('Phone number is required'),
        password: Yup.string()
            .min(6, 'Password must be at least 6 characters')
            .matches(/[a-z]/, 'Password must contain at least one lowercase letter')
            .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
            .matches(/[0-9]/, 'Password must contain at least one number')
            .matches(/[!@#$%^&*]/, 'Password must contain at least one special character')
            .required('Password is required'),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Passwords must match')
            .required('Confirm Password is required'),
    });

    const handleSubmit = (values, { resetForm }) => {
        console.log('Form Data:', values);
        alert('Registration Successful!');
        resetForm({ values: '' });
    };

    return (
        <div className="register-container">
            <h2>Register</h2>
            <Formik
                initialValues={{
                    name: '',
                    email: '',
                    phone: '',
                    password: '',
                    confirmPassword: '',
                }}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                {({ values, handleChange }) => (
                    <Form>
                        <div className="form-group">
                            <Field name="name" type="text" placeholder="Full Name" />
                            <ErrorMessage name="name" component="div" className="error-message" />
                        </div>

                        <div className="form-group">
                            <Field name="email" type="email" placeholder="Email" />
                            <ErrorMessage name="email" component="div" className="error-message" />
                        </div>

                        <div className="form-group">
                            <Field name="phone" type="text" placeholder="Phone Number" />
                            <ErrorMessage name="phone" component="div" className="error-message" />
                        </div>

                        <div className="form-group password-container">
                            <Field
                                name="password"
                                type={showPassword ? 'text' : 'password'}
                                placeholder="Password"
                                onChange={(e) => {
                                    handleChange(e);
                                    checkPasswordStrength(e.target.value);
                                }}
                            />
                            <button
                                type="button"
                                className="password-toggle"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? <FaEyeSlash /> : <FaEye />}
                            </button>
                            <ErrorMessage name="password" component="div" className="error-message" />
                        </div>
                        <div className="password-strength">
                            <p>Password Strength: <span className={passwordStrength.toLowerCase()}>{passwordStrength}</span></p>
                        </div>

                        <div className="form-group password-container">
                            <Field
                                name="confirmPassword"
                                type={showConfirmPassword ? 'text' : 'password'}
                                placeholder="Confirm Password"
                            />
                            <button
                                type="button"
                                className="password-toggle"
                                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                            >
                                {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                            </button>
                            <ErrorMessage name="confirmPassword" component="div" className="error-message" />
                        </div>

                        <button type="submit">Register</button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default Register;
