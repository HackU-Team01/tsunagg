import React from 'react';
import Image from 'next/image';
import { db } from '../../lib/firebase';

const uuId = 'User4KpZPzCR6zJy0KUX';
let res_recommend = '';

let Recommend_channel: Array = null;
let Recommend_channel_len: Array = null;
let Recommend_user: Array = null;
let Recommend_user_atribute: Array = null;
let Recommend_user_len: Array = null;

function handleOnClick_join_channel(e) {
  //POST request URL
  //'https://httpbin.org/post'
  const POST_request_URL = 'https://httpbin.org/post';
  //{"data":{"Channel":{"channel_name":"Twitter_channel"},"Authorization":{"uuId":"User4KpZPzCR6zJy0KUX"}}}

  var channel_name = e.currentTarget['name'];
  console.log(uuId, channel_name);

  alert('リクエスト送信');
  const axios = require('axios');
  console.log('POST リクエスト送信開始');

  let args = {
    data: {
      Channel: { channel_name },
      Authorization: { uuId },
    },
  };
  //console.log(args);
  axios
    .post(POST_request_URL, args)
    .then(function (response: any) {
      console.log(response.data);
      console.log(response.headers);
      console.log(args.data);
    })
    .catch(function (error: any) {
      console.log(error);
    })
    .then(function () {
      console.log('POST リクエスト送信　終了');
    });
}

