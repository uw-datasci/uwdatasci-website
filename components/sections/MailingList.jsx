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
      Router.push('/success');
    },
  });

  return (
    <Banner>
      <div className="xl:flex xl:items-center xl:justify-between xl:gap-28">
        <div className="max-w-[600px]">
          <h2 className="mb-3 xl:mb-6">
            <span className="h2">Join Our Mailing List</span>
          </h2>

          <p className="mb-7 leading-relaxed text-purple dark:text-lightPurple xl:mb-12 xl:text-lg xl:leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>

          <form
            name="mailing-list"
            onSubmit={formik.handleSubmit}
            data-netlify="true"
            className="flex flex-col md:flex-row"
          >
            <input
              id="email"
              name="email"
              type="email"
              onChange={formik.handleChange}
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
