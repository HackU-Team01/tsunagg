import { NextPage } from 'next';
import Layout from '@/components/common/Layout';
import Counter from '@/components/counter/Counter';
import { getRandomNum } from '@/lib/counterUtil';

import Input_Form from "./form";

import Link from 'next/link'

const Home: NextPage = () => {
  const initialNum = getRandomNum();

  return (
    <Layout path="/" title="タイトル" noTitleTemplate={true} isTopPage={true}>
    
      <div className="w-screen h-screen bg-white font-family-karla">
      <div className="grid place-items-center mt-12 md:pt-0 md:px-24 lg:px-32">
    
   
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
      <Counter initialNum={initialNum} />
 


      </div>
      </div>

    </Layout>
  );
};


export default Home;
