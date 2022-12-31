export default function Contact() {
  return (
    <section className="white-to-lighter-purple dark:black-to-dark-purple">
      <div className="m-horizontal pt-9 pb-16">
        <h2 className="mb-3">
          <span className="h2">Contact Us</span>
        </h2>
        <p className="mb-9 leading-relaxed text-purple dark:text-lightPurple">
          Have a question about Data Science Club? Fill out this form, send us a
          message on social media, or visit our office at{' '}
          <span className="font-semibold">MC 3034</span> and we&apos;ll be happy
          to answer your question!
        </p>
        <div className="rounded-full border border-purple">
          <p className="text-center text-black dark:text-white">
            Office Status: <span className="font-semibold">Open</span>
          </p>
        </div>
      </div>
    </section>
  );
}
