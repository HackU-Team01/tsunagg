import React from 'react';

import { db } from '../../lib/firebase';

const uuId = 'User4KpZPzCR6zJy0KUX';
let res_recommend = '';

let Recommend_channel: Array = null;
let Recommend_channel_len: Array = null;

export default function Recommend() {
  const handleOnClick_check_firebase = async () => {
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
        //console.log('data size: ' + querySnapshot.size);
        //console.log(querySnapshot.empty)
        //console.log(querySnapshot.docs.map(postDoc => postDoc.id))
        querySnapshot.forEach((postDoc) => {
          //console.log(postDoc.id, ' => ', JSON.stringify(postDoc.data()))
          //console.log(postDoc.id)
          try {
            let usersArray: Array = postDoc.get('Applicable_users_id');
            let f = 0;
            usersArray.forEach((x) => {
              if (uuId == x) f = 1;
            });
            //console.log(postDoc.get('channel_name'))
            if (
              f == 1 &&
              postDoc.get('channel_frag') == 1 &&
              postDoc.get('len_Applicable_users_id') >= 3
            ) {
              Recommend_channel.push(postDoc.get('channel_name'));
              Recommend_channel_len.push(postDoc.get('len_Applicable_users_id'));

              if (res_recommend != '') {
                res_recommend += ',';
              }
              res_recommend +=
                postDoc.get('channel_name') + '(' + postDoc.get('len_Applicable_users_id') + '人)';
            }
          } catch (err) {
            //console.log("null")
          }
        });
        document.getElementById('recommend_channel_id').textContent = res_recommend;
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

    (async () => {
      let res_recommend_user = '';
      try {
        const userRef = db.collection('match_user_sample').doc(uuId);
        db.runTransaction((transaction) => {
          return transaction.get(userRef).then((tokenSettingsDocSnapshot) => {
            if (!tokenSettingsDocSnapshot.exists) {
              throw 'Document does not exist!';
            }

            let tokensMap = tokenSettingsDocSnapshot.data().match_user_info;
            console.log(12);
            console.log(tokensMap);
            Object.keys(tokensMap).forEach((e) => {
              console.log(e, tokensMap[e]);

              res_recommend_user += e + '(';
              tokensMap[e].forEach((x) => {
                res_recommend_user += x + ',';
              });
              res_recommend_user += ')';
              console.log(res_recommend_user);
            });
          });
        })
          .then(function () {
            console.log(res_recommend_user);
            document.getElementById('recommend_user_id').textContent = res_recommend_user;
          })
          .catch((error) => {
            console.log('Transaction failed: ', error);
          });
      } catch (err) {
        console.log(`Error!: ${JSON.stringify(err)}`);
      }
    })();
  };

  return (
    <div className="bg-white">
      <button
        type="button"
        className="inline-block float-right py-2.5 px-6 m-3 text-xs font-medium leading-tight text-gray-900 bg-gray-100 thover:bg-gray-300 focus:bg-gray-300 active:bg-gray-400 rounded-full border-2 focus:outline-none focus:ring-0 shadow-md hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out hover:scale-110 border-gray-10"
        onClick={() => {
          handleOnClick_check_firebase();
        }}
      >
        Firebase読み取り
      </button>
      <br />
      <br />

      <div className="m-3 rounded-xl border-2 border-gray-300 shadow-md">
        <div className="m-3">
          <p className="m-4 text-2xl text-red-500">入力データ</p>
          <p className="m-4 text-xl text-gray-500">uuid: {uuId}</p>
          <p>
            <span className="m-4 text-xl text-gray-700">名前:</span>
            <span className="m-4 text-xl text-gray-500">{uuId}</span>
          </p>
          <p>
            <span className="m-4 text-xl text-gray-700">出身地:</span>
            <span className="m-4 text-xl text-gray-500" id="user_data_place_born"></span>
          </p>
          <p>
            <span className="m-4 text-xl text-gray-700">居住地:</span>
            <span className="m-4 text-xl text-gray-500" id="user_data_place_live"></span>
          </p>
          <p>
            <span className="m-4 text-xl text-gray-700">趣味:</span>
            <span className="m-4 text-xl text-gray-500" id="user_data_hobby"></span>
          </p>
          <p>
            <span className="m-4 text-xl text-gray-700">最後に一言:</span>
            <span className="m-4 text-xl text-gray-500" id="user_data_sectence"></span>
          </p>
        </div>
      </div>

      <div className="m-3 rounded-xl border-2 border-gray-300 shadow-md">
        <div className="m-3">
          <p className="m-4 text-2xl text-red-500">おすすめチャンネル</p>
          <p className="m-4 text-xl text-gray-500" id="recommend_channel_id"></p>
        </div>
      </div>

      <div className="m-3 rounded-xl border-2 border-gray-300 shadow-md">
        <div className="m-3">
          <p className="m-4 text-2xl text-red-500">おすすめユーザー</p>
          <p className="m-4 text-xl text-gray-500" id="recommend_user_id"></p>
        </div>
      </div>
    </div>
  );
}
