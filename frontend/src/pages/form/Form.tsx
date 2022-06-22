import { useForm } from 'react-hook-form';

import { Button } from '../../components/common/parts/Button';
import Form_hobby from './Form_hobby';
import Form_place_option, { map_place } from './Form_place';
//import Form_hobby_sport from "./Form_hobby_sport"
//import Form_hobby_lifestyle from "./Form_hobby_lifestyle"


type InputData = {
  Name: string;
  Hobby: string;
  Sentence: string;
};

export default function Input_Form() {
  //const router = useRouter();
  const {
    register,
    //handleSubmit,
    watch,
    //formState: { errors }
  } = useForm<InputData>();

  const handleOnClick_clear = async () => {
    const hobby_checkbox = document.getElementsByName('hobby');
    for (let i = 0; i < hobby_checkbox.length; i++) {
      if (hobby_checkbox[i].checked == true) {
        hobby_checkbox[i].checked = false;
        hobby_checkbox[i].className =
          'inline-block px-6 py-2 border-2 border-red-300 text-red-300 text-sm leading-tight uppercase rounded-full';
      }
    }
    /*
        const sport_checkbox = document.getElementsByName('hobby_sport'); 
        for(let i = 0; i < sport_checkbox.length; i++){  
            if(sport_checkbox[i].checked == true) {
                sport_checkbox[i].checked = false;
                sport_checkbox[i].className="inline-block px-6 py-2 border-2 border-red-300 text-red-300 text-5xs leading-tight uppercase rounded-full"; 
            }
        }   


        const lifestyle_checkbox = document.getElementsByName('hobby_lifestyle'); 
        for(let i = 0; i < lifestyle_checkbox.length; i++){  
            if(lifestyle_checkbox[i].checked == true) {
                lifestyle_checkbox[i].checked = false;
                lifestyle_checkbox[i].className="inline-block px-6 py-2 border-2 border-red-300 text-red-300 text-5xs leading-tight uppercase rounded-full"; 
            }
        }   
        */
  };

  const handleOnClick = async () => {
    const Place_born = document.getElementById('select_Place_born');
    const Place_live = document.getElementById('select_Place_live');

    /*
        const sport_checkbox = document.getElementsByName('hobby_sport');
        let res_sport = []; 
        for(let i = 0; i < sport_checkbox.length; i++){  
            if(sport_checkbox[i].checked) res_sport.push(sport_checkbox[i].value); 
        }
        const lifestyle_checkbox = document.getElementsByName('hobby_lifestyle');
        let res_lifestyle = []; 
        for(let i = 0; i < lifestyle_checkbox.length; i++){  
            if(lifestyle_checkbox[i].checked) res_lifestyle.push(lifestyle_checkbox[i].value); 
        }   
        */
    const hobby_checkbox = document.getElementsByName('hobby');
    let checked_hobby_list = [];
    for (let i = 0; i < hobby_checkbox.length; i++) {
      if (hobby_checkbox[i].checked) checked_hobby_list.push(hobby_checkbox[i].value);
    }

    alert('リクエスト送信');
    const axios = require('axios');
    console.log('POST リクエスト送信開始');
    //var args = {data: { user: "jiro", password: "123456" },headers: { "Content-Type": "application/json" }}
    /*
        var args = {
            data:{
                Name: watch('Name'),
                Attribute:{
                    Sports: res_sport,
                    Lifestyle: res_lifestyle,
                    Place_born: [map_place.get((Place_born.value)),(Place_born.value)], 
                    Place_live: [map_place.get((Place_live.value)),(Place_live.value)], 
                },
                Sentence:watch('Sentence')
            }
        }
        */
    let args = {
      data: {
        Name: watch('Name'),
        Attribute: {
          Hobby: checked_hobby_list,
          Place_born: [map_place.get(Place_born.value), Place_born.value],
          Place_live: [map_place.get(Place_live.value), Place_live.value],
        },
        Sentence: watch('Sentence'),
      },
    };
    //console.log(args);
    //https://httpbin.org/post
    axios
      .post('https://httpbin.org/post', args)
      .then(function (response: any) {
        console.log(response.data);
      })
      .catch(function (error: any) {
        console.log(error);
      })
      .then(function () {
        console.log('POST リクエスト送信　終了');
      });
    console.log('POST リクエスト送信処理終了');
  };

  return (
    <form className="w-full">
      <label className="block pr-4 mb-1 text-xl text-red-500 md:mb-0 md:text-left">名前</label>
      <input
        className="block py-3 px-4 w-full leading-tight text-gray-700 bg-white focus:bg-white rounded border border-gray-300 focus:border-red-500 focus:outline-none appearance-none"
        type="text"
        defaultValue=""
        {...register('Name', { required: true })}
      />
      <br />

      <label className="block pr-4 mb-1 text-xl text-red-500 md:mb-0 md:text-left">出身地</label>
      <select
        id="select_Place_born"
        className="block py-3 px-4 w-1/2 text-xl text-gray-500 bg-white focus:bg-white rounded border border-gray-300 focus:border-red-500 focus:outline-none appearance-none bg-whilte"
      >
        <Form_place_option />
      </select>
      <br />

      <label className="block pr-4 mb-1 text-xl text-red-500 md:mb-0 md:text-left">居住地</label>
      <select
        id="select_Place_live"
        className="block py-3 px-4 w-1/2 text-xl text-gray-500 bg-white focus:bg-white rounded border border-gray-300 focus:border-red-500 focus:outline-none appearance-none"
      >
        <Form_place_option />
      </select>
      <br />

      <label className="block pr-4 mb-1 text-xl text-red-500 md:mb-0 md:text-left">趣味</label>
      <br />
      <Form_hobby />

      <br></br>

      <div className="mb-6 md:flex md:items-center">
        <div className="md:w-2/12">
          <label className="block pr-4 mb-1 text-xl text-gray-500 md:mb-0 md:text-left">
            その他
          </label>
        </div>
        <div className="md:w-4/12">
          <input
            className="block py-2 px-4 w-full leading-tight text-gray-700 bg-white focus:bg-white rounded border border-gray-300 focus:border-red-500 focus:outline-none appearance-none"
            type="text"
            defaultValue=""
            {...register('Hobby', { required: true })}
          />
        </div>
        <div className="md:w-2/12"></div>
        <div className="md:w-4/12">
          <button
            type="button"
            className="inline-block py-2.5 px-6 text-xs font-medium leading-tight text-gray-900 bg-gray-100 thover:bg-gray-300 focus:bg-gray-300 active:bg-gray-400 rounded-full border-2 focus:outline-none focus:ring-0 shadow-md hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out border-gray-10"
            onClick={() => {
              handleOnClick_clear();
            }}
          >
            クリア
          </button>
        </div>
      </div>

      <br></br>

      <label className="block pr-4 mb-1 text-xl text-red-500 md:mb-0 md:text-left">
        最後に一言{' '}
      </label>
      <textarea
        rows="5"
        className="block py-2 px-4 w-full leading-tight text-gray-700 bg-white focus:bg-white rounded border border-gray-300 focus:border-red-500 focus:outline-none appearance-none"
        type="text"
        defaultValue=""
        {...register('Sentence', { required: true })}
      />

      <Button
        variant="solid-red"
        className="py-4 mt-7 w-32 sm:w-40"
        onClick={() => {
          handleOnClick();
        }}
      >
        <div className="flex">
          <span>送信</span>
        </div>
      </Button>
    </form>
  );
}

