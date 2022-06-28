import Image from 'next/image';
import React from 'react';

import { db } from '../../lib/firebase';

const uuId = 'User4KpZPzCR6zJy0KUX';

let DIR = '';
var nodes = null;
var nodes_number = -1;
var edges = null;
var network = null;

function init_graph() {
  var DIR = '';
  nodes = [
    {
      id: 1,
      value: 150,
      shape: 'circularImage',
      image: DIR + 'usericon1.png',
      label: 'User1',
      title: 'name\n hobby\n place',
    },
    {
      id: 2,
      value: 20,
      shape: 'circularImage',
      image: DIR + 'usericon1.png',
      label: 'User2',
    },
    {
      id: 3,
      value: 20,
      shape: 'circularImage',
      image: DIR + 'usericon1.png',
      label: 'User3',
    },
    {
      id: 4,
      value: 20,
      shape: 'circularImage',
      image: DIR + 'usericon1.png',
      label: 'User4',
    },
    {
      id: 5,
      value: 20,
      shape: 'circularImage',
      image: DIR + 'usericon1.png',
      label: 'User5',
    },
    {
      id: 6,
      value: 20,
      shape: 'circularImage',
      image: DIR + 'usericon1.png',
      label: 'User6',
    },
    {
      id: 7,
      value: 20,
      shape: 'circularImage',
      image: DIR + 'usericon1.png',
      label: 'User7',
      //shape: "star",
    },
  ];

  edges = [
    { from: 1, to: 2, value: 2, title: 'edge User1 User2\n hobby1, hobby2' },
    { from: 1, to: 3, value: 1 },
    { from: 1, to: 4, value: 1 },
    { from: 1, to: 5, value: 3 },
    { from: 3, to: 6, value: 1 },
    { from: 1, to: 7, value: 1 },
  ];
}

function addNode() {
  nodes_number++;
  nodes.push({
    id: nodes_number,
    value: 20,
    shape: 'circularImage',
    image: DIR + 'usericon1.png',
    label: 'User' + nodes_number,
  });
}

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
        min: 20,
        max: 30,
      },
      title: undefined,
    },
    edges: {
      color: 'orangered',
      length: 160,
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
  const handleOnClick_testtest = async () => {
    const head = document.getElementsByTagName('head')[0] as HTMLElement;
    const scriptUrl = document.createElement('script');
    scriptUrl.type = 'text/javascript';
    scriptUrl.src = 'https://unpkg.com/vis-network/standalone/umd/vis-network.min.js';
    head.appendChild(scriptUrl);

    if (nodes_number == -1) {
      nodes_number = 7;
      init_graph();
      return;
    }
    addNode();
    draw();
    console.log(1);
  };

  const handleOnClick_draw_network = async () => {
    const head = document.getElementsByTagName('head')[0] as HTMLElement;
    const scriptUrl = document.createElement('script');
    scriptUrl.type = 'text/javascript';
    scriptUrl.src = 'https://unpkg.com/vis-network/standalone/umd/vis-network.min.js';
    head.appendChild(scriptUrl);

    nodes = [];
    edges = [
      //{ from: 1, to: 1, value: 2, title: 'edge User1 User2\n hobby1, hobby2' }
    ];

    (async () => {
      try {
        const userRef = db.collection('user_info_sample').doc(uuId);
        const userDoc = await userRef.get();
        if (userDoc.exists) {
          console.log(userDoc.data());

          nodes = [
            {
              id: 0,
              value: 30,
              shape: 'circularImage',
              image: DIR + 'usericon1.png',
              label: uuId,
              title:
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
        } else {
          console.log('No such document!');
        }
      } catch (err) {
        console.log(`Error!: ${JSON.stringify(err)}`);
      }
    })();

    (async () => {
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

              nodes.push({
                id: nodes.length + 1,
                value: 30,
                shape: 'circularImage',
                image: DIR + 'usericon1.png',
                label: e,
                title: e,
              });
              var edge_title = '';
              tokensMap[e].forEach((x) => {
                edge_title += x + '\n';
              });
              edges.push({
                from: 0,
                to: nodes.length,
                value: tokensMap[e].length,
                title: edge_title,
              });
            });
          });
        })
          .then(function () {
            console.log(1111);

            console.log(nodes);
            console.log(edges);
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
          map_user_node.set(userDoc.id, cnt);
          nodes.push({
            id: cnt,
            value: 30,
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
                      value: tokensMap[e].length,
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
      <div className="absolute z-[20]">
        <button
          type="button"
          className="z-[10] inline-block py-2.5 px-6 text-xs font-medium leading-tight text-gray-900 bg-gray-100 thover:bg-gray-300 focus:bg-gray-300 active:bg-gray-400 rounded-full border-2 focus:outline-none focus:ring-0 shadow-md hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out border-gray-10 hover:scale-110 m-5"
          onClick={() => {
            //handleOnClick_testtest();
            handleOnClick_draw_network();
          }}
        >
          グラフ描画 star
        </button>

        <button
          type="button"
          className="z-[10] inline-block py-2.5 px-6 text-xs font-medium leading-tight text-gray-900 bg-gray-100 thover:bg-gray-300 focus:bg-gray-300 active:bg-gray-400 rounded-full border-2 focus:outline-none focus:ring-0 shadow-md hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out border-gray-10 hover:scale-110 m-5"
          onClick={() => {
            //handleOnClick_testtest();
            handleOnClick_draw_network_all();
          }}
        >
          グラフ描画 all
        </button>
      </div>

      <div className="w-full h-screen bg-white .place-content-center" id="mynetwork"></div>
    </div>
  );
}
