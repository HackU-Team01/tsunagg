import { NextPage } from 'next';

import Layout from '@/components/common/Layout';
import Counter from '@/components/counter/Counter';
import { getRandomNum } from '@/lib/counterUtil';

import { render } from "react-dom";
import Input_Form from "./input_form";

 

const Home: NextPage = () => {
  const initialNum = getRandomNum();

  return (
    <Layout path="/" title="タイトル" noTitleTemplate={true} isTopPage={true}>
    
      <div className="w-screen h-screen bg-white font-family-karla">
      <div className="grid place-items-center mt-12 md:pt-0 md:px-24 lg:px-32">
    
  
        <Input_Form />



      <Counter initialNum={initialNum} />



      </div>
      </div>

    </Layout>
  );
};


export default Home;
