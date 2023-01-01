import TeamGrid from '../components/sections/TeamGrid';
import Footer from '../components/navigation/Footer;';

export default function Team() {
  return (
    <>
      <h1 className="mb-12 text-center md:mb-16 xl:mb-20">
        <span className="h1">Our Team</span>
      </h1>
      <TeamGrid />
      <Footer />
    </>
  );
}
