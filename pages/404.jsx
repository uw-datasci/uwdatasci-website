import { useRouter } from 'next/router';
import GradientBorder from '../components/UI/GradientBorder';
import Button from '../components/UI/Button';

export default function Error404() {
  const router = useRouter();

  return (
    <div className="absolute top-0 left-0 h-screen w-screen">
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <h1 className="mb-12 text-[96px] font-bold xs:text-[128px] lg:text-[196px]">
          <span className="gradient-text black-to-purple dark:white-to-light-purple">
            404
          </span>
        </h1>
        <div className="flex justify-center">
          <GradientBorder
            onClick={() => router.push('/')}
            gradient="dark:white-to-light-purple black-to-purple"
            borderRadius="rounded-full"
            classes="transition-300 md:hover:-translate-y-0.5"
          >
            <Button
              bg="white-to-lighter-purple dark:black-to-dark-purple"
              border="rounded-full"
              px="px-7 lg:px-9"
              py="py-3 md:py-4"
              font="gradient-text dark:white-to-light-purple black-to-purple font-medium md:text-lg lg:text-xl"
            >
              Return Home
            </Button>
          </GradientBorder>
        </div>
      </div>
    </div>
  );
}
