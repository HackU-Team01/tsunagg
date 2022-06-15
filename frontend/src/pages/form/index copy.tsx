import { useForm, SubmitHandler } from 'react-hook-form';  

import { db } from "../../lib/firebase"; 



type Inputs = {
  Name: string;
  Place_born: string;
  Place_live: string; 
  Hobby: string;
  Sentence: string;
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
      console.log('Name:', watch('Name'));  
      console.log('Place_born:', watch('Place_born'));    
      console.log('Place_live:', watch('Place_live'));  
      console.log('Hobby:', watch('Hobby'));    
      console.log('Sentence:', watch('Sentence'));    
  
       
      (async () => {
        
        /*
        //create sample data
        try {
          const userRef = db.collection('sample_data').doc('sample')
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
        */
      
        
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
        }
        
        
        
        /*
        try { 
          console.log('test2');
          const userRef = db.collection('test_data').doc('uJk9YqdKtX69uNCWwvDi');
          await useRef.update({
            user_name_firebase: watch('username'),
            birthplace_firebase: watch('birthplace'),
            uhobby_firebase: watch('hobby'),
            user_comments_firebase: watch('user_comments'),
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            updatedAt: firebase.firestore.FieldValue.serverTimestamp(),
          })

          const userDoc = await userRef.get()
          console.log(userDoc.data())

        } catch (err) {
          console.log(`Error: ${JSON.stringify(err)}`)
        }
        */
        

        try {
          const userRef = db.collection('sample_data').doc('sample') 
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
 
    } 
    
 


    return (
         
      
        <form onSubmit={handleSubmit(onSubmit)}>

            <h1 className="text-3xl font-bold text-orange-500" id="h2_self_introduction_form">自己紹介登録フォーム</h1> 

            <label className="block text-gray-500 font-bold md:text-left mb-1 md:mb-0 pr-4" for="inline-full-name">
                名前
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" defaultValue="名前" {...register('Name', { required: true })} />
            <br></br>

      
            <label className="block text-gray-500 font-bold md:text-left mb-1 md:mb-0 pr-4" for="inline-full-name">
                出身地
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" defaultValue="東京" {...register('Place_born', { required: true })} />

            <label className="block text-gray-500 font-bold md:text-left mb-1 md:mb-0 pr-4" for="inline-full-name">
                居住地
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" defaultValue="大阪" {...register('Place_live', { required: true })} />
            
            <label className="block text-gray-500 font-bold md:text-left mb-1 md:mb-0 pr-4" for="inline-full-name">
                趣味
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" defaultValue="趣味" {...register('Hobby', { required: true })} />
            <br></br>

            <label className="block text-gray-500 font-bold md:text-left mb-1 md:mb-0 pr-4" for="inline-full-name">
                最後に一言
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" defaultValue="よろしくお願いします！" {...register('Sentence', { required: true })} />
            
            
            {errors.Name && (<span style={{ color: 'red' }}>空欄があります</span>)}
            {errors.Place_born && (<span style={{ color: 'red' }}>空欄があります</span>)}
            {errors.Place_live && (<span style={{ color: 'red' }}>空欄があります</span>)}
            {errors.Hobby && (<span style={{ color: 'red' }}>空欄があります</span>)}
            {errors.Sentence && (<span style={{ color: 'red' }}>空欄があります</span>)}



          <div className="md:flex md:items-center">
              <input className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit" />
          </div>
           
             


          <br></br>
          <br></br>
          <br></br>
 


          <h1 className="text-3xl font-bold text-orange-500" id="h2_self_introduction_form">自己紹介</h1> 
          
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

        </form>

        
        
    );
}

