import { useForm} from 'react-hook-form';
import { useState } from 'react';
import { createContext } from "react";
import { db } from "../../lib/firebase"; 
import { Button } from "../../components/common/parts/Button"; 
import { useRouter } from "next/router";
import firebase from "firebase";
import { UserData } from "../../lib/auth/AuthProvider";



type InputData = {
  Name: string;
  Place_born: string;
  Place_live: string; 
  Hobby: string;
  Sentence: string;
}; 

  
 
export default function Input_Form() {
    const router = useRouter();
    const {
      register,
      handleSubmit,
      watch,
      formState: { errors }
    } = useForm<InputData>();

    
    console.log(UserData.documentID);
     
    (async () => {
      try {
        const userRef = db.collection('sample_data').doc(UserData.documentID) 
        const userDoc = await userRef.get()
        if (userDoc.exists) {
          //console.log('doc.id:',userDoc.id)
          //console.log(userDoc.data()) 
           
          if(UserData.Name != undefined){
            UserData.Name = userDoc.get('Name');
            UserData.Place_born = userDoc.get('Place_born');
            UserData.Place_live = userDoc.get('Place_live');
            UserData.Hobby = userDoc.get('Hobby');
            UserData.Sentence = userDoc.get('Sentence');
          }
          console.log('Name:', watch('Name'), UserData.Name);  
          console.log('Place_born:', watch('Place_born'), UserData.Place_born);    
          console.log('Place_live:', watch('Place_live'), UserData.Place_live);  
          console.log('Hobby:', watch('Hobby'),UserData.Hobby);    
          console.log('Sentence:', watch('Sentence'),UserData.Sentence); 


        } else {
          console.log('No such document!')
        }
        //await db.app.delete()
      } catch (err) {
        console.log(`Error!: ${JSON.stringify(err)}`)
      } 
    })()
    
      
    const handleOnClick = async () => { 
        
        (async () => {
          console.log('Name:', watch('Name'), UserData.Name);  
          console.log('Place_born:', watch('Place_born'));    
          console.log('Place_live:', watch('Place_live'));  
          console.log('Hobby:', watch('Hobby'));    
          console.log('Sentence:', watch('Sentence'));

          UserData.Name = watch('Name');
          UserData.Place_born = watch('Place_born');
          UserData.Place_live = watch('Place_live');
          UserData.Hobby = watch('Hobby');
          UserData.Sentence = watch('Sentence');
 


          //バックエンドにリクエスト送信に変更
          try {
            const userRef = db.collection('sample_data').doc(UserData.documentID)
            await userRef.update({
                Name: watch('Name'),
                Place_born: watch('Place_born'),
                Place_live: watch('Place_live'),
                Hobby: watch('Hobby'),
                Sentence: watch('Sentence'),
                createdAt: firebase.firestore.FieldValue.serverTimestamp(),
                updatedAt: firebase.firestore.FieldValue.serverTimestamp(),
            })
            const userDoc = await userRef.get()
            console.log(userDoc.data())

          } catch (err) {
            console.log(`Error: ${JSON.stringify(err)}`)
          }
          

          //Firebaseに書き込み
          /*
          if(documenID == "-1"){
            const collection = db.collection('sample_data')
            const id = collection.doc().id
            documenID = id;
            console.log(documenID); 
            
            try {
              const userRef = db.collection('sample_data').doc(documenID)
              await userRef.set({
                  Name: watch('Name'),
                  Place_born: watch('Place_born'),
                  Place_live: watch('Place_live'),
                  Hobby: watch('Hobby'),
                  Sentence: watch('Sentence'),
                  createdAt: firebase.firestore.FieldValue.serverTimestamp(),
                  updatedAt: firebase.firestore.FieldValue.serverTimestamp(),
              })
            } catch (err) {
              console.log(`Error: ${JSON.stringify(err)}`)
            }
          
          }else{
            console.log(documenID);
            try {
              console.log('update_file');
              const userRef = db.collection('sample_data').doc(documenID)
              await userRef.update({
                  Name: watch('Name'),
                  Place_born: watch('Place_born'),
                  Place_live: watch('Place_live'),
                  Hobby: watch('Hobby'),
                  Sentence: watch('Sentence'),
                  createdAt: firebase.firestore.FieldValue.serverTimestamp(),
                  updatedAt: firebase.firestore.FieldValue.serverTimestamp(),
              })
  
              const userDoc = await userRef.get()
              console.log(userDoc.data())
  
            } catch (err) {
              console.log(`Error: ${JSON.stringify(err)}`)
            }
            
          }
          */
          
          await alert("送信完了 (今は直接Firebaseを書き換えてる，バックエンドにリクエスト送信に変更)"+"\n"+
                      "送信内容\n"+
                      "sample_data/"+UserData.documentID+"を書き換え\n"+
                      "Name: "+watch('Name')+"\n"+
                      "Place_born: "+watch('Place_born')+"\n"+
                      "Place_live: "+watch('Place_live')+"\n"+
                      "Hobby: "+watch('Hobby')+"\n"+
                      "Sentence: "+watch('Sentence')+"\n");

          try {
            const userRef = db.collection('sample_data').doc(UserData.documentID) 
            const userDoc = await userRef.get()
            if (userDoc.exists) {
              console.log(userDoc.id)
              console.log(userDoc.data())
              //console.log(userDoc.get('Name'))
            } else {
              console.log('No such document!')
            }
          } catch (err) {
            console.log(`Error!: ${JSON.stringify(err)}`)
          }
 
          router.push("/");
        })() 
    };
    
 


    return (
         
      
      <div className="w-full max-w-sm">
      <div className="flex flex-wrap -mx-3 mb-6">
       
          <label className="block text-gray-500 md:text-left mb-1 md:mb-0 pr-4">
              名前
          </label>
          <input className="appearance-none block w-full bg-gray-10 text-gray-700 border border-gray-300 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-blue-500" type="text" defaultValue={UserData.Name} {...register('Name', { required: true })}  />
            

          <label className="block text-gray-500 md:text-left mb-1 md:mb-0 pr-4">
              出身地
          </label>
          <input className="appearance-none block w-full bg-gray-10 text-gray-700 border border-gray-300 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-blue-500" type="text" defaultValue={UserData.Place_born} {...register('Place_born', { required: true })} />

          <label className="block text-gray-500 md:text-left mb-1 md:mb-0 pr-4">
              居住地
          </label>
          <input className="appearance-none block w-full bg-gray-10 text-gray-700 border border-gray-300 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-blue-500" type="text" defaultValue={UserData.Place_live} {...register('Place_live', { required: true })} />

          <label className="block text-gray-500 md:text-left mb-1 md:mb-0 pr-4">
              趣味
          </label>
          <input className="appearance-none block w-full bg-gray-10 text-gray-700 border border-gray-300 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-blue-500" type="text" defaultValue={UserData.Hobby} {...register('Hobby', { required: true })} />
          <br></br>

          <label className="block text-gray-500 md:text-left mb-1 md:mb-0 pr-4">
              最後に一言
          </label>
          <input className="appearance-none block w-full bg-gray-10 text-gray-700 border border-gray-300 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-blue-500" type="text" defaultValue={UserData.Sentence} {...register('Sentence', { required: true })} />

           
          
          <Button
            variant="solid-blue"
            className="py-4 w-32 sm:w-80 mt-7"
            onClick={() => {
              handleOnClick();
            }}
          >
          <div className="flex"><span>送信</span></div>
          </Button>
          

 
      </div>
      </div> 
        
        
    );
}

