import axios from 'axios';

import { db } from '../../lib/firebase';
import Form_hobby from './Form_hobby';
import Form_friend_type from './Form_friend_type';
import Form_place_option, { map_place } from './Form_place';

//POST request URL
//'https://httpbin.org/post'
//'http://localhost:8000/api/editProfile'
const POST_request_URL = 'http://localhost:8000/api/writeFirebase';

//uuId
const uuId = 'User4KpZPzCR6zJy0KUX';

export default function Input_Form() {
  //***********************************************************
  //Firebaseにデータがある場合の読み取り
  const handleOnClick_testtest = async () => {
    (async () => {
      try {
        const userRef = db.collection('user_info_sample').doc(uuId);
        const userDoc = await userRef.get();
        if (userDoc.exists) {
          console.log('doc.id:', userDoc.id);
          console.log(userDoc.data());
          //console.log(userDoc.get("Sentence"));
          //console.log((userDoc.get("Attribute")).Hobby)
          //console.log((userDoc.get("Attribute")).Place_born[1])

          let elem = document.getElementById('Name_input_form');
          elem.value = uuId;

          elem = document.getElementById('Sentence_input_form');
          elem.value = userDoc.get('Sentence');

          elem = document.getElementById('select_Place_born');
          elem.value = userDoc.get('Attribute').Place_born[1];
          elem = document.getElementById('select_Place_live');
          elem.value = userDoc.get('Attribute').Place_Live[1];

          const hobby_checkbox = document.getElementsByName('hobby');
          const hobby_data = userDoc.get('Attribute').Hobby;
          for (let i = 0; i < hobby_checkbox.length; i++) {
            hobby_checkbox[i].checked = false;
            hobby_checkbox[i].className =
              'inline-block px-6 py-2 border-2 border-red-300 text-red-300 text-sm leading-tight rounded-full border-red-300  transition duration-150 ease-in-out hover:scale-110 ';
            for (let j = 0; j < hobby_data.length; j++) {
              if (hobby_checkbox[i].value == hobby_data[j]) {
                hobby_checkbox[i].checked = true;
                hobby_checkbox[i].className =
                  'inline-block px-6 py-2 border-2 bg-red-400 text-white text-sm leading-tight rounded-full border-red-300';
              }
            }
          }
        } else {
          console.log('No such document!');
        }

        userRef = db.collection('user_sample').doc(uuId);
        userDoc = await userRef.get();
        if (userDoc.exists) {
          //console.log('doc.id:', userDoc.id);
          //console.log(userDoc.data());

          let elem = document.getElementById('Name_input_form');
          elem.value = userDoc.get('Name');
        } else {
          console.log('No such document!');
        }

        //await db.app.delete()
      } catch (err) {
        console.log(`Error!: ${JSON.stringify(err)}`);
      }
    })();
  };

  //***********************************************************

  const handleOnClick_clear = async (all_clear: boolean) => {
    const hobby_checkbox = document.getElementsByName('hobby');
    for (let i = 0; i < hobby_checkbox.length; i++) {
      if (hobby_checkbox[i].checked == true) {
        hobby_checkbox[i].checked = false;
        hobby_checkbox[i].className =
          'inline-block px-6 py-2 border-2 border-red-300 text-red-300 text-sm leading-tight rounded-full border-red-300';
      }
    }
    if (all_clear) {
      let elem = document.getElementById('Name_input_form');
      elem.value = '';
      elem = document.getElementById('Sentence_input_form');
      elem.value = '';

      elem = document.getElementById('select_Place_born');
      elem.value = '';
      elem = document.getElementById('select_Place_live');
      elem.value = '';
    }
  };

  const handleOnClick = async () => {
    const Place_born = document.getElementById('select_Place_born');
    const Place_live = document.getElementById('select_Place_live');
    const Name = document.getElementById('Name_input_form');
    //const HobbyOther = document.getElementById('HobbyOther_input_form');
    const Sentence = document.getElementById('Sentence_input_form');

    const hobby_checkbox = document.getElementsByName('hobby');
    let checked_hobby_list = [];
    for (let i = 0; i < hobby_checkbox.length; i++) {
      if (hobby_checkbox[i].checked) checked_hobby_list.push(hobby_checkbox[i].value);
    }

    alert('リクエスト送信');
    const axios = require('axios');
    console.log('POST リクエスト送信開始');

    let args = {
      data: {
        Name: Name.value,
        Attribute: {
          Hobby: checked_hobby_list,
          Place_born: [map_place.get(Place_born.value), Place_born.value],
          Place_live: [map_place.get(Place_live.value), Place_live.value],
        },
        Sentence: Sentence.value,
      },
      headers: { Authorization: uuId },
    };
    //console.log(args);
    //axios.defaults.headers.post['Authorization'] = uuId;
    //axios.defaults.headers.post['Authorization'] = 'Bearer '+uuId;
    axios
      .post(
        POST_request_URL,
        args,
        //{headers: {"Authorization": uuId, "Access-Control-Allow-Origin":"http://localhost:8000/api/writeFirebase"}}
        //{headers: {"Authorization": "Bearer "+uuId}}
      )
      .then(function (response: any) {
        console.log(1111);
        console.log(response.data);
        console.log(response.headers);
        console.log(args.data);
        console.log(args.headers);
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
      <div className="float-right space-x-2">
        <button
          type="button"
          className="inline-block py-2.5 px-6 text-xs font-medium leading-tight text-gray-900 bg-gray-100 thover:bg-gray-300 focus:bg-gray-300 active:bg-gray-400 rounded-full border-2 focus:outline-none focus:ring-0 shadow-md hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out hover:scale-110 border-gray-10"
          onClick={() => {
            handleOnClick_testtest();
          }}
        >
          Firebase読み取り
        </button>
        <button
          type="button"
          className="inline-block py-2.5 px-6 text-xs font-medium leading-tight text-gray-900 bg-gray-100 thover:bg-gray-300 focus:bg-gray-300 active:bg-gray-400 rounded-full border-2 focus:outline-none focus:ring-0 shadow-md hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out hover:scale-110 border-gray-10"
          onClick={() => {
            handleOnClick_clear(true);
          }}
        >
          クリア
        </button>
      </div>

      <br />
      <br />

      <label className="block pr-4 mb-1 text-xl text-red-500 md:mb-0 md:text-left">名前</label>
      <input
        className="block py-3 px-4 w-full leading-tight text-gray-700 bg-white focus:bg-white rounded border border-gray-300 focus:border-red-500 focus:outline-none appearance-none"
        type="text"
        id="Name_input_form"
        defaultValue={uuId}
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
            id="HobbyOther_input_form"
            defaultValue=""
          />
        </div>
        <div className="md:w-2/12"></div>
        <div className="md:w-4/12">
          <button
            type="button"
            className="inline-block py-2.5 px-6 text-xs font-medium leading-tight text-gray-900 bg-gray-100 thover:bg-gray-300 focus:bg-gray-300 active:bg-gray-400 rounded-full border-2 shadow-md hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out hover:scale-110 border-gray-10"
            onClick={() => {
              handleOnClick_clear(false);
            }}
          >
            クリア
          </button>
        </div>
      </div>

      <br></br>

      <label className="block pr-4 mb-1 text-xl text-red-500 md:mb-0 md:text-left">探す相手</label>
      <Form_friend_type />
      <br></br>

      <label className="block pr-4 mb-1 text-xl text-red-500 md:mb-0 md:text-left">
        最後に一言{' '}
      </label>
      <textarea
        rows="5"
        className="block py-2 px-4 w-full leading-tight text-gray-700 bg-white focus:bg-white rounded border border-gray-300 focus:border-red-500 focus:outline-none appearance-none"
        type="text"
        id="Sentence_input_form"
        defaultValue=""
      />

      <button
        type="button"
        className="inline-block py-4 px-11 my-10 text-xl leading-tight text-white bg-red-400 hover:bg-red-300 focus:bg-red-500 active:bg-red-500 rounded-full border-2 border-red-300 focus:outline-none focus:ring-0 transition duration-150 hover:scale-110 border-red-10"
        onClick={() => {
          handleOnClick();
        }}
      >
        送信
      </button>
    </form>
  );
}
