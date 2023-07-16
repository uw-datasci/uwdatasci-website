import { getDataOnce } from '../lib/firebase';
import SEO from '../components/other/SEO';
import TeamGrid from '../components/sections/TeamGrid';
import Footer from '../components/navigation/Footer';

export default function Team({ team }) {
  return (
    <>
      <SEO
        title='Our Team | UWaterloo Data Science Club'
        description="Meet the executives behind the University of Waterloo's Data Science Club."
        keywords=''
      />
      <h1 className='mb-12 text-center md:mb-16 xl:mb-20'>
        <span className='h1'>Our Team</span>
      </h1>
      <TeamGrid team={team} />
      <Footer />
    </>
  );
}

export async function getServerSideProps() {
  const team = await getDataOnce('people');

  return {
    props: {
      team: Object.values(team),
    },
  };
}
