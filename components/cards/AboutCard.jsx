import Image from "next/image"
import Card from "../UI/Card"

export default function AboutCard({ title, description, icon }) {
  return <Card key={title} borderRadius="rounded-2xl md:rounded-4xl">
            <div className="flex flex-col px-7 pt-7 pb-8 md:px-9 md:pt-9 md:pb-12">
              <Image
                src={icon}
                alt={title}
                className="no-select-or-drag dark:filter-light-purple filter-purple mb-7 w-9 self-end md:w-12"
              />
              <h3 className="mb-2 text-2xl font-bold text-black dark:text-white md:mb-3 md:text-3xl">
                {title}
              </h3>
              <p className="leading-relaxed text-purple dark:text-lightPurple">
                {description}
              </p>
            </div>
          </Card>
}
