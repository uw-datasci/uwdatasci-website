import { createContext, useEffect, useState } from 'react';
import { ref, onValue } from 'firebase/database';
import { db } from '../lib/firebase';
import decode from '../utils/decode';

const FirebaseContext = createContext();

export default FirebaseContext;

export function FirebaseContextProvider({ children }) {
  const [upcomingEvents, setUpcomingEvents] = useState([]);
  const [pastEvents, setPastEvents] = useState([]);
  const [resources, setResources] = useState([]);
  const [recordings, setRecordings] = useState([]);
  const [team, setTeam] = useState({});
  const [officeStatus, setOfficeStatus] = useState('no');

  useEffect(() => {
    const eventsRef = ref(db, 'upcomingEvents');

    const unsubscribe = onValue(eventsRef, (snapshot) => {
      const encodedUpcomingEvents = snapshot.val();

      setUpcomingEvents(decode(encodedUpcomingEvents));
    });

    return unsubscribe;
  }, []);

  useEffect(() => {
    const eventsRef = ref(db, 'pastEvents');

    const unsubscribe = onValue(eventsRef, (snapshot) => {
      const encodedPastEvents = snapshot.val();

      setPastEvents(decode(encodedPastEvents));
    });

    return unsubscribe;
  }, []);

  useEffect(() => {
    const resourcesRef = ref(db, 'resources');

    const unsubscribe = onValue(resourcesRef, (snapshot) => {
      const encodedResources = snapshot.val();

      setResources(decode(encodedResources));
    });

    return unsubscribe;
  }, []);

  useEffect(() => {
    const recordingsRef = ref(db, 'recordings');

    const unsubscribe = onValue(recordingsRef, (snapshot) => {
      const encodedRecordings = snapshot.val();

      setRecordings(decode(encodedRecordings));
    });

    return unsubscribe;
  }, []);

  useEffect(() => {
    const teamRef = ref(db, 'team');

    const unsubscribe = onValue(teamRef, (snapshot) => {
      const encodedTeam = snapshot.val();

      setTeam(decode(encodedTeam));
    });

    return unsubscribe;
  }, []);

  useEffect(() => {
    const officeStatusRef = ref(db, 'officeRef');

    const unsubscribe = onValue(officeStatusRef, (snapshot) => {
      const officeStatus = snapshot.val();

      setOfficeStatus(officeStatus);
    });

    return unsubscribe;
  }, []);

  return (
    <FirebaseContext.Provider
      value={{
        upcomingEvents,
        pastEvents,
        resources,
        recordings,
        team,
        officeStatus,
      }}
    >
      {children}
    </FirebaseContext.Provider>
  );
}
