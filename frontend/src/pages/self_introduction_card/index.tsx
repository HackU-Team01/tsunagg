import Selfintroduction_Card from './SelfintroductionCard'; 
import Layout from '@/components/common/Layout'; 
import Link from 'next/link'
 
export default function Selfintroduction_Card_Home() {
     

    return (
         
      <Layout path="/" title="タイトル" noTitleTemplate={true} isTopPage={true}>
        <div className="w-screen h-screen bg-white font-family-karla">
        <div className="grid place-items-center mt-12 md:pt-0 md:px-24 lg:px-32">
            
        
               

          <h1 className="text-3xl font-bold text-gray-500">自己紹介</h1> 
          <Selfintroduction_Card />


          </div>
          </div>
        

      </Layout>
       
        
        
    );
}

