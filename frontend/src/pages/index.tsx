import { NextPage } from 'next';
import Link from 'next/link'
import Layout from '@/components/common/Layout';
import Counter from '@/components/counter/Counter';
import { getRandomNum } from '@/lib/counterUtil';

import Input_Form from "./form";
import Selfintroduction_Card from './self_introduction_card/SelfintroductionCard';  
 

const Home: NextPage = () => {
  const initialNum = getRandomNum();

  return (
    <Layout path="/" title="タイトル" noTitleTemplate={true} isTopPage={true}>
    
      <div className="w-screen h-screen bg-white font-family-karla">
      <div className="grid place-items-center mt-12 md:pt-0 md:px-24 lg:px-32">
        
        <h1 className="text-3xl font-bold text-gray-500">メイン画面</h1> 

        <Selfintroduction_Card />

        <Counter initialNum={initialNum} />
 
        <ul>
        <li>
          <Link href="/form">
            <a>自己紹介フォーム入力</a>
          </Link>
        </li>

        <li>
          <Link href="/self_introduction_card">
            <a>入力内容確認</a>
          </Link>
        </li>

        <li>
          <Link href="/">
            <a>---</a>
          </Link>
        </li>
      </ul>



      </div>
      </div>

    </Layout>
  );
};


export default Home;
