import Link from 'next/link';

export default function Logo() {
  return (
    <Link href="/#">
      <div>
        <p className="mb-2.5 text-lg font-extrabold leading-4.5">
          <span className="black-to-purple dark:white-to-light-purple gradient-text">
            UW
            <br />
            DSC.
          </span>
        </p>
        <div className="black-to-purple dark:white-to-light-purple h-0.5 w-4" />
      </div>
    </Link>
  );
}
