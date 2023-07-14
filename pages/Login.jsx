import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { CookiesProvider } from 'react-cookie';
import { useCookies } from 'react-cookie';
import Button from '../components/UI/Button';

export default function Login() {
  const [gsiScriptLoaded, setGsiScriptLoaded] = useState(false);
  const [cookie,  removeCookie] = useCookies(['valueName']);
  const [user, setUser] = useState(undefined); 
  const router = useRouter();

  const handleCredentialResponse = async (response) => {
    // user is signed in
    if (response.clientId && response.credential) {
      setUser(response); // Store the login response
      router.push("/execs");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("loginState"); // Remove the stored login state
    setUser(undefined);
    removeCookie('g_state');
    router.push("/#")
  };

  useEffect(() => {
    const initializeGoogleSignIn = () => {
      if (window.google) {
        setGsiScriptLoaded(true);
        // Initialize Login
        window.google.accounts.id.initialize({
          client_id:
            "647811294563-fbupa9ttpf1tssijj88iivag2bea8led.apps.googleusercontent.com",
          callback: handleCredentialResponse,
        });
      }
    };

    const storedLoginState = localStorage.getItem("loginState");
    if (storedLoginState) {
      setUser(JSON.parse(storedLoginState));
    }

    // Load Google Sign-In from JS Library
    const script = document.createElement("script");
    script.src = "https://accounts.google.com/gsi/client";
    script.async = true;
    script.onload = initializeGoogleSignIn;
    document.body.appendChild(script);

    return () => {
      window.google?.accounts.id.cancel();
    };
  }, []);

  const handleClick = () => {
    if (!user) {
      if (window.google && gsiScriptLoaded) {
        removeCookie('g_state');
        window.google.accounts.id.prompt();
      }
    } 
    else {
      router.push("../execs");
    }
    // else {
    //   handleLogout();
    // }
  };

  useEffect(() => {
    if (user) {
      localStorage.setItem("loginState", JSON.stringify(user)); // Store the login state
    }
  }, [user]);

  return (
    // <Button
    //   bg="bg-white dark:bg-black"
    //   border="rounded-full border border-purple dark:border-lightPurple"
    //   py="py-2.5"
    //   font="text-black dark:text-white"
    //   icon=
    //   iconAlt="open link"
    //   iconClasses="no-select-or-drag w-5 absolute right-4 top-1/2 -translate-y-1/2 filter-black dark:filter-light-purple"
    //   classes="text-center"
    //   onClick={handleClick}
    // >
    //   QR Scanner
    // </Button>
      <button
      className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
      onClick={handleClick}
      >
        QR
        {/* {user ? "Logout" : "Login"} */}
      </button>
  );
}