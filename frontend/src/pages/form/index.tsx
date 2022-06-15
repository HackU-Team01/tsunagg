
import Layout from '@/components/common/Layout';
import Form from './Form';
import Link from 'next/link'
 
export default function Selfintroduction_Input_Form() {
     

    return (
      <Layout path="/" title="タイトル" noTitleTemplate={true} isTopPage={true}>
          <div> 
              <li>
                <Link href="/">
                  <a>Home</a>
                </Link>
              </li>

              <Form /> 
              
            </div>

    </Layout>
       
        
        
    );
}

