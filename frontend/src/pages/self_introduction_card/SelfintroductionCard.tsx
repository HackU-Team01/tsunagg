import { user_input_data } from "../form/Form"

const Selfintroduction_Card = () => {
    
  return (
    <div>
        
        <h1 className="text-3xl font-bold text-orange-500">自己紹介</h1> 
          <div className="p-4 max-w-md bg-white rounded-lg shadow-md border border-gray-500">
            <div className="flow-root">
                <ul role="list" className="divide-y divide-gray-200">
                <li className="py-3 sm:py-4">
                <div className="flex items-center space-x-4">
                  
                  
                    <div className="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                        <svg className="absolute w-12 h-12 text-gray-400 -left-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
                    </div>


                    <h5 className="text-2xl font-bold leading-none text-gray-900 dark:text-black" id="self_introduction_username">{user_input_data.Name}</h5>
                </div>
                <div className="flex items-center space-x-4">
                    <div className="relative w-10 h-10 overflow-hidden bg-white rounded-full"><svg className="absolute w-12 h-12 text-gray-400 -left-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"></svg></div>
                    
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
    </div>
  );
};

export default Selfintroduction_Card;
