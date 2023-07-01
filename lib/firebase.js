import { initializeApp } from 'firebase/app';
import { child, get, getDatabase, ref, set, remove, push } from "firebase/database";
import decode from '../utils/decode';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: 'uwdsc-website.firebaseapp.com',
  projectId: 'uwdsc-website',
  storageBucket: 'uwdsc-website.appspot.com',
  messagingSenderId: '807003779228',
  appId: '1:807003779228:web:7823486f9a9c7f54d8fd59',
  measurementId: 'G-KP4TETWP44',
};

const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);
export const auth = getAuth(app);

export async function getDataOnce(path) {
  const dbRef = ref(db);

  let data;

  await get(child(dbRef, path)).then((snapshot) => {
    if (snapshot.exists()) {
      data = snapshot.val();
    }
  });

  return decode(data);
}

export async function modifyData(dbName, id, changedData) {
  set(ref(db, `${dbName}/${id}`), changedData).then((r) => {
    console.log(r);
  });
}

export async function createData(dbName, newData) {
  const dataListRef = ref(db, dbName);
  const newDataRef = push(dataListRef);
  set(newDataRef, newData).then((r) => {
    console.log(r);
  });
}

export async function removeData(dbName, id) {
  remove(ref(db, `${dbName}/${id}`)).then((r) => {
    console.log(r);
  });
}