/*
<Form_hobby_sport />
            <Form_hobby_lifestyle />





            <div className="md:flex md:items-center mb-3">
                <div className="md:w-2/12">
                <label className="text-xl block text-gray-500 md:text-left mb-1 md:mb-0 pr-4">
                ゲーム
                </label>
                </div>
                <div className="md:w-2/12">
               
                </div>
                <div className="flex md:w-10/12">
                    <div className="flex items-center mr-4">
                        <input id="icheckbox1" type="checkbox" value="" className="w-4 h-4 "></input>
                        <span className="ml-2  xt-gray-900 ">モンハン</span>
                    </div>

                    <div className="flex items-center mr-4">
                        <input id="checkbox2" type="checkbox" value="" className="w-4 h-4"></input>
                        <span className="ml-2  xt-gray-900 ">スプラトゥーン</span>
                    </div>
                     
                    <div className="flex items-center mr-4">
                        <input id="checkbox3" type="checkbox" value="" className="w-4 h-4 text-red-600 bg-gray-100 rounded border-red-300 focus:ring-red-500"></input>
                        <span className="ml-2  xt-gray-900 ">ポケモン</span>
                    </div>
                </div>
            </div>



            <div className="md:flex md:items-center mb-3">
                <div className="md:w-2/12">
                <label className="text-xl block text-gray-500 md:text-left mb-1 md:mb-0 pr-4">
                階層1
                </label>
                </div>

                <div className="md:w-2/12">
                <label className="text-xl block text-gray-500 md:text-left mb-1 md:mb-0 pr-4">
                階層2
                </label>
                </div>
                <div className="flex md:w-10/12">
                    <div className="flex items-center mr-4">
                        <input id="icheckbox1" type="checkbox" value="" className="w-4 h-4 "></input>
                        <span className="ml-2  xt-gray-900 ">要素</span>
                    </div>

                    <div className="flex items-center mr-4">
                        <input id="checkbox2" type="checkbox" value="" className="w-4 h-4"></input>
                        <span className="ml-2  xt-gray-900 ">要素</span>
                    </div>
                     
                    <div className="flex items-center mr-4">
                        <input id="checkbox3" type="checkbox" value="" className="w-4 h-4 text-red-600 bg-gray-100 rounded border-red-300 focus:ring-red-500"></input>
                        <span className="ml-2  xt-gray-900 ">要素</span>
                    </div>
                </div>
            </div>
            <div className="md:flex md:items-center mb-3">
                <div className="md:w-2/12">
               
                </div>
                <div className="md:w-2/12">
                <label className="text-xl block text-gray-500 md:text-left mb-1 md:mb-0 pr-4">
                階層2
                </label>
                </div>
                <div className="flex md:w-10/12">
                    <div className="flex items-center mr-4">
                        <input id="icheckbox1" type="checkbox" value="" className="w-4 h-4 "></input>
                        <span className="ml-2  xt-gray-900 ">aa</span>
                    </div>

                    <div className="flex items-center mr-4">
                        <input id="checkbox2" type="checkbox" value="" className="w-4 h-4"></input>
                        <span className="ml-2  xt-gray-900 ">aa</span>
                    </div>
                     
                    <div className="flex items-center mr-4">
                        <input id="checkbox3" type="checkbox" value="" className="w-4 h-4 text-red-600 bg-gray-100 rounded border-red-300 focus:ring-red-500"></input>
                        <span className="ml-2  xt-gray-900 ">aa</span>
                    </div>
                </div>
                
                
            </div>



*/