export default function Recommend() {
  const handleOnClick_check_firebase = async () => {
    Recommend_channel = [];
    Recommend_channel_len = [];
    Recommend_user = [];
    Recommend_user_atribute = [];
    Recommend_user_len = [];

    (async () => {
      try {
        const userRef = db.collection('user_info_sample').doc(uuId);
        const userDoc = await userRef.get();
        if (userDoc.exists) {
          //console.log('doc.id:', userDoc.id);
          //console.log(userDoc.data());
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
        querySnapshot.forEach((postDoc) => {
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

        var target = document.getElementById('recommend_channel_table');
        while (target.firstChild) {
          //console.log(2);
          target.removeChild(target.firstChild);
        }
        var I = [];
        for (var i = 0; i < Recommend_channel.length; i++) I.push(i);
        I.sort(function (a, b) {
          return Recommend_channel_len[a] < Recommend_channel_len[b] ? 1 : -1;
        });

        for (var ii = 0; ii < Recommend_channel.length; ii++) {
          var i = I[ii];
          var newElement = document.createElement('tbody');
          var newContent = document.createElement('tr');
          newContent.className = 'bg-white border-b';

          var newChild = document.createElement('th');
          newChild.scope = 'row';
          newChild.className = 'px-6 py-4 font-medium text-gray-900 whitespace-nowrap';
          newChild.appendChild(document.createTextNode(Recommend_channel[i]));
          newContent.appendChild(newChild);

          newChild = document.createElement('td');
          newChild.className = 'px-6 py-4  font-medium text-gray-400 whitespace-nowrap';
          newChild.appendChild(document.createTextNode(Recommend_channel_len[i] + '人'));
          newContent.appendChild(newChild);

          newChild = document.createElement('td');
          newChild.className = 'px-6 py-4  font-medium text-gray-900 whitespace-nowrap';
          var newChildChild = document.createElement('button');
          newChildChild.className =
            'text-red-300 transition duration-150 hover:scale-110 hover:text-red-600';
          newChildChild.addEventListener('click', handleOnClick_join_channel);
          newChildChild.name = Recommend_channel[i];
          newChildChild.appendChild(document.createTextNode('参加する'));
          newChild.appendChild(newChildChild);
          newContent.appendChild(newChild);
          newElement.appendChild(newContent);

          var parentDiv = document.getElementById('recommend_channel_table');
          parentDiv.appendChild(newElement);
        }
      } catch (err) {
        console.log(`Error: ${JSON.stringify(err)}`);
      }
    })();

    (async () => {
      try {
        const user_image = new Map<string, string>();
        const user_name = new Map<string, string>();
        const yyy = await db.collection('user_sample').get();
        //console.log('data size ->' + yyy.size);
        yyy.forEach((userDoc) => {
          user_image.set(userDoc.id, userDoc.get('Image'));
          user_name.set(userDoc.id, userDoc.get('Name'));
        });

        const userRef = db.collection('match_user_sample').doc(uuId);
        db.runTransaction((transaction) => {
          return transaction.get(userRef).then((tokenSettingsDocSnapshot) => {
            if (!tokenSettingsDocSnapshot.exists) {
              throw 'Document does not exist!';
            }
            let tokensMap = tokenSettingsDocSnapshot.data().match_user_info;
            //console.log(tokensMap);
            Object.keys(tokensMap).forEach((e) => {
              //console.log(e, tokensMap[e]);
              Recommend_user.push(e);
              var xx = '';
              var cn = 0;
              tokensMap[e].forEach((x) => {
                xx += x + ' ';
                cn++;
              });
              Recommend_user_len.push(cn);
              Recommend_user_atribute.push(xx);
            });
          });
        })
          .then(function () {
            var target = document.getElementById('recommend_user_table');
            while (target.firstChild) {
              target.removeChild(target.firstChild);
            }
            var I = [];
            for (var i = 0; i < Recommend_user.length; i++) I.push(i);
            I.sort(function (a: number, b: number) {
              return Recommend_user_len[a] < Recommend_user_len[b] ? 1 : -1;
            });
            console.log(I);

            for (var ii = 0; ii < Recommend_user.length; ii++) {
              var i = I[ii];
              var newElement = document.createElement('tbody');
              var newContent = document.createElement('tr');
              newContent.className = 'bg-white border-b';

              var newChild = document.createElement('th');
              newChild.scope = 'row';
              newChild.className = '';
              var newChildChild = document.createElement('img');
              newChildChild.className =
                'transition duration-150 ease-in-out rounded-full border-2 border-red-500';
              newChildChild.width = '40';
              newChildChild.height = '40';
              //newChildChild.href = '#';
              newChildChild.src = user_image.get(Recommend_user[i]); //"/usericon1.png"
              newChild.appendChild(newChildChild);
              newContent.appendChild(newChild);

              newChild = document.createElement('th');
              newChild.scope = 'row';
              newChild.className = 'px-6 py-4 font-medium text-gray-900 whitespace-nowrap';
              newChild.appendChild(document.createTextNode(user_name.get(Recommend_user[i])));
              newContent.appendChild(newChild);

              newChild = document.createElement('td');
              newChild.className = 'px-6 py-4 text-gray-400';
              newChild.appendChild(document.createTextNode(Recommend_user_atribute[i]));
              newContent.appendChild(newChild);

              newChild = document.createElement('td');
              newChild.className = 'px-6 py-4  font-medium text-gray-400 whitespace-nowrap';
              var nweChildChild = document.createElement('a');
              nweChildChild.className = 'font-medium text-blue-600 hover:underline';
              nweChildChild.href = '#';
              nweChildChild.appendChild(document.createTextNode(''));
              newChild.appendChild(nweChildChild);
              newContent.appendChild(newChild);
              newElement.appendChild(newContent);

              var parentDiv = document.getElementById('recommend_user_table');
              parentDiv.appendChild(newElement);
            }
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
        </div>
        <div className="relative overflow-x-auto sm:rounded-lg m-4">
          <table className="w-full text-sm text-left text-gray-500">
            <tbody>
              <tr className="bg-white border-b">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                  名前
                </th>
                <td className="px-6 py-4">{uuId}</td>
              </tr>
              <tr className="bg-white border-b">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                  出身地
                </th>
                <td className="px-6 py-4">
                  <span className=" " id="user_data_place_born"></span>
                </td>
              </tr>
              <tr className="bg-white border-b">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                  居住地
                </th>
                <td className="px-6 py-4">
                  <span className="" id="user_data_place_live"></span>
                </td>
              </tr>
              <tr className="bg-white border-b">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                  趣味
                </th>
                <td className="px-6 py-4">
                  <span className="" id="user_data_hobby"></span>
                </td>
              </tr>
              <tr className="bg-white border-b">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                  最後に一言
                </th>
                <td className="px-6 py-4">
                  <span className="" id="user_data_sectence"></span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="m-3 rounded-xl border-2 border-gray-300 shadow-md">
        <div className="m-3">
          <p className="m-4 text-2xl text-red-500">おすすめチャンネル</p>
          <p className="m-4 text-xl text-gray-500" id="recommend_channel_id"></p>

          <div className="relative overflow-x-auto sm:rounded-lg m-4">
            <table className="w-full text-sm text-left text-gray-500" id="recommend_channel_table">
              <thead className="text-xs text-gray-700 uppercase bg-white">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    チャンネル名
                  </th>
                  <th scope="col" className="px-6 py-3">
                    人数
                  </th>
                  <th scope="col" className="px-6 py-3">
                    <span className="sr-only">参加</span>
                  </th>
                </tr>
              </thead>
            </table>
          </div>
        </div>
      </div>

      <div className="m-3 rounded-xl border-2 border-gray-300 shadow-md">
        <div className="m-3">
          <p className="m-4 text-2xl text-red-500">おすすめユーザー</p>
          <p className="m-4 text-xl text-gray-500" id="recommend_user_id"></p>

          <div className="relative overflow-x-auto sm:rounded-lg m-4">
            <table className="w-full text-sm text-left text-gray-500" id="recommend_user_table">
              <thead className="text-xs text-gray-700 uppercase bg-white">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    おすすめユーザー
                  </th>
                  <th scope="col" className="px-6 py-3">
                    共通点
                  </th>
                  <th scope="col" className="px-6 py-3">
                    <span className="sr-only"> </span>
                  </th>
                </tr>
              </thead>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
