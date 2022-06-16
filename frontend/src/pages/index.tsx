import { NextPage } from 'next';
import React, { useEffect } from "react";
import Link from 'next/link'
import Layout from '@/components/common/Layout';
import Counter from '@/components/counter/Counter';
import { getRandomNum } from '@/lib/counterUtil';

import Selfintroduction_Card from './self_introduction_card/SelfintroductionCard';  

 
 

const Home: NextPage = () => {
 

  return (
    <Layout path="/" title="タイトル" noTitleTemplate={true} isTopPage={true}>
    
      <div className="w-screen h-screen bg-white font-family-karla">
      <div className="grid place-items-center mt-12 md:pt-0 md:px-24 lg:px-32">
        
        <h1 className="text-5xl text-gray-500">メイン画面</h1>


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



      <Selfintroduction_Card />

 
 
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
