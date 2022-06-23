import { NextPage } from 'next';
import Link from 'next/link';
import React from 'react';

import Layout from '@/components/common/Layout';

import Graph from './graph/Graph';

const Home: NextPage = () => {
  return (
    <Layout path="/" title="タイトル" noTitleTemplate={true} isTopPage={true}>
      <div className="w-screen h-screen bg-white font-family-karla">
        <div className="grid place-items-center mt-12 md:px-24 md:pt-0">
          <h1 className="text-5xl text-gray-500">メイン画面</h1>
          <br />
          <ul>
            <li>
              <Link href="/form">
                <a className="text-xl text-gray-500">自己紹介フォーム入力</a>
              </Link>
            </li>
            <li>
              <Link href="/graph">
                <a className="text-xl text-gray-500">グラフ出力</a>
              </Link>
            </li>

            <li>
              <Link href="/recommend">
                <a className="text-xl text-gray-500">おすすめ表示</a>
              </Link>
            </li>
          </ul>
        </div>

        <div className="grid place-items-center mt-12 md:px-24 md:pt-0">
          <Graph />
        </div>
      </div>
    </Layout>
  );
};

export default Home;
