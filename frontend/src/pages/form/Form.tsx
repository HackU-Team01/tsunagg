import { useForm} from 'react-hook-form';
import { createContext } from "react";
import { db } from "../../lib/firebase"; 
import { Button } from "../../components/common/parts/Button"; 

import firebase from "firebase";

type Inputs = {
  Name: string;
  Place_born: string;
  Place_live: string; 
  Hobby: string;
  Sentence: string;
}; 

const user_input_data = createContext<Inputs>({
  Name: "",
  Place_born: "",
  Place_live: "", 
  Hobby: "",
  Sentence: "",
});
export {user_input_data};

const documenID = "-1";



export default function Input_Form() {
    const {
        register,
        watch,
        formState: { errors }
    } = useForm<Inputs>();
 
      
    const handleOnClick = async () => {
        
        console.log('Name:', watch('Name'));  
        console.log('Place_born:', watch('Place_born'));    
        console.log('Place_live:', watch('Place_live'));  
        console.log('Hobby:', watch('Hobby'));    
        console.log('Sentence:', watch('Sentence'));    

        user_input_data.Name = watch('Name');
        user_input_data.Place_born = watch('Place_born');
        user_input_data.Place_live = watch('Place_live');
        user_input_data.Hobby = watch('Hobby');
        user_input_data.Sentence = watch('Sentence');

       

        (async () => {

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
           
          
        
          
          /*
          try {
            const userRef = await db.collection('sample_data').add({
              Name: watch('Name'),
              Place_born: watch('Place_born'),
              Place_live: watch('Place_live'),
              Hobby: watch('Hobby'),
              Sentence: watch('Sentence'),
              createdAt: firebase.firestore.FieldValue.serverTimestamp(),
              updatedAt: firebase.firestore.FieldValue.serverTimestamp(),
            });
        
            const userDoc = await userRef.get();
            console.log(userDoc.data());

          } catch (err) {
            console.log(`Error: ${JSON.stringify(err)}`);
          }*/
           
          
           
          

          try {
            const userRef = db.collection('sample_data').doc(documenID) 
            const userDoc = await userRef.get()
            if (userDoc.exists) {
              console.log(userDoc.id)
              console.log(userDoc.data())
              console.log(userDoc.get('Name'))
            } else {
              console.log('No such document!')
            }
            //await db.app.delete()
          } catch (err) {
            console.log(`Error!: ${JSON.stringify(err)}`)
          }


  
        })()
    };
      
 


    return (
         
      <div className="w-auto h-screen bg-white">
      <div className="grid place-items-center mt-12 md:pt-0 md:px-24 lg:px-32">
        
          <label className="block text-gray-500 font-bold md:text-left mb-1 md:mb-0 pr-4">
              名前
          </label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" defaultValue={user_input_data.Name} {...register('Name', { required: true })} />
          <br></br>


          <label className="block text-gray-500 font-bold md:text-left mb-1 md:mb-0 pr-4">
              出身地
          </label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" defaultValue={user_input_data.Place_born} {...register('Place_born', { required: true })} />

          <label className="block text-gray-500 font-bold md:text-left mb-1 md:mb-0 pr-4">
              居住地
          </label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" defaultValue={user_input_data.Place_live} {...register('Place_live', { required: true })} />

          <label className="block text-gray-500 font-bold md:text-left mb-1 md:mb-0 pr-4">
              趣味
          </label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" defaultValue={user_input_data.Hobby} {...register('Hobby', { required: true })} />
          <br></br>

          <label className="block text-gray-500 font-bold md:text-left mb-1 md:mb-0 pr-4">
              最後に一言
          </label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" defaultValue={user_input_data.Sentence} {...register('Sentence', { required: true })} />

          {errors.Name && (<span style={{ color: 'red' }}>空欄があります</span>)}
          {errors.Place_born && (<span style={{ color: 'red' }}>空欄があります</span>)}
          {errors.Place_live && (<span style={{ color: 'red' }}>空欄があります</span>)}
          {errors.Hobby && (<span style={{ color: 'red' }}>空欄があります</span>)}
          {errors.Sentence && (<span style={{ color: 'red' }}>空欄があります</span>)}


          
          <Button
            variant="solid-blue"
            className="py-4 w-52 sm:w-80 mt-7"
            onClick={() => {
              handleOnClick();
            }}
          >
          <div className="flex"><span>送信</span></div>
          </Button>
          


          <br></br>
          <br></br>
          <br></br>



          <h1 className="text-3xl font-bold text-gray-500">自己紹介</h1> 
          <div className="p-4 max-w-md bg-white rounded-lg shadow-md border border-gray-500">
            <div className="flow-root">
                <ul role="list" className="divide-y divide-gray-200">
                <li className="py-3 sm:py-4">
                <div className="flex items-center space-x-4">
                  
                  
                    <div className="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                        <svg className="absolute w-12 h-12 text-gray-400 -left-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
                    </div>


                    <h5 className="text-2xl font-bold leading-none text-gray-900 dark:text-black" id="self_introduction_username">{watch('Name')}</h5>
                </div>
                <div className="flex items-center space-x-4">
                    <div className="relative w-10 h-10 overflow-hidden bg-white rounded-full"><svg className="absolute w-12 h-12 text-gray-400 -left-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"></svg></div>
                    
                    <div className="flex-1 min-w-0">
                        <p className="text-black-500">名前：{watch('Name')}</p>
                        <p className="text-black-500"> 出身地：{watch('Place_born')} </p>
                        <p className="text-black-500"> 居住地{watch('Place_live')} </p>
                        <p className="text-black-500"> 趣味：{watch('Hobby')} </p>
                        <p className="text-black-500"> 最後に一言：{watch('Sentence')}</p>
                    </div>
                </div>
                </li>
                </ul>
            </div>      
          </div>

          

      </div>
    </div>
         
        
        
    );
}

