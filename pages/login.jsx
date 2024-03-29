import { useState } from 'react';
import { useRouter } from 'next/router';
import { useFormik } from 'formik';
import { auth } from '../lib/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import SEO from '../components/other/SEO';
import Button from '../components/UI/Button';
import Input from '../components/UI/Input';
import eyeIcon from '../public/img/icons/eye.svg';
import Image from 'next/image';

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
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');

  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validate,
    onSubmit: async (values, actions) => {
      setError('');
      try {
        await signInWithEmailAndPassword(auth, values.email, values.password);
        router.push('/dashboard/events');
      } catch (error) {
        console.error(error);
        switch (error.code) {
          case 'auth/invalid-email':
            setError('Invalid email address.');
            break;
          case 'auth/user-disabled':
            setError('This account has been disabled.');
            break;
          case 'auth/user-not-found':
            setError('This account does not exist.');
            break;
          case 'auth/wrong-password':
            setError('Incorrect password.');
            break;
          default:
            setError('An unknown error occurred.');
            break;
        }
      }
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
          <div className='mb-6'>
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
              <p className='mt-5 text-red'>{formik.errors.email}</p>
            ) : null}
          </div>
          <div className='mb-16'>
            <div className='relative'>
              <Input
                inputType='textinput'
                id='password'
                name='password'
                type={showPassword ? 'text' : 'password'}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
                placeholder='Password'
              />
              <Image
                src={eyeIcon}
                alt='eye icon'
                onClick={() => setShowPassword(!showPassword)}
                className='filter-purple dark:filter-light-purple absolute top-1/2 right-4 h-6 w-6 -translate-y-1/2 cursor-pointer'
              />
            </div>
            {formik.touched.password && formik.errors.password ? (
              <p className='mt-5 text-red'>{formik.errors.password}</p>
            ) : null}
            {error && <p className='mt-5 text-red'>{error}</p>}
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
