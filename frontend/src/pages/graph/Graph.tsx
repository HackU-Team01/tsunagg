import Image from 'next/image';
import React from 'react';

import { db } from '../../lib/firebase';
import Graph_filter_place from './Graph_filter_place';
import Graph_filter_hobby from './Graph_filter_hobby';

const uuId = 'User4KpZPzCR6zJy0KUX';

let DIR = '';
var nodes = null;
var nodes_number = -1;
var edges = null;
var network = null;

function draw() {
  var container = document.getElementById('mynetwork');
  const nodes_dataset = new vis.DataSet(nodes);
  const edges_dataset = new vis.DataSet(edges);
  const data = {
    nodes: nodes_dataset,
    edges: edges_dataset,
  };

  const options = {
    interaction: {
      dragNodes: true,
      dragView: true,
      hideEdgesOnDrag: false,
      hideEdgesOnZoom: false,
      hideNodesOnDrag: false,
      hover: false,
      hoverConnectedEdges: true,
      keyboard: {
        enabled: false,
        speed: { x: 10, y: 10, zoom: 0.02 },
        bindToWindow: true,
        autoFocus: true,
      },
      multiselect: false,
      navigationButtons: false,
      selectable: true,
      selectConnectedEdges: true,
      tooltipDelay: 300,
      zoomSpeed: 1,
      zoomView: true,
    },
    nodes: {
      borderWidth: 3,
      size: 30,
      chosen: true,
      color: {
        border: 'red',
        background: 'white',
        highlight: {
          border: '#2B7CE9',
          background: '#D2E5FF',
        },
      },
      font: { color: 'black', size: 10 },
      scaling: {
        customScalingFunction: function (min, max, total, value) {
          return value / total;
        },
        min: 10,
        max: 70,
      },
      title: undefined,
    },
    edges: {
      color: 'orangered',
      length: 120,
      font: {
        color: '#343434',
        size: 31,
      },
      title: undefined,
    },
  };
  network = new vis.Network(container, data, options);
}

