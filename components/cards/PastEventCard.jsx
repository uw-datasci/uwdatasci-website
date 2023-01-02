import Image from 'next/image';
import Card from '../UI/Card';

export default function PastEventCard({ title, image }) {
  return (
    <Card
      borderRadius="rounded-2xl md:rounded-4xl"
      classes="w-[300px] md:w-[380px] h-full"
    >
      <Image
        src={image}
        alt={title}
        width={380}
        height={380}
        className="no-select-or-drag aspect-[2/1] w-full object-cover"
      />

      <div className="px-5 pt-3 pb-8 md:px-7 md:pt-4 md:pb-10">
        <h3 className="text-2xl font-bold text-black dark:text-white md:text-3xl">
          {title}
        </h3>
      </div>
    </Card>
  );
}
