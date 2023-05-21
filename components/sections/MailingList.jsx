import { useState } from 'react';
import { useFormik } from 'formik';
import Image from 'next/image';
import handleSubmit from '../../utils/form-submission';
import Banner from '../UI/Banner';
import Button from '../UI/Button';
import echo from '../../public/img/graphics/echo.png';

function validate(values) {
  const errors = {};

  if (!values.email) {
    errors.email = 'Please enter your email address.';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Please enter a valid email address.';
  }
  return errors;
}

export default function MailingList() {
  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validate,
    onSubmit: (values, actions) => {
      handleSubmit('mailing-list', values);
      actions.resetForm();
      setSubmitted(true);
    },
  });

  const [submitted, setSubmitted] = useState(false);

  return (
    <Banner>
      <div className="xl:flex xl:items-center xl:justify-between xl:gap-28">
        <div className="xl:max-w-[600px]">
          <h2 className="mb-3 xl:mb-6">
            <span className="h2">Join Our Mailing List</span>
          </h2>
          <p className="mb-7 leading-relaxed text-purple dark:text-lightPurple xl:mb-12 xl:text-lg xl:leading-relaxed">
            Want to keep up with all Data Science Club activities? Enter your
            email address here to be notified periodically for all our news and
            events! Also, no spam emails, we promise!
          </p>
          <form
            name="mailing-list"
            onSubmit={formik.handleSubmit}
            className="flex flex-col md:flex-row"
            data-netlify="true"
          >
            <input
              id="email"
              name="email"
              type="email"
              onChange={formik.handleChange}
              onFocus={() => setSubmitted(false)}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              placeholder="Enter your email..."
              className="w-full rounded-t-md border border-purple bg-white py-3 px-4 text-black outline-none dark:bg-black dark:text-lightPurple md:rounded-r-none md:rounded-l-md md:py-4"
            />
            <Button
              bg="bg-lighterPurple dark:bg-darkPurple"
              border="border-purple border rounded-b-md md:rounded-r-md md:rounded-l-none"
              px="px-6"
              py="py-3 md:py-4"
              font="text-purple dark:text-lightPurple font-medium"
              onClick={formik.handleSubmit}
              classes="-mt-0.25 text-center md:mt-0 md:-ml-0.25"
            >
              Submit
            </Button>
          </form>
          {formik.touched.email && formik.errors.email ? (
            <p className="mt-4 text-sm text-red lg:text-base">
              {formik.errors.email}
            </p>
          ) : null}
          {submitted ? (
            <p className="mt-4 text-sm text-darkGreen dark:text-lightGreen lg:text-base">
              Success! Thank you for joining our mailing list.
            </p>
          ) : null}
        </div>

        <Image
          src={echo}
          alt="echo"
          className="no-select-or-drag hidden w-[32%] xl:block"
        />
      </div>
    </Banner>
  );
}
