
import Layout from '@/components/common/Layout';
import Form from './Form';
import Link from 'next/link'
 

const Selfintroduction_Input_Form: NextPage = () => {
     

    return (
      <Layout path="/" title="タイトル" noTitleTemplate={true} isTopPage={true}>
        <div className="w-screen h-screen bg-white font-family-karla">
        <div className="grid place-items-center mt-12 md:pt-0 md:px-24 lg:px-32">
 
 
              <h1 className="text-3xl text-gray-500">自己紹介登録フォーム</h1> 
              <Form /> 

        </div>
        </div>

 
      </Layout>
       
        
        
    );
}


export default Selfintroduction_Input_Form;