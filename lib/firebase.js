import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';
import { initializeAppCheck, ReCaptchaV3Provider } from 'firebase/app-check';

const firebaseConfig = {
  apiKey: 'AIzaSyCf9WjkRpCZKz6yjt2aHycB-1hUqfn-2mI',
  authDomain: 'uwdsc-website.firebaseapp.com',
  projectId: 'uwdsc-website',
  storageBucket: 'uwdsc-website.appspot.com',
  messagingSenderId: '807003779228',
  appId: '1:807003779228:web:7823486f9a9c7f54d8fd59',
  measurementId: 'G-KP4TETWP44',
};

const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);

// See this: https://firebase.google.com/docs/app-check/web/debug-provider?authuser=0&hl=en#localhost
global.FIREBASE_APPCHECK_DEBUG_TOKEN = true;

const appCheck = initializeAppCheck(app, {
  provider: new ReCaptchaV3Provider('6Le_MMEjAAAAACD-E6soHboAvpRWPGPvsbqlPIWn'),

  isTokenAutoRefreshEnabled: true,
});
