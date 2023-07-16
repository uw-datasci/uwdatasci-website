import { useState, useEffect } from 'react';
import { ref, onValue } from 'firebase/database';
import { db } from '../../lib/firebase';
import decode from '../../utils/decode';

import { DEFAULT_EVENT } from '../../constants/dashboard';
import EditableTable from '../../components/UI/EditableTable';

const dbName = 'events';

function processEvents(events) {
  const remappedEvents = Object.keys(events)
    .map((key) => {
      return { idx: key, ...events[key] };
    })
    .sort((a, b) => {
      if (a.time === '<EVENT TIME>') {
        return 1;
      }
      if (b.time === '<EVENT TIME>') {
        return -1;
      }
      const aTime = new Date(a.time.split('TO')[1]);
      const bTime = new Date(b.time.split('TO')[1]);
      return aTime > bTime ? -1 : 1;
    });
  return remappedEvents;
}

export default function Events({ events }) {
  const [listOfEvents, setListOfEvents] = useState();

  useEffect(() => {
    const eventsRef = ref(db, dbName);
    const unsubscribe = onValue(eventsRef, (snapshot) => {
      const encodedEvents = snapshot.val();
      if (!encodedEvents) return;
      setListOfEvents(processEvents(decode(encodedEvents)));
    });
    return unsubscribe;
  }, []);

  const eventHeaders = [
    { title: 'Title', classes: 'min-w-[10rem]', key: 'title' },
    { title: 'Description', classes: 'min-w-[30rem]', key: 'description' },
    { title: 'Time', classes: 'min-w-[10rem]', key: 'time' },
    { title: 'Location', classes: 'min-w-[10rem]', key: 'location' },
    { title: 'Image', classes: 'min-w-[10rem]', key: 'image' },
    { title: 'Link', classes: 'max-w-[30rem]', key: 'link' },
  ];

  return (
    <EditableTable
      tableTitle='Events'
      dbName={dbName}
      dataList={listOfEvents}
      defaultData={DEFAULT_EVENT}
      headers={eventHeaders}
    />
  );
}
