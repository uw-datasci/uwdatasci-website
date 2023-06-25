import { useState, useEffect } from "react";
import { ref, onValue } from "firebase/database";
import { getDataOnce, db } from "../../lib/firebase";
import decode from "../../utils/decode";

import { DEFAULT_MEMBER } from "../../constants/team";
import EditableTable from "../../components/UI/EditableTable";

const dbName = "people";

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

export default function Team({ team }) {
  const [listOfMembers, setListOfMembers] = useState();

  useEffect(() => {
    const membersRef = ref(db, dbName);
    const unsubscribe = onValue(membersRef, (snapshot) => {
      const encodedMembers = snapshot.val();
      setListOfMembers(process(decode(encodedMembers)));
    });
    return unsubscribe;
  }, []);

  const memberHeaders = [
    { title: "Name", classes: "min-w-[10rem]", key: "name" },
    { title: "Position", classes: "min-w-[30rem]", key: "title" },
    { title: "Subteam", classes: "max-w-[30rem]", key: "subteam" },
    { title: "Image", classes: "min-w-[10rem]", key: "image" },
    { title: "LinkedIn", classes: "max-w-[30rem]", key: "linkedin" },
  ];

  return (
    <EditableTable
      tableTitle="Team"
      dataList={listOfMembers}
      defaultData={DEFAULT_MEMBER}
      dbName={dbName}
      headers={memberHeaders}
    />
  );
}
