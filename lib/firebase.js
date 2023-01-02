import { initializeApp } from 'firebase/app';
import { child, get, getDatabase, ref } from 'firebase/database';
import decode from '../utils/decode';
// import { initializeAppCheck, ReCaptchaV3Provider } from 'firebase/app-check';

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: 'uwdsc-website.firebaseapp.com',
  projectId: 'uwdsc-website',
  storageBucket: 'uwdsc-website.appspot.com',
  messagingSenderId: '807003779228',
  appId: '1:807003779228:web:7823486f9a9c7f54d8fd59',
  measurementId: 'G-KP4TETWP44',
};

const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);

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