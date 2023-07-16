import MemberCard from '../cards/MemberCard';
import echo from '../../public/img/graphics/echo-profile.png';

const ORDER = [
  'Presidents',
  'Advisors',
  'Business',
  'Design',
  'Development',
  'Education',
  'Growth',
  'Internals',
  'Logistics',
  'Podcast',
  'Social Media',
];

export default function TeamGrid({ team }) {
  return (
    <section className='section m-horizontal grid gap-25 text-center md:gap-40'>
      {ORDER.map((subteam) => {
        const subteamMembers = team.filter(
          (member) => member.subteam.toLowerCase() === subteam.toLowerCase()
        );

        return (
          <div key={subteam}>
            <h2 className='mb-8 text-4xl font-semibold text-purple dark:text-lightPurple md:mb-12 md:text-5xl xl:text-6xl'>
              {subteam}
            </h2>
            <div className='flex flex-wrap justify-center gap-12 xl:gap-16'>
              {subteamMembers.map((member) => (
                <MemberCard
                  name={member.name}
                  position={member.title}
                  image={member.image ? member.image : echo}
                  socials={{
                    website: member.website,
                    email: member.email ? `mailto:${member.email}` : undefined,
                    instagram: member.instagram,
                    linkedin: member.linkedin,
                  }}
                  key={member.name}
                />
              ))}
            </div>
          </div>
        );
      })}
    </section>
  );
}
