import { useContext, useEffect, useState } from "react";
import { getDataOnce } from "../lib/firebase";
import SEO from "../components/other/SEO";
import Landing from "../components/sections/Landing";
import About from "../components/sections/About";
import Milestones from "../components/sections/Milestones";
import UpcomingEventsCarousel from "../components/sections/UpcomingEventsCarousel";
import ResourcesCarousel from "../components/sections/ResourcesCarousel";
import PastEventsCarousel from "../components/sections/PastEventsCarousel";
import MailingList from "../components/sections/MailingList";
import Contact from "../components/sections/Contact";
import Footer from "../components/navigation/Footer";
import FirebaseContext from "../store/firebase-context";


export default function Home({
  upcomingEvents,
  pastEvents,
  resources,
  officeStatus,
}) {
  const firebaseContext = useContext(FirebaseContext);
  const [officeStatusState, setOfficeStatus] = useState(officeStatus);

  useEffect(() => {
    if (firebaseContext.officeStatus) {
      setOfficeStatus(firebaseContext.officeStatus);
    }
  }, [firebaseContext.officeStatus]);

  return (
    <>
      <SEO
        title="UWaterloo Data Science Club"
        description="Inspiring the data science leaders of the future by building an inclusive community at the University of Waterloo to bridge the gap between academics and the industry."
        keywords="University of Waterloo,Data Science,University of Waterloo Data Science Club,Waterloo Data Science,UWDSC"
      />
      <Landing officeStatus={officeStatusState}/>
      <About />
      <Milestones />
      <UpcomingEventsCarousel fetchedUpcomingEvents={upcomingEvents} />
      <ResourcesCarousel showTitle={true} fetchedResources={resources} />
      <PastEventsCarousel fetchedPastEvents={pastEvents} />
      <MailingList />
      <Contact officeStatus={officeStatusState} />
      <Footer />
    </>
  );
}

export async function getStaticProps() {
  const upcomingEvents = await getDataOnce("upcomingEvents");
  const pastEvents = await getDataOnce("pastEvents");
  const resources = await getDataOnce("resources");
  const officeStatus = await getDataOnce("officeStatus");

  return {
    props: {
      upcomingEvents,
      pastEvents,
      resources,
      officeStatus,
    },
    revalidate: 1,
  };
}
