import firebase from 'firebase/app';
import { useRouter } from 'next/router';
import { FC, createContext, useEffect, useState, Fragment } from 'react';

import { auth } from '../firebase';

type AuthContextProps = {
  currentUser: firebase.User | null | undefined;
};

const AuthContext = createContext<AuthContextProps>({ currentUser: undefined });

type Props = {
  children: any;
};

const AuthProvider: FC<Props> = ({ children }) => {
  const router = useRouter();
  const [currentUser, setCurrentUser] = useState<firebase.User | null | undefined>(undefined);
  const [authCompleted, setAuthCompleted] = useState(false);

  useEffect(() => {
    (async () => {
      const queryPrams = new URLSearchParams(window.location.search);
      const token = queryPrams.get('t');
      console.log(`tokenだよーー！::${token}`);
      if (token) {
        window.history.replaceState(
          undefined,
          window.document.title,
          window.location.href.replace(window.location.search, ''),
        );
        await firebase.auth().signInWithCustomToken(token);
      }

      auth.onAuthStateChanged((user) => {
        setAuthCompleted(true);
        setCurrentUser(user);

        // onAuthStateChangedが呼ばれるまではLoadingを表示する
        if (!authCompleted) {
          return <div>Loading...</div>;
        }

        if (user) {
          return (
            <Fragment>
              <h1>Sign in with Slack Example</h1>
              <h2>Welcome!</h2>
              <div>Login as {user.uid}</div>
              <button onClick={() => firebase.auth().signOut()}>Sign out</button>
            </Fragment>
          );
        } else {
          return (
            <Fragment>
              <h1>Sign in with Slack Example</h1>
              <a
                href={`https://slack.com/oauth/authorize?scope=team:read,users:read&client_id=${process.env.REACT_APP_SLACK_CLIENT_ID}&state=${window.location.href}`}
              >
                <img
                  alt="Sign in with Slack"
                  height="40"
                  width="172"
                  src="https://platform.slack-edge.com/img/sign_in_with_slack.png"
                />
              </a>
            </Fragment>
          );
        }
      });
    })();

    // auth.onAuthStateChanged(async (user) => {
    //   setCurrentUser(user);
    //   if (user) {
    //     // ログイン済みのユーザー情報があるかをチェック
    //     const userDoc = await firebase.firestore().doc(`users/${user.uid}`).get();
    //     if (!userDoc.exists) {
    //       //slack認証のレスポンスを待つ

    //       //docがなければ作る
    //       userDoc.ref.set({
    //         name: '',
    //         avatarUrl: '',
    //         created_at: firebase.firestore.FieldValue.serverTimestamp(),
    //       });
    //     }
    //   } else {
    //     router.push('/signin');
    //   }
    // });
  }, []);

  return <AuthContext.Provider value={{ currentUser }}>{children}</AuthContext.Provider>;
};

export { AuthContext, AuthProvider };
