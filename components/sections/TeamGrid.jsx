import MemberCard from '../cards/MemberCard';
import { TEAM } from '../../constants/data';

export default function TeamGrid() {
  return (
    <section className="section m-horizontal grid gap-25 text-center md:gap-40">
      {TEAM.map((group) => (
        <div key={group.subteam}>
          <h2 className="mb-8 text-4xl font-semibold text-purple dark:text-lightPurple md:mb-12 md:text-5xl xl:text-6xl">
            {group.subteam}
          </h2>
          <div className="flex flex-wrap justify-center gap-12 xl:gap-16">
            {group.members.map((member) => (
              <MemberCard
                name={member.name}
                position={member.position}
                socials={member.socials}
                image={member.image}
                key={member.name}
              />
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
