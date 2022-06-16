import React, { useContext, useEffect } from "react";
import type { NextPage } from "next";
import { AuthContext, UserData } from "../lib/auth/AuthProvider";
import { useRouter } from "next/router";
import { Button } from "../components/common/parts/Button";
import { db } from "../lib/firebase"; 
import Image from "next/image";

import firebase from "firebase";



const Signin: NextPage = () => {
  const router = useRouter();
  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    currentUser && router.push("/");
  }, [currentUser]);

  const handleOnClick = async () => {
    if(!currentUser) {
      const res = await firebase.auth().signInAnonymously();
      console.log(res);
    }
  };

  return (
    <div className="w-screen h-screen bg-white font-family-karla">
      <div className="grid place-items-center mt-12 md:pt-0 md:px-24 lg:px-32">
        <Image src="/icon.png" width={250} height={200} />
        <p className="text-center text-xl font-bold mt-6">
          アカウントにログイン
        </p>
        <Button
          variant="solid-white"
          className="py-4 w-72 sm:w-80 mt-7"
          onClick={() => {
            handleOnClick();
          }}
        >
          <div className="flex">
            <span>Sign in with Slack</span>
          </div>
        </Button>
      </div>
    </div>
  );
};
export default Signin;
