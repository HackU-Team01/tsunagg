import { db } from "../../lib/firebase"; 
import { createContext } from "react";
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


const Selfintroduction_Card = () => {

 
  (async () => {
    if(documenID != "-1"){
        const userRef = db.collection('sample_data').doc("sample") 
        const userDoc = await userRef.get()
        if (userDoc.exists) {
          //console.log('doc.id:',userDoc.id)
          console.log(userDoc.data()) 

          user_input_data.Name = userDoc.get('Name');
          user_input_data.Place_born = userDoc.get('Place_born');
          user_input_data.Place_live = userDoc.get('Place_live');
          user_input_data.Hobby = userDoc.get('Hobby');
          user_input_data.Sentence = userDoc.get('Sentence');
        }
      }
  })()
 
    
  return ( 
      <div className="p-4 max-w-md bg-white rounded-lg shadow-md border border-gray-300">
        <div className="flow-root">
            <ul role="list" className="divide-y divide-gray-200">
            <li className="py-3 sm:py-4">
            <div className="flex items-center space-x-4">
              
              
                <div className="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-300">
                    <svg className="absolute w-12 h-12 text-gray-400 -left-1" fill="currentColor" viewBox="0 0 20 20" ><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
                </div>


                <h5 className="text-2xl leading-none text-gray-900">{user_input_data.Name}</h5>
            </div>
            <div className="flex items-center space-x-4">
                <div className="relative w-10 h-10 overflow-hidden bg-white rounded-full"><svg className="absolute w-12 h-12 text-gray-400 -left-1" fill="currentColor" viewBox="0 0 20 20"></svg></div>
                
                <div className="flex-1 min-w-0">
                    <p className="text-black-500">名前：{user_input_data.Name}</p>
                    <p className="text-black-500"> 出身地：{user_input_data.Place_born} </p>
                    <p className="text-black-500"> 居住地{user_input_data.Place_live} </p>
                    <p className="text-black-500"> 趣味：{user_input_data.Hobby} </p>
                    <p className="text-black-500"> 最後に一言：{user_input_data.Sentence}</p>
                </div>
            </div>
            </li>
            </ul>
        </div>      
      </div> 
  );
};

export default Selfintroduction_Card;
