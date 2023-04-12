import Card from "components/Card";
import { useCurrentUser, useLogout } from "features/authentication";
import { Button } from "components";
import Head from "next/head";
import { useState, useEffect } from "react";
const Home = () => {
  const { user } = useCurrentUser();
  const logout = useLogout();

  useEffect(() => {
    window.OneSignal = window.OneSignal || [];
    OneSignal.push(function () {
      OneSignal.init({
        appId: "7f811b94-c90f-480e-9d8e-dcaaabdf1289",
        notifyButton: {
          enable: true,
        },

        allowLocalhostAsSecureOrigin: true,
      });
    });

    return () => {
      window.OneSignal = undefined;
    };
  }, []);

  return (
    <>
      <Head>
        <title>Title mmm of the website here</title>
        <script
          src="https://cdn.onesignal.com/sdks/OneSignalSDK.js"
          async
        ></script>
      </Head>
      <Card>
        <h1 className="text-3xl font-bold underline text-blue">Hello world!</h1>
        <h1 className="text-3xl font-bold underline text-blue-light">
          Hello world!
        </h1>
        <h1 className="text-3xl font-bold underline text-blue-dark">
          Hello world!
        </h1>
        <Button onClick={logout}>Logout</Button>
        <h1 className="text-3xl font-bold underline text-blue-900">
          Hello world!
        </h1>
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
        <h1 className="text-3xl font-bold underline">Hello world!????</h1>
      </Card>
    </>
  );
};

Home.mainLayoutProps = {
  title: "Talents Valley Home",
  pageDescription: "Home page description",
};

export default Home;
