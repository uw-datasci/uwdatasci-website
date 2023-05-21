import { getDataOnce } from "../lib/firebase";
import SEO from "../components/other/SEO";
import Footer from "../components/navigation/Footer";
import { useState } from "react";
import { useFormik } from "formik";
import Button from "../components/UI/Button";
import Input from "../components/UI/Input";
import eyeIcon from "../public/img/icons/eye.svg";

function validate(values) {
  const errors = {};

  if (!values.email) {
    errors.email = "Please enter your email address.";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Please enter a valid email address.";
  }

  if (!values.password) {
    errors.password = "Please enter your password.";
  }
  return errors;
}

export default function Login() {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate,
    onSubmit: (values, actions) => {
      handleSubmit("login", values);
      actions.resetForm();
      setSubmitted(true);
    },
  });

  const [submitted, setSubmitted] = useState(false);

  return (
    <section className="white dark:dark-purple" id="login">
      <SEO title="Log In" />
      <h1 className="mb-10 text-center md:mb-2 xl:mb-2">
        <span className="h1">Log In</span>
      </h1>
      <div className="m-horizontal-third pb-24 md:pt-20 md:pb-25 xl:gap-20 xl:pb-32">
        <form
          name="login"
          onSubmit={formik.handleSubmit}
          className="flex flex-col gap-5 lg:gap-6"
          data-netlify="true"
        >
          <div>
            <Input
              inputType="textinput"
              id="email"
              name="email"
              type="email"
              onChange={formik.handleChange}
              onFocus={() => setSubmitted(false)}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              placeholder="Email"
            />
            {formik.touched.email && formik.errors.email ? (
              <p className="mt-3 text-sm text-red lg:mt-4 lg:text-base">
                {formik.errors.email}
              </p>
            ) : null}
          </div>
          <div>
            <Input
              inputType="textinput"
              id="password"
              name="password"
              type="text"
              onChange={formik.handleChange}
              onFocus={() => setSubmitted(false)}
              onBlur={formik.handleBlur}
              value={formik.values.password}
              placeholder="Password"
              //className="w-full rounded-t-md border border-purple bg-white py-3 px-4 text-black outline-none dark:border-white dark:bg-black dark:text-lightPurple md:rounded-r-none md:rounded-l-md md:py-4"
            />
            {formik.touched.password && formik.errors.password ? (
              <p className="mt-3 text-sm text-red lg:mt-4 lg:text-base">
                {formik.errors.password}
              </p>
            ) : null}

            {submitted ? (
              <p className="mt-3 text-sm text-darkGreen dark:text-lightGreen lg:mt-4 lg:text-base">
                Form submitted successfully.
              </p>
            ) : null}
          </div>
          <Button
            bg="bg-purple dark:bg-lightPurple"
            border="rounded-full"
            px="px-6"
            py="py-3 md:py-4"
            font="text-white dark:text-darkPurple font-semibold font-medium"
            onClick={formik.handleSubmit}
            classes="-mt-0.25 text-center md:mt-0 md:-ml-0.25"
          >
            Log In
          </Button>
        </form>
      </div>
      <Footer />
    </section>
  );
}
