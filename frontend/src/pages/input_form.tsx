import { useForm, SubmitHandler } from 'react-hook-form'; 

type Inputs = {
  username: string;
  birthplace: string;
  hobby: string;
  user_comments: string;
  
};
export default function Input_Form() {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors }
    } = useForm<Inputs>();
    
    const onSubmit: SubmitHandler<Inputs> = (data) => console.log('onSubmit:', data);
    console.log('username:', watch('username'));  
    console.log('birthplace:', watch('birthplace'));    
    console.log('hobby:', watch('hobby'));  
    console.log('user_comments:', watch('user_comments'));    



    return (
      
        <form onSubmit={handleSubmit(onSubmit)}>
      
            <label className="block text-gray-500 font-bold md:text-left mb-1 md:mb-0 pr-4" for="inline-full-name">
                名前
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" defaultValue="名前" {...register('username', { required: true })} />
            <br></br>

      
            <label className="block text-gray-500 font-bold md:text-left mb-1 md:mb-0 pr-4" for="inline-full-name">
                出身地
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="birthplace" type="text" defaultValue="東京" {...register('birthplace', { required: true })} />
            
            <label className="block text-gray-500 font-bold md:text-left mb-1 md:mb-0 pr-4" for="inline-full-name">
                趣味
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="hobby" type="text" defaultValue="趣味" {...register('hobby', { required: true })} />
            <br></br>

      
            <label className="block text-gray-500 font-bold md:text-left mb-1 md:mb-0 pr-4" for="inline-full-name">
                最後に一言
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="user_comments" type="text" defaultValue="よろしくお願いします！" {...register('user_comments', { required: true })} />
            
            
            {errors.birthplace && (
                <span style={{ color: 'red' }}>空欄があります</span>
            )}
            {errors.username && (
                <span style={{ color: 'red' }}>空欄があります</span>
            )}
            {errors.hobby && (
                <span style={{ color: 'red' }}>空欄があります</span>
            )}
            {errors.user_comments && (
                <span style={{ color: 'red' }}>空欄があります</span>
            )}



          <div className="md:flex md:items-center">
              <input className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" id="sendbutton" type="submit" />
          </div>
              
        </form>
    );
}

