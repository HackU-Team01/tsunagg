import { NextPage } from 'next';
import Layout from '@/components/common/Layout';
import DrawNetwork from './Graph';

const Network_Home: NextPage = () => {
  return (
    <Layout path="/" title="タイトル" noTitleTemplate={true} isTopPage={true}>
      <div className="w-screen h-screen bg-white font-family-karla">
        <div className="grid place-items-center mt-12 md:px-24 md:pt-0 lg:px-32">
          <h1 className="text-3xl text-gray-500">Network</h1>
          <DrawNetwork />
        </div>
      </div>
    </Layout>
  );
};

export default Network_Home;
