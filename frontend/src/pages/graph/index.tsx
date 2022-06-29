import { NextPage } from 'next';

import Layout from '@/components/common/Layout';

import DrawNetwork from './Graph';

const Network_Home: NextPage = () => {
  return (
    <Layout path="/" title="タイトル" noTitleTemplate={true} isTopPage={true}>
      <div className="w-screen h-screen bg-white font-family-karla">
        <div className="grid place-items-center mt-1 md:px-24 md:pt-0 lg:px-32">
          <p className="m-10 text-3xl text-red-400">Graph</p>
        </div>

        <div className="grid grid-cols-8 gap-4">
          <div className="col-span-6 col-start-2 rounded-3xl border-2 border-gray-300 shadow-md">
            <div className="m-1">
              <DrawNetwork />
            </div>
          </div>
        </div>

        <br />
        <br />
      </div>
    </Layout>
  );
};

export default Network_Home;
