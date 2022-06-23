import React from 'react';

import { db } from '../../lib/firebase';

const uuId = 'User4KpZPzCR6zJy0KUX';
let res_recommend = '';

let Recommend_channel: Array = null;
let Recommend_channel_len: Array = null;

export default function Recommend() {
  const handleOnClick_check_firebase = async () => {
    console.log(1);
    Recommend_channel = [];
    Recommend_channel_len = [];

    (async () => {
      try {
        const userRef = db.collection('user_info_sample').doc(uuId);
        const userDoc = await userRef.get();
        if (userDoc.exists) {
          //console.log('doc.id:', userDoc.id);
          console.log(userDoc.data());
          document.getElementById('user_data_place_born').textContent =
            userDoc.get('Attribute').Place_born[1];
          document.getElementById('user_data_place_live').textContent =
            userDoc.get('Attribute').Place_Live[1];
          let hobby_array = userDoc.get('Attribute').Hobby;
          let res_hobby = '';
          for (let i = 0; i < hobby_array.length; i++) {
            res_hobby += hobby_array[i];
            if (i != hobby_array.length - 1) res_hobby += ',';
          }
          document.getElementById('user_data_hobby').textContent = res_hobby;
          document.getElementById('user_data_sectence').textContent = userDoc.get('Sentence');
        } else {
          console.log('No such document!');
        }
      } catch (err) {
        console.log(`Error!: ${JSON.stringify(err)}`);
      }
    })();

    (async () => {
      try {
        res_recommend = '';

        const querySnapshot = await db.collection('Attribute_user_sample').get();
        console.log('data size: ' + querySnapshot.size);
        //console.log(querySnapshot.empty)
        //console.log(querySnapshot.docs.map(postDoc => postDoc.id))
        querySnapshot.forEach((postDoc) => {
          //console.log(postDoc.id, ' => ', JSON.stringify(postDoc.data()))
          //console.log(postDoc.id)
          let usersArray: Array = postDoc.get('Applicable_users_id');
          let f = 0;
          usersArray.forEach((x) => {
            if (uuId == x) {
              f = 1;
            }
          });
          if (f == 1 && postDoc.get('channel_frag') == 1) {
            Recommend_channel.push(postDoc.get('channel_name'));
            Recommend_channel_len.push(postDoc.get('len_Applicable_users_id'));
            res_recommend +=
              postDoc.get('channel_name') + '(' + postDoc.get('len_Applicable_users_id') + '人),';
          }
          /*
          if(f == 1 && postDoc.get('channel_frag') == 1){
            Recommend_channel.push(postDoc.get('channel_name'));
            Recommend_channel_len.push(postDoc.get('len_Applicable_users_id'));
          }
          */
          document.getElementById('recommend_channel_id').textContent = res_recommend;
          //elem.value = res_recommend;
          //console.log(res_recommend)
        });

        /*
        for(var i = 0; i < querySnapshot.size; i++){
          console.log(i)
          console.log(querySnapshot)
        }
        */

        //for(var i = 0; i < Recommend_channel.length; i++) console.log("チャンネル: "+Recommend_channel[i]+"--->人数"+Recommend_channel_len[i]);
      } catch (err) {
        console.log(`Error: ${JSON.stringify(err)}`);
      }
    })();
  };

  return (
    <div className="w-screen h-screen bg-white">
      <div className="w-4/5 h-3/5 bg-white">
        <button
          type="button"
          className="inline-block float-right py-2.5 px-6 leading-tight text-red-400 bg-red-100 hover:bg-red-200 focus:bg-red-200 active:bg-red-400 rounded-full border-2 border-red-300 focus:outline-none focus:ring-0 transition duration-150 text-1xl border-red-10"
          onClick={() => {
            handleOnClick_check_firebase();
          }}
        >
          Firebase読み取り
        </button>

        <br />

        <div className="m-5 rounded-xl">
          <p className="m-4 text-2xl text-gray-500">uuid:{uuId} 入力データ</p>
          <p>
            <span className="m-4 text-xl text-gray-700">名前</span>
            <span className="m-4 text-xl text-gray-500">{uuId}</span>
          </p>
          <p>
            <span className="m-4 text-xl text-gray-700">出身地</span>
            <span className="m-4 text-xl text-gray-500" id="user_data_place_born"></span>
          </p>
          <p>
            <span className="m-4 text-xl text-gray-700">居住地</span>
            <span className="m-4 text-xl text-gray-500" id="user_data_place_live"></span>
          </p>
          <p>
            <span className="m-4 text-xl text-gray-700">趣味</span>
            <span className="m-4 text-xl text-gray-500" id="user_data_hobby"></span>
          </p>
          <p>
            <span className="m-4 text-xl text-gray-700">最後に一言</span>
            <span className="m-4 text-xl text-gray-500" id="user_data_sectence"></span>
          </p>
        </div>

        <div className="m-5 rounded-xl border-2 border-red-300">
          <p className="m-4 text-2xl text-red-500">おすすめチャンネル</p>
          <p className="m-4 text-xl text-gray-500" id="recommend_channel_id"></p>
        </div>

        <div className="m-5 rounded-xl border-2 border-red-300">
          <p className="m-4 text-2xl text-red-500">おすすめユーザー</p>
          <p className="m-4 text-xl text-gray-500" id="recommend_user_id"></p>
        </div>
      </div>
    </div>
  );
}
