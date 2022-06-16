import firebase from "firebase/app";
import { FC, createContext, useEffect, useState } from "react";
import { auth, db } from "../firebase";
import { useRouter } from "next/router";


 
type AuthContextProps = {
  currentUser: firebase.User | null | undefined;
};

const AuthContext = createContext<AuthContextProps>({ currentUser: undefined });

type Props = {
  children: any;
};



type UserDataProps = {
  documentID: db.collection.doc.id | undefined;
  Name: string | undefined;
  Place_born: string | undefined;
  Place_live: string | undefined; 
  Hobby: string | undefined;
  Sentence: string | undefined;
}; 

const UserData = createContext<UserDataProps>({
  documentID: undefined,
  Name: undefined,
  Place_born: undefined,
  Place_live: undefined, 
  Hobby: undefined,
  Sentence: undefined,
}); 

 


const AuthProvider: FC<Props> = ({ children }) => {
  const router = useRouter();
  const [currentUser, setCurrentUser] = useState<
    firebase.User | null | undefined
  >(undefined);

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      setCurrentUser(user);
      if (user) {
        // ログイン済みのユーザー情報があるかをチェック
        const userDoc = await firebase
          .firestore()
          .doc(`user/${user.uid}`)
          .get();
        if (!userDoc.exists) {
          //docがなければ作る
          userDoc.ref.set({
            name: "",
            avatarUrl: "",
            created_at: firebase.firestore.FieldValue.serverTimestamp(),
          });


          //UserDataを格納するFirevbaseのdocumentID取得 ここもいずれバックエンドに投げるように変更
          //データベースない場合
          const collection = db.collection('sample_data')
          const id = collection.doc().id
          UserData.documentID = id;
          //とりあえずはsample
          UserData.documentID = "sample";
          console.log(UserData.documentID);
          UserData.Name = undefined;  
          router.push("/form");

        }else{
          //UserDataを格納するFirevbaseのdocumentID取得 ここもいずれバックエンドに投げるように変更
          //既にデータベースがある場合
          const collection = db.collection('sample_data')
          const id = collection.doc().id
          UserData.documentID = id;
          //とりあえずはsample
          UserData.documentID = "sample";
          console.log(UserData.documentID);

        }

        
        
      } else {
        router.push("/signin");
      }
    });
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider, UserData};
