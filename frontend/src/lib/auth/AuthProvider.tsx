import firebase from 'firebase/app';
import { useRouter } from 'next/router';
import { FC, createContext, useEffect, useState } from 'react';

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

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      setCurrentUser(user);
      if (user) {
        // ログイン済みのユーザー情報があるかをチェック
        const userDoc = await firebase.firestore().doc(`users/${user.uid}`).get();
        if (!userDoc.exists) {
          //slack認証のレスポンスを待つ

          //docがなければ作る
          userDoc.ref.set({
            name: '',
            avatarUrl: '',
            created_at: firebase.firestore.FieldValue.serverTimestamp(),
          });
        }
      } else {
        router.push('/signin');
      }
    });
  }, []);

  return <AuthContext.Provider value={{ currentUser }}>{children}</AuthContext.Provider>;
};

export { AuthContext, AuthProvider };
