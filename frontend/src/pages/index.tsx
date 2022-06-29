import { NextPage } from 'next';
import React from 'react';

import Layout from '@/components/common/Layout';

import Graph from './graph/Graph';
import Recommend from './recommend/Recommend';

const Home: NextPage = () => {
  return (
    <Layout path="/" title="タイトル" noTitleTemplate={true} isTopPage={true}>
      <div className="w-screen h-screen bg-white font-family-karla">
        <div className="grid grid-cols-6 gap-2 m-5">
          <div className="col-span-2 col-start-1 m-4 h-screen">
            <div className="m-1">
              <Recommend />
            </div>
          </div>
          <div className="col-span-4 col-start-3 m-7 h-screen rounded-2xl border-2 border-gray-300 shadow-md">
            <div className="m-1">
              <Graph />
            </div>
          </div>
        </div>
        <br />
        <br />
      </div>
    </Layout>
  );
};

export default Home;
