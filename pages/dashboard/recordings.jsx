import { useState, useEffect } from "react";
import { ref, onValue } from "firebase/database";
import { createData, db } from "../../lib/firebase";
import decode from "../../utils/decode";

import { DEFAULT_RECORDING } from "../../constants/dashboard";
import EditableTable from "../../components/UI/EditableTable";

const dbName = "rerecording";

function process(data) {
  const remappedData = Object.keys(data)
    .map((key) => {
      return { idx: key, ...data[key] };
    })
    .sort((a, b) => {
      return a.title > b.title ? -1 : 1;
    });
  return remappedData;
}

export default function Recordings() {
  const [listOfRecordings, setListOfRecordings] = useState();

  useEffect(() => {
    const recordingsRef = ref(db, dbName);
    const unsubscribe = onValue(recordingsRef, (snapshot) => {
      const encodedRecordings = snapshot.val();
      setListOfRecordings(process(decode(encodedRecordings)));
    });
    return unsubscribe;
  }, []);

  const recordingHeaders = [
    { title: "Title", classes: "min-w-[10rem]", key: "title" },
    { title: "Description", classes: "max-w-[30rem]", key: "description" },
    { title: "Image", classes: "min-w-[10rem]", key: "image" },
    { title: "Link", classes: "max-w-[30rem]", key: "link" },
  ];

  return (
    <>
      <EditableTable
        tableTitle="Recordings"
        dataList={listOfRecordings}
        defaultData={DEFAULT_RECORDING}
        dbName={dbName}
        headers={recordingHeaders}
      />
    </>
  );
}
