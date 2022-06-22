import { NextPage } from 'next';
import Link from 'next/link';
import React from 'react';

import Layout from '@/components/common/Layout';
import Graph from './graph/Graph';

const Home: NextPage = () => {
  return (
    <Layout path="/" title="タイトル" noTitleTemplate={true} isTopPage={true}>
      <div className="w-screen h-screen bg-white font-family-karla">
        <div className="grid place-items-center mt-12 md:px-24 md:pt-0 lg:px-32">
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
              <Link href="/network_graph">
                <a>NetworkGraph</a>
              </Link>
            </li>
          </ul>

          <Graph />
        </div>
      </div>
    </Layout>
  );
};

export default Home;
