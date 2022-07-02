import firebase from 'firebase';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useContext, useEffect } from 'react';

import { Button } from '../components/common/parts/Button';
import { AuthContext } from '../lib/auth/AuthProvider';

import type { NextPage } from 'next';

const Signin: NextPage = () => {
  const router = useRouter();
  const { currentUser } = useContext(AuthContext);
  useEffect(() => {
    currentUser && router.push('/');
  }, [currentUser]);

  const handleOnClick = async () => {
    if (!currentUser) {
      const res = await firebase.auth().signInAnonymously();
      console.log(res);
    }
  };

  return (
    <div className="w-screen h-screen bg-white font-family-karla">
      <div className="grid place-items-center mt-12 md:px-24 md:pt-0 lg:px-32">
        <Image src="/icon.png" width={250} height={200} />
        <p className="mt-6 text-xl font-bold text-center">アカウントにログイン</p>
        <Link
          href={`https://slack.com/oauth/v2/authorize?user_scope=channels:write,chat:write,team:read,users:read&client_id=${process.env.SLACK_CLIENT_ID}&state=${router.pathname}`}
        >
          <a>Slackでサインイン</a>
        </Link>
        <Button
          variant="solid-white"
          className="py-4 mt-7 w-72 sm:w-80"
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
