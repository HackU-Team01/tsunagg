import { NextPage } from 'next';

import Layout from '@/components/common/Layout';
import Counter from '@/components/counter/Counter';
import { getRandomNum } from '@/lib/counterUtil';

const Home: NextPage = () => {
  const initialNum = getRandomNum();

  return (
    <Layout path="/" title="タイトル" noTitleTemplate={true} isTopPage={true}>
    
      <div className="w-screen h-screen bg-white font-family-karla">
      <div className="grid place-items-center mt-12 md:pt-0 md:px-24 lg:px-32">
      

        <h1 className="text-3xl font-bold text-orange-500" id="h2_self_introduction_form">自己紹介登録フォーム</h1> 


        <form class="w-full max-w-lg">
          <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full px-7">
              <label class="block text-gray-500 font-bold md:text-left mb-1 md:mb-0 pr-4" for="inline-full-name">
                名前
              </label>
              <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="名前"></input>
              <p class="text-gray-600 text-xs italic"></p>
            </div>
          </div>



          <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full px-7">
                <label class="block text-gray-500 font-bold md:text-left mb-1 md:mb-0 pr-4" for="inline-full-name">
                出身地
              </label>
                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="birthplace" type="text" placeholder="東京"></input>
              <p class="text-gray-600 text-xs italic"></p>
            </div>
          </div>



          <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full px-7">
              <label class="block text-gray-500 font-bold md:text-left mb-1 md:mb-0 pr-4" for="inline-full-name">
                趣味
              </label>
              <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="hobby1" type="text" placeholder="野球"></input>
              <p class="text-gray-600 text-xs italic"></p>
              
              <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="hobby2" type="text" placeholder="サッカー"></input>
              <p class="text-gray-600 text-xs italic"></p>
              
              <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="hobby3" type="text" placeholder="音楽"></input>
              <p class="text-gray-600 text-xs italic"></p>
              
              <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="hobby4" type="text" placeholder="映画"></input>
              <p class="text-gray-600 text-xs italic"></p>
            </div>
          </div>



          <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full px-7">
              <label class="block text-gray-500 font-bold md:text-left mb-1 md:mb-0 pr-4" for="inline-full-name">
                最後に一言
              </label>
              <textarea rows="4" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="usercomment" type="text" placeholder="よろしくお願いします！"></textarea>
            </div>
          </div>
              
          <div class="md:flex md:items-center">
            <div class="md:w-1/3"></div>
            <div class="md:w-2/3">
              <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" id="sendbutton" type="button" >Send</button>
            </div>
          </div>
      </form>


      <Counter initialNum={initialNum} />



      </div>
      </div>

    </Layout>
  );
};

export default Home;
