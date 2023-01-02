import { useState } from 'react';
import { useFormik } from 'formik';
import Image from 'next/image';
import handleSubmit from '../../utils/form-submission';
import Input from '../UI/Input';
import GradientBorder from '../UI/GradientBorder';
import Button from '../UI/Button';
import mailIcon from '../../public/img/icons/mail.svg';
import instagramIcon from '../../public/img/icons/instagram.svg';
import discordIcon from '../../public/img/icons/discord.svg';

const SOCIAL_BUTTONS = [
  {
    link: 'mailto:contact@uwdatascience.ca',
    text: 'contact@uwdatascience.ca',
    icon: mailIcon,
  },
  {
    link: 'https://www.instagram.com/uwaterloodsc/',
    text: '@uwaterloodsc',
    icon: instagramIcon,
  },
  {
    link: 'https://discord.gg/35hK2nzxM4',
    text: 'discord.gg/35hK2nzxM4',
    icon: discordIcon,
  },
];

function validate(values) {
  const errors = {};

  if (!values.name) {
    errors.name = 'Please enter your name.';
  }

  if (!values.email) {
    errors.email = 'Please enter your email address.';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Please enter a valid email address.';
  }

  if (!values.message) {
    errors.message = 'Please enter your message.';
  }

  return errors;
}

export default function Contact() {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: '',
    },
    validate,
    onSubmit: (values, actions) => {
      handleSubmit('contact', values);
      actions.resetForm();
      setSubmitted(true);
    },
  });

  const [submitted, setSubmitted] = useState(false);

  return (
    <section
      className="white-to-lighter-purple dark:black-to-dark-purple"
      id="contact"
    >
      <div className="m-horizontal grid gap-9 pt-9 pb-16 md:grid-cols-2 md:pt-20 md:pb-25 xl:gap-20 xl:pb-32">
        <div>
          <h2 className="mb-3 md:mb-6">
            <span className="h2 xl:text-7xl">Contact Us</span>
          </h2>

          <p className="mb-9 leading-relaxed text-purple dark:text-lightPurple md:mb-16 2xl:text-lg 2xl:leading-relaxed">
            Have a question about Data Science Club? Fill out this form, send us
            a message on social media, or visit our office at{' '}
            <span className="font-semibold">MC 3034</span> and we&apos;ll be
            happy to answer your question!
          </p>

          <div className="lg:flex lg:flex-wrap lg:gap-5">
            <div className="relative rounded-full border border-lightPurple py-2.5 px-4 dark:border-purple lg:flex lg:items-center lg:gap-2">
              <p className="text-center text-black dark:text-white">
                Office Status: <span className="font-semibold">Open</span>
              </p>
              <div className="absolute top-1/2 right-5 h-2 w-2 -translate-y-1/2 rounded-full bg-darkGreen dark:bg-lightGreen lg:relative lg:right-0 lg:top-0 lg:translate-y-0 " />
            </div>

            {SOCIAL_BUTTONS.map((socialButton) => (
              <a
                href={socialButton.link}
                target="_blank"
                rel="noreferrer"
                key={socialButton.text}
                className="relative hidden items-center gap-2.5 rounded-full border border-lightPurple py-3 px-4 dark:border-purple lg:inline-flex"
              >
                <Image
                  src={socialButton.icon}
                  alt={socialButton.text}
                  className="no-select-or-drag filter-purple dark:filter-light-purple"
                />
                <p className="text-center text-black dark:text-white">
                  {socialButton.text}
                </p>
              </a>
            ))}
          </div>
        </div>

        <form
          name="contact"
          onSubmit={formik.handleSubmit}
          data-netlify="true"
          className="flex flex-col gap-5 lg:gap-6"
        >
          <div>
            <Input
              inputType="textinput"
              id="name"
              name="name"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              onFocus={() => setSubmitted(false)}
              value={formik.values.name}
              placeholder="Name"
            />

            {formik.touched.name && formik.errors.name ? (
              <p className="mt-3 text-sm text-red lg:mt-4 lg:text-base">
                {formik.errors.name}
              </p>
            ) : null}
          </div>

          <div>
            <Input
              inputType="textinput"
              id="email"
              name="email"
              type="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              onFocus={() => setSubmitted(false)}
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
              inputType="textarea"
              id="message"
              name="message"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              onFocus={() => setSubmitted(false)}
              value={formik.values.message}
              placeholder="Message"
            />

            {formik.touched.message && formik.errors.message ? (
              <p className="mt-3 text-sm text-red lg:mt-4 lg:text-base">
                {formik.errors.message}
              </p>
            ) : null}

            {submitted ? (
              <p className="mt-3 text-sm text-darkGreen dark:text-lightGreen lg:mt-4 lg:text-base">
                Success! We will email you back shortly.
              </p>
            ) : null}
          </div>

          <GradientBorder
            gradient="dark:white-to-light-purple black-to-purple"
            borderRadius="rounded-full"
            classes="transition-300 md:hover:-translate-y-0.5 md:self-start mt-10"
          >
            <Button
              bg="white-to-lighter-purple dark:black-to-dark-purple"
              border="rounded-full"
              px="px-9"
              py="py-3 md:py-4"
              font="gradient-text dark:white-to-light-purple black-to-purple font-medium md:text-lg"
              onClick={formik.handleSubmit}
              classes="text-center"
            >
              Submit
            </Button>
          </GradientBorder>
        </form>
      </div>
    </section>
  );
}