export default function DrawNetwork() {
  var fliter_flug = 0;
  const handleOnClick_filer_on_off = async () => {
    const elem = document.getElementById('filter_html');
    if (fliter_flug == 1) {
      elem.className = 'hidden';
      fliter_flug = 0;
    } else {
      elem.className = '';
      fliter_flug = 1;
    }
    //elem.className="z-[20] m-2 invisible";
  };
  const handleOnClick_filter_clear = async () => {
    document.getElementById('edge_w').value = '0';
    document.getElementById('select_Place_born').value = '-1';
    document.getElementById('select_Place_live').value = '-1';
    document.getElementById('select_hobby1').value = '-1';
    document.getElementById('select_hobby2').value = '-1';
    document.getElementById('select_hobby3').value = '-1';
    document.getElementById('select_hobby4').value = '-1';
    document.getElementById('select_friend_type').value = '-1';
  };

  const handleOnClick_draw_network = async () => {
    const head = document.getElementsByTagName('head')[0] as HTMLElement;
    const scriptUrl = document.createElement('script');
    scriptUrl.type = 'text/javascript';
    scriptUrl.src = 'https://unpkg.com/vis-network/standalone/umd/vis-network.min.js';
    head.appendChild(scriptUrl);

    nodes = [];
    edges = [];
    var used_user = new Set();
    var cnt = 1;
    var map_user_node = new Map<string, number>();

    (async () => {
      try {
        const userRef = db.collection('user_info_sample').doc(uuId);
        const userDoc = await userRef.get();
        if (userDoc.exists) {
          //console.log(userDoc.data());
          used_user.add(userDoc.id);
          map_user_node.set(userDoc.id, 0);
          nodes = [
            {
              id: 0,
              value: 80,
              shape: 'circularImage',
              image: DIR + 'usericon1.png',
              label: uuId,
              title:
                'uuid: ' +
                userDoc.id +
                '\n' +
                '出身:' +
                userDoc.get('Attribute').Place_born[1] +
                '\n' +
                '居住地:' +
                userDoc.get('Attribute').Place_Live[1] +
                '\n' +
                '趣味:' +
                userDoc.get('Attribute').Hobby +
                '\n' +
                '一言:' +
                userDoc.get('Sentence') +
                '\n',
            },
          ];
          //cnt++;
        } else {
          console.log('No such document!');
        }
      } catch (err) {
        console.log(`Error!: ${JSON.stringify(err)}`);
      }

      try {
        const userRef = db.collection('match_user_sample').doc(uuId);
        db.runTransaction((transaction) => {
          return transaction.get(userRef).then((tokenSettingsDocSnapshot) => {
            if (!tokenSettingsDocSnapshot.exists) {
              throw 'Document does not exist!';
            }

            let tokensMap = tokenSettingsDocSnapshot.data().match_user_info;

            Object.keys(tokensMap).forEach((e) => {
              used_user.add(e);
              map_user_node.set(e, cnt);
              nodes.push({
                id: cnt,
                value: 30,
                shape: 'circularImage',
                image: DIR + 'usericon1.png',
                label: e,
                title: e,
              });
              cnt++;

              var edge_title =
                uuId + '-' + e + '\n 繋がりの強さ: ' + tokensMap[e].length + '\n 共通点:  \n';
              tokensMap[e].forEach((x) => {
                edge_title += '　　　　　' + x + '\n';
              });
              edges.push({
                from: map_user_node.get(uuId),
                to: map_user_node.get(e),
                value: tokensMap[e].length * 0.5,
                title: edge_title,
              });
            });
          });
        })
          .then(function () {
            console.log(1111);
            draw();
          })
          .catch((error) => {
            console.log('Transaction failed: ', error);
          });
      } catch (err) {
        console.log(`Error!: ${JSON.stringify(err)}`);
      }
    })();
  };

  const handleOnClick_draw_network_2 = async () => {
    const head = document.getElementsByTagName('head')[0] as HTMLElement;
    const scriptUrl = document.createElement('script');
    scriptUrl.type = 'text/javascript';
    scriptUrl.src = 'https://unpkg.com/vis-network/standalone/umd/vis-network.min.js';
    head.appendChild(scriptUrl);

    nodes = [];
    edges = [];
    var used_user = new Set();
    var cnt = 1;
    var map_user_node = new Map<string, number>();

    (async () => {
      try {
        const userRef = db.collection('user_info_sample').doc(uuId);
        const userDoc = await userRef.get();
        if (userDoc.exists) {
          //console.log(userDoc.data());
          used_user.add(userDoc.id);
          map_user_node.set(userDoc.id, 0);
          nodes = [
            {
              id: 0,
              value: 80,
              shape: 'circularImage',
              image: DIR + 'usericon1.png',
              label: uuId,
              title:
                'uuid: ' +
                userDoc.id +
                '\n' +
                '出身:' +
                userDoc.get('Attribute').Place_born[1] +
                '\n' +
                '居住地:' +
                userDoc.get('Attribute').Place_Live[1] +
                '\n' +
                '趣味:' +
                userDoc.get('Attribute').Hobby +
                '\n' +
                '一言:' +
                userDoc.get('Sentence') +
                '\n',
            },
          ];
          //cnt++;
        } else {
          console.log('No such document!');
        }
      } catch (err) {
        console.log(`Error!: ${JSON.stringify(err)}`);
      }

      async function add_second_node() {
        var used_user2 = new Set();
        var cn = cnt + 1;
        async function search_next_node(name: string, ff: number) {
          try {
            const userRef = db.collection('match_user_sample').doc(name);
            db.runTransaction((transaction) => {
              return transaction.get(userRef).then((tokenSettingsDocSnapshot) => {
                if (!tokenSettingsDocSnapshot.exists) {
                  throw 'Document does not exist!';
                }

                let tokensMap = tokenSettingsDocSnapshot.data().match_user_info;

                Object.keys(tokensMap).forEach((e) => {
                  if (!used_user.has(e) && !used_user2.has(e)) {
                    used_user2.add(e);
                    map_user_node.set(e, cn);
                    nodes.push({
                      id: cn,
                      value: 30,
                      shape: 'circularImage',
                      image: DIR + 'usericon1.png',
                      label: e,
                      title: e,
                    });
                    cn++;

                    var edge_title =
                      name + '-' + e + '\n 繋がりの強さ: ' + tokensMap[e].length + '\n 共通点:  \n';
                    tokensMap[e].forEach((x) => {
                      edge_title += '　　　　　' + x + '\n';
                    });
                    edges.push({
                      from: map_user_node.get(name),
                      to: map_user_node.get(e),
                      value: tokensMap[e].length * 0.5,
                      title: edge_title,
                    });
                  }
                });
              });
            })
              .then(function () {
                if (ff == cnt - 1) {
                  console.log('finish');
                  draw();
                }
              })
              .catch((error) => {
                console.log('Transaction failed: ', error);
              });
          } catch (err) {
            console.log(`Error!: ${JSON.stringify(err)}`);
          }
        }
        for (var i = 0; i < cnt; i++) {
          //console.log(i)
          await search_next_node(nodes[i].label, i);
        }
      }

      try {
        const userRef = db.collection('match_user_sample').doc(uuId);
        db.runTransaction((transaction) => {
          return transaction.get(userRef).then((tokenSettingsDocSnapshot) => {
            if (!tokenSettingsDocSnapshot.exists) {
              throw 'Document does not exist!';
            }

            let tokensMap = tokenSettingsDocSnapshot.data().match_user_info;

            Object.keys(tokensMap).forEach((e) => {
              used_user.add(e);
              map_user_node.set(e, cnt);
              nodes.push({
                id: cnt,
                value: 30,
                shape: 'circularImage',
                image: DIR + 'usericon1.png',
                label: e,
                title: e,
              });
              cnt++;

              var edge_title =
                uuId + '-' + e + '\n 繋がりの強さ: ' + tokensMap[e].length + '\n 共通点:  \n';
              tokensMap[e].forEach((x) => {
                edge_title += '　　　　　' + x + '\n';
              });
              edges.push({
                from: map_user_node.get(uuId),
                to: map_user_node.get(e),
                value: tokensMap[e].length * 0.5,
                title: edge_title,
              });
            });
          });
        })
          .then(function () {
            console.log(1111);
            add_second_node();
          })
          .catch((error) => {
            console.log('Transaction failed: ', error);
          });
      } catch (err) {
        console.log(`Error!: ${JSON.stringify(err)}`);
      }
    })();
  };

  const handleOnClick_draw_network_all = async () => {
    const head = document.getElementsByTagName('head')[0] as HTMLElement;
    const scriptUrl = document.createElement('script');
    scriptUrl.type = 'text/javascript';
    scriptUrl.src = 'https://unpkg.com/vis-network/standalone/umd/vis-network.min.js';
    head.appendChild(scriptUrl);

    nodes = [];
    edges = [];
    var cnt = 0;

    var user_node_data = null;
    var map_user_node = new Map<string, number>();
    var edge_all: number[][] = new Array();
    var edge_all_data: string[][] = new Array();

    (async () => {
      try {
        user_node_data = await db.collection('user_info_sample').get();
        console.log('data size: ' + user_node_data.size);
        //console.log(user_node_data.empty)
        //console.log(user_node_data.docs.map(postDoc => postDoc.id))
        user_node_data.forEach((userDoc) => {
          //console.log(postDoc.id, ' => ', JSON.stringify(postDoc.data()))
          //console.log(userDoc.data());
          const node_sz = 20;
          if (userDoc.id == uuId) node_sz = 60;
          map_user_node.set(userDoc.id, cnt);
          nodes.push({
            id: cnt,
            value: node_sz,
            shape: 'circularImage',
            image: DIR + 'usericon1.png',
            label: userDoc.id,
            physics: false,
            title:
              'uuid: ' +
              userDoc.id +
              '\n' +
              '出身: ' +
              userDoc.get('Attribute').Place_born[1] +
              '\n' +
              '居住地: ' +
              userDoc.get('Attribute').Place_Live[1] +
              '\n' +
              '趣味: ' +
              userDoc.get('Attribute').Hobby +
              '\n' +
              '一言: ' +
              userDoc.get('Sentence') +
              '\n',
          });
          cnt++;
        });

        for (var i = 0; i < cnt; i++) {
          edge_all[i] = new Array();
          edge_all_data[i] = new Array();
          for (var j = 0; j < cnt; j++) {
            edge_all[i][j] = 0;
            edge_all_data[i][j] = '';
          }
        }
        async function create_edge(name: string, ff, number) {
          //console.log(name)
          try {
            const userRef = db.collection('match_user_sample').doc(name);
            db.runTransaction((transaction) => {
              return transaction.get(userRef).then((tokenSettingsDocSnapshot) => {
                if (!tokenSettingsDocSnapshot.exists) {
                  throw 'Document does not exist!';
                }

                let tokensMap = tokenSettingsDocSnapshot.data().match_user_info;

                //console.log(tokensMap);
                Object.keys(tokensMap).forEach((e) => {
                  //console.log(e, tokensMap[e]);
                  if (map_user_node.get(name) < map_user_node.get(e)) {
                    var edge_title =
                      name + '-' + e + '\n 繋がりの強さ: ' + tokensMap[e].length + '\n 共通点:  \n';
                    tokensMap[e].forEach((x) => {
                      edge_title += '　　　　　' + x + '\n';
                    });
                    edges.push({
                      from: map_user_node.get(name),
                      to: map_user_node.get(e),
                      value: tokensMap[e].length * 0.5,
                      title: edge_title,
                    });
                  }
                });
              });
            })
              .then(function () {
                if (ff == cnt - 1) {
                  console.log('finish');
                  draw();
                }
              })
              .catch((error) => {
                console.log('Transaction failed: ', error);
              });
          } catch (err) {
            console.log(`Error!: ${JSON.stringify(err)}`);
          }
        }
        for (var i = 0; i < cnt; i++) {
          //console.log(i)
          await create_edge(nodes[i].label, i);
        }
      } catch (err) {
        console.log(`Error: ${JSON.stringify(err)}`);
      }
    })();
  };

  const handleOnClick_draw_network_filter = async () => {
    const filter_edge_w = document.getElementById('edge_w').value;
    const fliter_place_born = document.getElementById('select_Place_born').value;
    const fliter_place_live = document.getElementById('select_Place_live').value;
    var filter_hobby = [];
    filter_hobby.push(document.getElementById('select_hobby1').value);
    filter_hobby.push(document.getElementById('select_hobby2').value);
    filter_hobby.push(document.getElementById('select_hobby3').value);
    filter_hobby.push(document.getElementById('select_hobby4').value);
    const filter_friend_type = document.getElementById('select_friend_type').value;
    console.log(filter_edge_w, fliter_place_born, fliter_place_live);
    console.log(filter_hobby);
    console.log(filter_friend_type);

    const head = document.getElementsByTagName('head')[0] as HTMLElement;
    const scriptUrl = document.createElement('script');
    scriptUrl.type = 'text/javascript';
    scriptUrl.src = 'https://unpkg.com/vis-network/standalone/umd/vis-network.min.js';
    head.appendChild(scriptUrl);

    nodes = [];
    edges = [];
    var cnt = 0;

    var user_node_data = null;
    var map_user_node = new Map<string, number>();
    var edge_all: number[][] = new Array();
    var edge_all_data: string[][] = new Array();

    var used_user = new Set();

    (async () => {
      try {
        user_node_data = await db.collection('user_info_sample').get();
        console.log('data size: ' + user_node_data.size);

        user_node_data.forEach((userDoc) => {
          var use = 0;
          var filter_on = 0;
          if (fliter_place_born != '-1') {
            filter_on = 1;
            if (
              userDoc.get('Attribute').Place_born[1] == fliter_place_born ||
              userDoc.get('Attribute').Place_born[0] == fliter_place_born
            )
              use = 1;
          }
          if (fliter_place_live != -1) {
            filter_on = 1;
            if (
              userDoc.get('Attribute').Place_Live[1] == fliter_place_live ||
              userDoc.get('Attribute').Place_Live[0] == fliter_place_live
            )
              use = 1;
          }
          userDoc.get('Attribute').Hobby.forEach((x) => {
            filter_hobby.forEach((y) => {
              if (y != '-1') {
                filter_on = 1;
                if (x == y) use = 1;
              }
            });
          });
          if (filter_friend_type != '-1') {
            filter_on = 1;
            userDoc.get('Attribute').Hobby.forEach((x) => {
              if (x == filter_friend_type) {
                use = 1;
              }
            });
          }
          if (filter_on == 0 || use == 1) {
            var node_sz = 20;
            if (userDoc.id == uuId) node_sz = 60;
            map_user_node.set(userDoc.id, cnt);
            used_user.add(userDoc.id);
            nodes.push({
              id: cnt,
              value: node_sz,
              shape: 'circularImage',
              image: DIR + 'usericon1.png',
              label: userDoc.id,
              physics: false,
              title:
                'uuid: ' +
                userDoc.id +
                '\n' +
                '出身: ' +
                userDoc.get('Attribute').Place_born[1] +
                '\n' +
                '居住地: ' +
                userDoc.get('Attribute').Place_Live[1] +
                '\n' +
                '趣味: ' +
                userDoc.get('Attribute').Hobby +
                '\n' +
                '一言: ' +
                userDoc.get('Sentence') +
                '\n',
            });
            cnt++;
          }
        });
        console.log(used_user);

        for (var i = 0; i < cnt; i++) {
          edge_all[i] = new Array();
          edge_all_data[i] = new Array();
          for (var j = 0; j < cnt; j++) {
            edge_all[i][j] = 0;
            edge_all_data[i][j] = '';
          }
        }
        async function create_edge(name: string, ff, number) {
          //console.log(name)
          try {
            const userRef = db.collection('match_user_sample').doc(name);
            db.runTransaction((transaction) => {
              return transaction.get(userRef).then((tokenSettingsDocSnapshot) => {
                if (!tokenSettingsDocSnapshot.exists) {
                  throw 'Document does not exist!';
                }

                let tokensMap = tokenSettingsDocSnapshot.data().match_user_info;

                //console.log(tokensMap);
                Object.keys(tokensMap).forEach((e) => {
                  //console.log(e, tokensMap[e]);
                  if (
                    used_user.has(e) &&
                    map_user_node.get(name) < map_user_node.get(e) &&
                    tokensMap[e].length >= filter_edge_w
                  ) {
                    var edge_title =
                      name + '-' + e + '\n 繋がりの強さ: ' + tokensMap[e].length + '\n 共通点:  \n';
                    tokensMap[e].forEach((x) => {
                      edge_title += '　　　　　' + x + '\n';
                    });
                    edges.push({
                      from: map_user_node.get(name),
                      to: map_user_node.get(e),
                      value: tokensMap[e].length * 0.5,
                      title: edge_title,
                    });
                  }
                });
              });
            })
              .then(function () {
                if (ff == cnt - 1) {
                  console.log('finish');
                  draw();
                }
              })
              .catch((error) => {
                console.log('Transaction failed: ', error);
              });
          } catch (err) {
            console.log(`Error!: ${JSON.stringify(err)}`);
          }
        }
        for (var i = 0; i < cnt; i++) {
          //console.log(i)
          await create_edge(nodes[i].label, i);
        }
      } catch (err) {
        console.log(`Error: ${JSON.stringify(err)}`);
      }
    })();
  };

  return (
    <div className="w-full">
      <div className="absolute z-[20] w-full">
        <button
          type="button"
          className="z-[10] inline-block py-2.5 px-6 text-xs font-medium leading-tight text-gray-900 bg-gray-100 thover:bg-gray-300 focus:bg-gray-300 active:bg-gray-400 rounded-full border-2 focus:outline-none focus:ring-0 shadow-md hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out border-gray-10 hover:scale-110 m-5"
          onClick={() => {
            handleOnClick_draw_network();
          }}
        >
          グラフ描画 star
        </button>

        <button
          type="button"
          className="z-[10] inline-block py-2.5 px-6 text-xs font-medium leading-tight text-gray-900 bg-gray-100 thover:bg-gray-300 focus:bg-gray-300 active:bg-gray-400 rounded-full border-2 focus:outline-none focus:ring-0 shadow-md hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out border-gray-10 hover:scale-110 m-5"
          onClick={() => {
            handleOnClick_draw_network_2();
          }}
        >
          グラフ描画 star2
        </button>

        <button
          type="button"
          className="z-[10] inline-block py-2.5 px-6 text-xs font-medium leading-tight text-gray-900 bg-gray-100 thover:bg-gray-300 focus:bg-gray-300 active:bg-gray-400 rounded-full border-2 focus:outline-none focus:ring-0 shadow-md hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out border-gray-10 hover:scale-110 m-5"
          onClick={() => {
            handleOnClick_draw_network_all();
          }}
        >
          グラフ描画 all
        </button>

        <button
          type="button"
          className="z-[10] inline-block py-2.5 px-6 text-xs font-medium leading-tight text-gray-900 bg-gray-100 thover:bg-gray-300 focus:bg-gray-300 active:bg-gray-400 rounded-full border-2 focus:outline-none focus:ring-0 shadow-md hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out border-gray-10 hover:scale-110 m-5"
          onClick={() => {
            handleOnClick_filer_on_off();
          }}
        >
          絞りこみ条件　
          <svg className="flex w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        <div className="hidden" id="filter_html">
          <div className="z-[20] m-2 space-y-1 space-x-2 visible rounded-3xl border-2 border-gray-100 shadow-md w-1/2 bg-gradient-to-tr from-gray-50 to-gray-100 bg-opacity-0">
            <div className="m-3">
              <span>出身地 </span>
              <select
                id="select_Place_born"
                className="py-2 px-2 text-sm text-gray-900 bg-white focus:bg-white border border-gray-300 appearance-none bg-whilte"
              >
                <option value="-1">出身地</option>
                <Graph_filter_place />
              </select>
              <br />

              <span>居住地 </span>
              <select
                id="select_Place_live"
                className="py-2 px-2 text-sm text-gray-900 bg-white focus:bg-white border border-gray-300 appearance-none bg-whilte"
              >
                <option value="-1">居住地</option>
                <Graph_filter_place />
              </select>
              <br />

              <span>趣味 </span>
              <br />
              <select
                id="select_hobby1"
                className="py-2 px-2 text-sm text-gray-900 bg-white focus:bg-white border border-gray-300 appearance-none bg-whilte"
              >
                <option value="-1">趣味1</option>
                <Graph_filter_hobby />
              </select>
              <select
                id="select_hobby2"
                className="py-2 px-2 text-sm text-gray-900 bg-white focus:bg-white border border-gray-300 appearance-none bg-whilte"
              >
                <option value="-1">趣味2</option>
                <Graph_filter_hobby />
              </select>
              <select
                id="select_hobby3"
                className="py-2 px-2 text-sm text-gray-900 bg-white focus:bg-white border border-gray-300 appearance-none bg-whilte"
              >
                <option value="-1">趣味3</option>
                <Graph_filter_hobby />
              </select>
              <select
                id="select_hobby4"
                className="py-2 px-2 text-sm text-gray-900 bg-white focus:bg-white border border-gray-300 appearance-none bg-whilte"
              >
                <option value="-1">趣味4</option>
                <Graph_filter_hobby />
              </select>
              <br />

              <span>探したい相手 </span>
              <select
                id="select_friend_type"
                className="py-2 px-2 text-sm text-gray-900 bg-white focus:bg-white border border-gray-300 appearance-none bg-whilte"
              >
                <option value="-1">探したい相手</option>
                <option value="友達募集">友達募集</option>
                <option value="遊び相手">遊び相手</option>
                <option value="話し相手">話し相手</option>
                <option value="趣味仲間">趣味仲間</option>
                <option value="仕事仲間">仕事仲間</option>
                <option value="勉強仲間">勉強仲間</option>
              </select>
              <br />

              <span>繋がりの強さ </span>
              <input
                type="number"
                id="edge_w"
                min="0"
                defaultValue="0"
                className="py-2 px-2 text-sm text-gray-900 bg-white focus:bg-white border border-gray-300 bg-whilte"
              />
              <br />

              <button
                type="button"
                className="z-[101] inline-block py-2.5 px-6 text-xs font-medium leading-tight text-gray-900 bg-gray-100 thover:bg-gray-300 focus:bg-gray-300 active:bg-gray-400 rounded-full border-2 focus:outline-none focus:ring-0 shadow-md hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out border-gray-10 hover:scale-110 m-3"
                onClick={() => {
                  handleOnClick_filter_clear();
                }}
              >
                条件クリア
              </button>

              <button
                type="button"
                className="z-[101] fnline-block py-2.5 px-6 text-xs font-medium leading-tight text-gray-900 bg-gray-100 thover:bg-gray-300 focus:bg-gray-300 active:bg-gray-400 rounded-full border-2 focus:outline-none focus:ring-0 shadow-md hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out border-gray-10 hover:scale-110 m-3"
                onClick={() => {
                  handleOnClick_draw_network_filter();
                }}
              >
                グラフ描画
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-screen bg-white .place-content-center" id="mynetwork"></div>
    </div>
  );
}
