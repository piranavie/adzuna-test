import React, { Component, useState } from 'react';
import './Form.css';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import SuccessPage from '../SucessPage/SuccessPage.js';
import * as Yup from 'yup';

function Form() {
  const validationSchema = Yup.object().shape({
    fullname: Yup.string().required('Full name is required'),
    email: Yup.string()
      .required('Email is required')
      .email('Email is invalid'),
    notes: Yup.string()
      .required('Notes is required')
      .min(20, 'Notes must be at least 20 characters')
  });

  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      fullname: '',
      email: '',
      notes: ''
    }
  });

  const onSubmit = data => {
    console.log(JSON.stringify(data, null, 2));
    if (data.fullname && data.email && data.notes) {
      console.log('success');
      setSubmitted(true);
      browserHistory.push('/SuccessPage');
    }
  };

  return (
    submitted ? <SuccessPage /> : <form className="demoForm" onSubmit={handleSubmit(onSubmit)}>
      <div className="fullName">
        <label htmlFor="fullName">Full Name:</label>
        <input
          name="fullname"
          type="text"
          {...register('fullname')}
          className={`form-control ${errors.fullname ? 'is-invalid' : ''}`}
        />
        <div className="invalid-feedback">{errors.fullname?.message}</div>
      </div>
      <div className="email">
        <label htmlFor="email">Email:</label>
        <input
          name="email"
          type="text"
          {...register('email')}
          className={`form-control ${errors.email ? 'is-invalid' : ''}`}
        />
        <div className="invalid-feedback">{errors.email?.message}</div>
      </div>
      <div className="notes">
        <label htmlFor="notes">Notes:</label>
        <textarea
          type="notes"
          name="notes"
          placeholder="Enter your notes"
          {...register('notes')}
          className={`form-control ${errors.notes ? 'is-invalid' : ''}`}
        />
        <div className="invalid-feedback">{errors.notes?.message}</div>
      </div>
      <div className="submit">
        <button type="submit" className="submitButton">
          Submit
        </button>
      </div>
    </form>
  );
}

export default Form;
