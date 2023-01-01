const MILESTONES = [
  { number: 400, text: 'Members' },
  { number: 100, text: 'Workshops' },
  { number: 100, text: 'Recruiting Events' },
];

export default function Milestones() {
  return (
    <section className="section white-to-lighter-purple dark:black-to-dark-purple border border-x-0 border-purple pt-12 pb-16 lg:pb-18 lg:pt-14">
      <div className="mx-5 flex max-w-[1042px] flex-col items-center gap-16 xs:mx-7 sm:mx-9 sm:flex-row sm:justify-between xl:mx-16 2xl:mx-auto">
        {MILESTONES.map((milestone) => (
          <div className="text-center" key={milestone.text}>
            <p className="mb-3 text-7xl font-bold xl:mb-4 xl:text-9xl">
              <span className="dark:white-to-light-purple gradient-text black-to-purple">
                {milestone.number}+
              </span>
            </p>
            <p className="text-lg font-medium text-black dark:text-white xl:text-xl">
              {milestone.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
