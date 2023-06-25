import { useState, useEffect } from "react";
import { ref, onValue } from "firebase/database";
import { getDataOnce, db } from "../../lib/firebase";
import decode from "../../utils/decode";

import { DEFAULT_RESOURCE } from "../../constants/resources";
import EditableTable from "../../components/UI/EditableTable";

const dbName = "resources";

function processResources(resources) {
  const remappedresources = Object.keys(resources)
    .map((key) => {
      return { idx: key, ...resources[key] };
    })
    .sort((a, b) => {
      return a.title > b.title ? -1 : 1;
    });
  return remappedresources;
}

export default function Resources({ resources }) {
  const [listOfResources, setListOfResources] = useState();

  useEffect(() => {
    const resourcesRef = ref(db, "resources");
    const unsubscribe = onValue(resourcesRef, (snapshot) => {
      const encodedResources = snapshot.val();
      setListOfResources(processResources(decode(encodedResources)));
    });
    return unsubscribe;
  }, []);

  const resourceHeaders = [
    { title: "Title", classes: "min-w-[10rem]", key: "title" },
    { title: "Description", classes: "min-w-[30rem]", key: "description" },
    { title: "Link", classes: "max-w-[30rem]", key: "link" },
  ];

  return (
    <EditableTable
      tableTitle="Resources"
      dataList={listOfResources}
      defaultData={DEFAULT_RESOURCE}
      dbName={dbName}
      headers={resourceHeaders}
    />
  );
}
