import { useForm} from 'react-hook-form';
import { useState } from 'react';
import { createContext } from "react";
import { db } from "../../lib/firebase"; 
import { Button } from "../../components/common/parts/Button"; 
import firebase from "firebase";



type UserData = {
  Name: string;
  Place_born: string;
  Place_live: string; 
  Hobby: string;
  Sentence: string;
}; 

const user_input_data = createContext<UserData>({
  Name: "",
  Place_born: "",
  Place_live: "", 
  Hobby: "",
  Sentence: "",
}); 

 
//const documenID = "-1";
const documenID = "sample"; 
  
 
export default function Input_Form() {
    const {
      register,
      handleSubmit,
      watch,
      formState: { errors }
    } = useForm<UserData>();

    

    
    (async () => {
     if(documenID != "-1"){
       
        try {
          const userRef = db.collection('sample_data').doc("sample") 
          const userDoc = await userRef.get()
          if (userDoc.exists) {
            //console.log('doc.id:',userDoc.id)
            //console.log(userDoc.data()) 
            
            user_input_data.Name = userDoc.get('Name');
            user_input_data.Place_born = userDoc.get('Place_born');
            user_input_data.Place_live = userDoc.get('Place_live');
            user_input_data.Hobby = userDoc.get('Hobby');
            user_input_data.Sentence = userDoc.get('Sentence');

            console.log('Name:', watch('Name'), user_input_data.Name);  
            console.log('Place_born:', watch('Place_born'), user_input_data.Place_born);    
            console.log('Place_live:', watch('Place_live'), user_input_data.Place_live);  
            console.log('Hobby:', watch('Hobby'),user_input_data.Hobby);    
            console.log('Sentence:', watch('Sentence'),user_input_data.Sentence); 
 
          } else {
            console.log('No such document!')
          }
          //await db.app.delete()
        } catch (err) {
          console.log(`Error!: ${JSON.stringify(err)}`)
        } 
      }



    })()
 
      
    const handleOnClick = async () => { 
        
        (async () => {
          console.log('Name:', watch('Name'), user_input_data.Name);  
          console.log('Place_born:', watch('Place_born'));    
          console.log('Place_live:', watch('Place_live'));  
          console.log('Hobby:', watch('Hobby'));    
          console.log('Sentence:', watch('Sentence'));    


          //バックエンドにリクエスト送信
          documenID = "sample"
          console.log(documenID);
          /*
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
          */

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
          
          await alert("送信完了 (今は何も送信してない)"+"\n"+
                      "送信内容\n"+
                      "Name: "+watch('Name')+"\n"+
                      "Place_born: "+watch('Place_born')+"\n"+
                      "Place_live: "+watch('Place_live')+"\n"+
                      "Hobby: "+watch('Hobby')+"\n"+
                      "Sentence: "+watch('Sentence')+"\n");

          try {
            const userRef = db.collection('sample_data').doc(documenID) 
            const userDoc = await userRef.get()
            if (userDoc.exists) {
              console.log(userDoc.id)
              console.log(userDoc.data())
              //console.log(userDoc.get('Name'))
            } else {
              console.log('No such document!')
            }
            //await db.app.delete()
          } catch (err) {
            console.log(`Error!: ${JSON.stringify(err)}`)
          }

          //location.href = '/';
        })() 
    };
    
 


    return (
         
      
      <div className="w-full max-w-sm">
      <div className="flex flex-wrap -mx-3 mb-6">
       
          <label className="block text-gray-500 md:text-left mb-1 md:mb-0 pr-4">
              名前
          </label>
          <input className="appearance-none block w-full bg-gray-10 text-gray-700 border border-gray-300 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-blue-500" type="text" defaultValue={user_input_data.Name} {...register('Name', { required: true })}  />
            

          <label className="block text-gray-500 md:text-left mb-1 md:mb-0 pr-4">
              出身地
          </label>
          <input className="appearance-none block w-full bg-gray-10 text-gray-700 border border-gray-300 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-blue-500" type="text" defaultValue={user_input_data.Place_born} {...register('Place_born', { required: true })} />

          <label className="block text-gray-500 md:text-left mb-1 md:mb-0 pr-4">
              居住地
          </label>
          <input className="appearance-none block w-full bg-gray-10 text-gray-700 border border-gray-300 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-blue-500" type="text" defaultValue={user_input_data.Place_live} {...register('Place_live', { required: true })} />

          <label className="block text-gray-500 md:text-left mb-1 md:mb-0 pr-4">
              趣味
          </label>
          <input className="appearance-none block w-full bg-gray-10 text-gray-700 border border-gray-300 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-blue-500" type="text" defaultValue={user_input_data.Hobby} {...register('Hobby', { required: true })} />
          <br></br>

          <label className="block text-gray-500 md:text-left mb-1 md:mb-0 pr-4">
              最後に一言
          </label>
          <input className="appearance-none block w-full bg-gray-10 text-gray-700 border border-gray-300 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-blue-500" type="text" defaultValue={user_input_data.Sentence} {...register('Sentence', { required: true })} />

           
          
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

