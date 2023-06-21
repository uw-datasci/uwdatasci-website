import { useState } from 'react';
import { useFormik } from 'formik';
import { auth } from '../lib/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import SEO from '../components/other/SEO';
import Button from '../components/UI/Button';
import Input from '../components/UI/Input';
import eyeIcon from '../public/img/icons/eye.svg';

function validate(values) {
  const errors = {};

  if (!values.email) {
    errors.email = 'Please enter your email address.';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Please enter a valid email address.';
  }

  if (!values.password) {
    errors.password = 'Please enter your password.';
  }
  return errors;
}

export default function Login() {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validate,
    onSubmit: (values, actions) => {
      console.log('submitted');
    },
  });

  return (
    <>
      <SEO title='Log In' />
      <section className='m-horizontal'>
        <h1 className='mb-9 text-center text-6xl font-bold text-darkPurple dark:text-white md:text-8xl'>
          Log In
        </h1>
        <form
          name='login'
          onSubmit={formik.handleSubmit}
          data-netlify='true'
          className='mx-auto max-w-[440px]'
        >
          <div className='mb-5'>
            <Input
              inputType='textinput'
              id='email'
              name='email'
              type='email'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              placeholder='Email'
            />
            {formik.touched.email && formik.errors.email ? (
              <p className='mt-3 text-sm text-red lg:mt-4 lg:text-base'>
                {formik.errors.email}
              </p>
            ) : null}
          </div>
          <div className='mb-16'>
            <Input
              inputType='textinput'
              id='password'
              name='password'
              type='text'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
              placeholder='Password'
            />
            {formik.touched.password && formik.errors.password ? (
              <p className='mt-3 text-sm text-red lg:mt-4 lg:text-base'>
                {formik.errors.password}
              </p>
            ) : null}
          </div>
          <Button
            bg='bg-purple dark:bg-lightPurple'
            border='rounded-full'
            px='px-6'
            py='py-3 md:py-4'
            font='text-white dark:text-darkPurple font-semibold'
            onClick={formik.handleSubmit}
            classes='text-center'
          >
            Log In
          </Button>
        </form>
      </section>
    </>
  );
}
