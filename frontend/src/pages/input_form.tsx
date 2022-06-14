import { useForm, SubmitHandler } from 'react-hook-form'; 
  
import firebase from "firebase/app";
import { db } from "../lib/firebase";
import { useRef } from 'react';



type Inputs = {
  username: string;
  birthplace: string;
  hobby: string;
  user_comments: string;
  
};

export default function Input_Form() {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors }
    } = useForm<Inputs>();
 
     
    const onSubmit: SubmitHandler<Inputs> = (data) => {
      console.log('onSubmit:', data);
      console.log('username:', watch('username'));  
      console.log('birthplace:', watch('birthplace'));    
      console.log('hobby:', watch('hobby'));  
      console.log('user_comments:', watch('user_comments'));    

      
      (async () => {
        try { 
          console.log('test2');
          const userRef = db.collection('test_data').doc('uJk9YqdKtX69uNCWwvDi')
          await useRef.update({
            user_name_firebase: "watch('username')",
          })

          const userDoc = await userRef.get()
          console.log(userDoc.data())

        } catch (err) {
          console.log(`Error: ${JSON.stringify(err)}`)
        }
 


        try { 
          console.log('test1');
          const userRef = db.collection('test_data').doc('uJk9YqdKtX69uNCWwvDi') 
          const userDoc = await userRef.get()

          if (userDoc.exists) {
            console.log(userDoc.id)
            console.log(userDoc.data())
            console.log(userDoc.get('user_name_firebase'))
          } else {
            console.log('No such document!')
          }
          await db.app.delete()
        } catch (err) {
          console.log(`Error!: ${JSON.stringify(err)}`)
        }


 
      })()
 
    } 
    
 


    return (
         
         
      
        <form onSubmit={handleSubmit(onSubmit)}>

            <h1 className="text-3xl font-bold text-orange-500" id="h2_self_introduction_form">自己紹介登録フォーム</h1> 

            <label className="block text-gray-500 font-bold md:text-left mb-1 md:mb-0 pr-4" for="inline-full-name">
                名前
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" defaultValue="名前" {...register('username', { required: true })} />
            <br></br>

      
            <label className="block text-gray-500 font-bold md:text-left mb-1 md:mb-0 pr-4" for="inline-full-name">
                出身地
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="birthplace" type="text" defaultValue="東京" {...register('birthplace', { required: true })} />
            
            <label className="block text-gray-500 font-bold md:text-left mb-1 md:mb-0 pr-4" for="inline-full-name">
                趣味
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="hobby" type="text" defaultValue="趣味" {...register('hobby', { required: true })} />
            <br></br>

      
            <label className="block text-gray-500 font-bold md:text-left mb-1 md:mb-0 pr-4" for="inline-full-name">
                最後に一言
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="user_comments" type="text" defaultValue="よろしくお願いします！" {...register('user_comments', { required: true })} />
            
            
            {errors.birthplace && (
                <span style={{ color: 'red' }}>空欄があります</span>
            )}
            {errors.username && (
                <span style={{ color: 'red' }}>空欄があります</span>
            )}
            {errors.hobby && (
                <span style={{ color: 'red' }}>空欄があります</span>
            )}
            {errors.user_comments && (
                <span style={{ color: 'red' }}>空欄があります</span>
            )}



          <div className="md:flex md:items-center">
              <input className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" id="sendbutton" type="submit" />
          </div>
             


          <br></br>
          <br></br>
          <br></br>
 


          <h1 className="text-3xl font-bold text-orange-500" id="h2_self_introduction_form">自己紹介</h1> 
          
          <div class="p-4 max-w-md bg-white rounded-lg shadow-md border border-gray-500">
              <div class="flow-root">
                  <ul role="list" class="divide-y divide-gray-200 dark:divide-gray-700">
                  <li class="py-3 sm:py-4">
                  <div class="flex items-center space-x-4">
                      <div class="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                          <svg class="absolute w-12 h-12 text-gray-400 -left-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
                      </div>
                        <h5 class="text-xl font-bold leading-none text-gray-900 dark:text-black" id="self_introduction_username">{watch('username')}</h5>
                  </div>
                  
                  <div class="flex items-center space-x-4">
                      <div class="relative w-10 h-10 overflow-hidden bg-white rounded-full">
                          <svg class="absolute w-12 h-12 text-gray-400 -left-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"></svg>
                      </div>
                      <div class="flex-1 min-w-0">
                          <p class="text-black-500">
                            名前：{watch('username')}
                          </p>
                          <p class="text-black-500"> 
                            出身地：{watch('birthplace')} 
                          </p>
                          <p class="text-black-500"> 
                            趣味：{watch('hobby')} 
                          </p>
                          <p class="text-black-500"> 
                            最後に一言：{watch('user_comments')}
                          </p>
                      </div>
                  </div>
                  
                  </li>
                  </ul>
              </div>      
          </div>
　

        </form>

        
        
    );
}

