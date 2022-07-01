import Image from 'next/image';
import React from 'react';

import { db } from '../../lib/firebase';
import Graph_filter_place from './Graph_filter_place';
import Graph_filter_hobby from './Graph_filter_hobby';

const uuId = 'User4KpZPzCR6zJy0KUX';

//*************************************************
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

  document.getElementById('select_Place_born_AND_OR').value = '1';
  document.getElementById('select_Place_live_AND_OR').value = '1';
  document.getElementById('select_hobby1_AND_OR').value = '1';
  document.getElementById('select_hobby2_AND_OR').value = '1';
  document.getElementById('select_hobby3_AND_OR').value = '1';
  document.getElementById('select_hobby4_AND_OR').value = '1';
  document.getElementById('select_friend_type_AND_OR').value = '1';

  document.getElementById('select_Place_born_AND_OR').textContent = 'OR';
  document.getElementById('select_Place_live_AND_OR').textContent = 'OR';
  document.getElementById('select_hobby1_AND_OR').textContent = 'OR';
  document.getElementById('select_hobby2_AND_OR').textContent = 'OR';
  document.getElementById('select_hobby3_AND_OR').textContent = 'OR';
  document.getElementById('select_hobby4_AND_OR').textContent = 'OR';
  document.getElementById('select_friend_type_AND_OR').textContent = 'OR';
  /*
    for(var i = 1;i < 14; i++){
      console.log(i);
      (async () => {
        try { 
          const userRef = db.collection('user_sample').doc("User"+i+"KpZPzCR6zJy0KUX")
          await userRef.set({
            Name: 'user'+i,
            Image: 'https://icooon-mono.com/i/icon_11328/icon_113281_64.png',
            OAuthToken: '123123123',
            Slack_id: '123123321321',
          })
        } catch (err) {
          console.log(`Error: ${JSON.stringify(err)}`)
        }
      })()
    }
     
  */
};
function handleOnClick_filter_and_or(e) {
  const elemId = e.currentTarget['id'];
  var elem = document.getElementById(elemId);
  if (elem.value == 1) {
    elem.textContent = 'AND';
    elem.value = 0;
  } else {
    elem.textContent = 'OR';
    elem.value = 1;
  }
}

//*************************************************

let DIR = '';
var nodes = null;
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
        min: 15,
        max: 70,
      },
      title: undefined,
    },
    edges: {
      color: '#ff4500',
      length: 100,
      font: {
        color: '#343434',
        size: 31,
      },
      scaling: {
        min: 1,
        max: 8,
        customScalingFunction: function (min, max, total, value) {
          if (max === min) {
            return 0.5;
          } else {
            let scale = 1 / (max - min);
            return Math.max(0, (value - min) * scale);
          }
        },
      },
      title: undefined,
    },
  };
  network = new vis.Network(container, data, options);
}

//*************************************************

var user_node_data = null;
var user_node_data_all = null;
var user_image = null;
var user_name = null;
var map_user_node = new Map<string, number>();
var node_num = 0;

let user_edge_data: number[][] = new Array();
let user_edge_data_keyword: string[][] = new Array();

function init_graph() {
  const head = document.getElementsByTagName('head')[0] as HTMLElement;
  const scriptUrl = document.createElement('script');
  scriptUrl.type = 'text/javascript';
  scriptUrl.src = 'https://unpkg.com/vis-network/standalone/umd/vis-network.min.js';
  head.appendChild(scriptUrl);

  node_num = 0;
  user_node_data = [];
  user_node_data_all = [];
  user_image = [];
  user_name = [];
  user_edge_data = new Array(node_num);
  user_edge_data_keyword = new Array(node_num);
}
function add_node(u: number) {
  const userDoc = user_node_data_all[u];
  var sz = 20;
  if (user_node_data[u] == uuId) sz = 50;
  nodes.push({
    id: u,
    value: sz,
    shape: 'circularImage',
    image: user_image[u],
    label: user_name[u],
    physics: false,
    title:
      '名前: ' +
      user_name[u] +
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
}
function add_edge(u: number, v: number) {
  var edge_title =
    user_name[u] +
    '-' +
    user_name[v] +
    '\n 繋がりの強さ: ' +
    user_edge_data[u][v] +
    '\n 共通点:  \n' +
    user_edge_data_keyword[u][v];
  edges.push({
    from: u,
    to: v,
    value: user_edge_data[u][v] * 0.5,
    title: edge_title,
  });
}

export default function DrawNetwork() {
  function handleOnClick_draw_network() {
    function generate_graph() {
      nodes = [];
      edges = [];
      var u = map_user_node.get(uuId);
      add_node(u);
      for (var i = 0; i < node_num; i++) {
        var w = user_edge_data[u][i];
        if (w > 0) {
          add_node(i);
          add_edge(u, i);
        }
      }

      draw();
    }

    init_graph();
    (async () => {
      try {
        const xxx = await db.collection('user_info_sample').get();
        console.log('data size: ' + xxx.size);
        xxx.forEach((userDoc) => {
          user_node_data_all.push(userDoc);
          map_user_node.set(userDoc.id, node_num);
          user_node_data.push(userDoc.id);
          node_num++;
        });
        //console.log(map_user_node)
        user_image = new Array(node_num);
        user_name = new Array(node_num);
        const yyy = await db.collection('user_sample').get();
        //console.log('data size ->' + yyy.size);
        yyy.forEach((userDoc) => {
          if (map_user_node.has(userDoc.id)) {
            var n = map_user_node.get(userDoc.id);
            user_image[n] = userDoc.get('Image');
            user_name[n] = userDoc.get('Name');
          }
        });

        for (var i = 0; i < node_num; i++) {
          user_edge_data[i] = new Array(node_num);
          user_edge_data_keyword[i] = new Array(node_num);
          for (var j = 0; j < node_num; j++) {
            user_edge_data[i][j] = 0;
            user_edge_data_keyword[i][j] = '';
          }
        }
        async function read_edge_data(name: string, ff: number) {
          try {
            const userRef = db.collection('match_user_sample').doc(name);
            db.runTransaction((transaction) => {
              return transaction.get(userRef).then((tokenSettingsDocSnapshot) => {
                if (!tokenSettingsDocSnapshot.exists) {
                  throw 'Document does not exist!';
                }
                let tokensMap = tokenSettingsDocSnapshot.data().match_user_info;
                Object.keys(tokensMap).forEach((e) => {
                  //console.log(e, tokensMap[e]);
                  const a = map_user_node.get(name);
                  const b = map_user_node.get(e);
                  var cn = 0;
                  tokensMap[e].forEach((x) => {
                    cn++;
                    user_edge_data_keyword[a][b] += x + ' ';
                  });
                  user_edge_data[a][b] += 0;
                  user_edge_data[a][b] += cn;
                  //console.log(a,b,user_edge_data[a][b])
                });
              });
            })
              .then(function () {
                if (node_num - 1 == ff) {
                  generate_graph();
                }
              })
              .catch((error) => {
                console.log('Transaction failed: ', error);
              });
          } catch (err) {
            console.log(`Error!: ${JSON.stringify(err)}`);
          }
        }
        for (var i = 0; i < node_num; i++) {
          await read_edge_data(user_node_data[i], i);
        }
      } catch (err) {
        console.log(`Error: ${JSON.stringify(err)}`);
      }
    })();
  }

  const handleOnClick_draw_network_2 = async () => {
    function generate_graph() {
      var use = new Array(node_num);
      for (var i = 0; i < node_num; i++) {
        use[i] = 0;
      }

      nodes = [];
      edges = [];
      var u = map_user_node.get(uuId);
      use[u] = 1;
      for (var v = 0; v < node_num; v++) {
        if (user_edge_data[u][v] > 0) {
          use[v] = 1;
        }
      }
      add_node(u);

      for (var i = 0; i < node_num; i++) {
        var w = user_edge_data[u][i];
        if (w > 0) {
          add_node(i);
          add_edge(u, i);

          for (var j = i + 1; j < node_num; j++) {
            if (use[j] == 0 && user_edge_data[i][j] > 0) {
              use[j] = 1;
              add_node(j);
              add_edge(i, j);
            }
          }
        }
      }

      draw();
    }
    init_graph();
    (async () => {
      try {
        const xxx = await db.collection('user_info_sample').get();
        console.log('data size: ' + xxx.size);
        xxx.forEach((userDoc) => {
          user_node_data_all.push(userDoc);
          map_user_node.set(userDoc.id, node_num);
          user_node_data.push(userDoc.id);
          node_num++;
        });
        //console.log(map_user_node)
        user_image = new Array(node_num);
        user_name = new Array(node_num);
        const yyy = await db.collection('user_sample').get();
        //console.log('data size ->' + yyy.size);
        yyy.forEach((userDoc) => {
          if (map_user_node.has(userDoc.id)) {
            var n = map_user_node.get(userDoc.id);
            user_image[n] = userDoc.get('Image');
            user_name[n] = userDoc.get('Name');
          }
        });

        for (var i = 0; i < node_num; i++) {
          user_edge_data[i] = new Array(node_num);
          user_edge_data_keyword[i] = new Array(node_num);
          for (var j = 0; j < node_num; j++) {
            user_edge_data[i][j] = 0;
            user_edge_data_keyword[i][j] = '';
          }
        }
        async function read_edge_data(name: string, ff: number) {
          try {
            const userRef = db.collection('match_user_sample').doc(name);
            db.runTransaction((transaction) => {
              return transaction.get(userRef).then((tokenSettingsDocSnapshot) => {
                if (!tokenSettingsDocSnapshot.exists) {
                  throw 'Document does not exist!';
                }
                let tokensMap = tokenSettingsDocSnapshot.data().match_user_info;
                Object.keys(tokensMap).forEach((e) => {
                  //console.log(e, tokensMap[e]);
                  const a = map_user_node.get(name);
                  const b = map_user_node.get(e);
                  var cn = 0;
                  tokensMap[e].forEach((x) => {
                    cn++;
                    user_edge_data_keyword[a][b] += x + ' ';
                  });
                  user_edge_data[a][b] += 0;
                  user_edge_data[a][b] += cn;
                  //console.log(a,b,user_edge_data[a][b])
                });
              });
            })
              .then(function () {
                if (node_num - 1 == ff) {
                  generate_graph();
                }
              })
              .catch((error) => {
                console.log('Transaction failed: ', error);
              });
          } catch (err) {
            console.log(`Error!: ${JSON.stringify(err)}`);
          }
        }
        for (var i = 0; i < node_num; i++) {
          await read_edge_data(user_node_data[i], i);
        }
      } catch (err) {
        console.log(`Error: ${JSON.stringify(err)}`);
      }
    })();
  };

  const handleOnClick_draw_network_all = async () => {
    function generate_graph() {
      nodes = [];
      edges = [];
      for (var u = 0; u < node_num; u++) {
        var sz = 30;
        if (user_node_data[u] == uuId) sz = 50;
        add_node(u);

        for (var v = u + 1; v < node_num; v++) {
          var w = user_edge_data[u][v];
          if (w > 0) {
            add_edge(u, v);
          }
        }
      }

      draw();
    }

    init_graph();
    (async () => {
      try {
        const xxx = await db.collection('user_info_sample').get();
        console.log('data size: ' + xxx.size);
        xxx.forEach((userDoc) => {
          user_node_data_all.push(userDoc);
          map_user_node.set(userDoc.id, node_num);
          user_node_data.push(userDoc.id);
          node_num++;
        });
        //console.log(map_user_node)
        user_image = new Array(node_num);
        user_name = new Array(node_num);
        const yyy = await db.collection('user_sample').get();
        //console.log('data size ->' + yyy.size);
        yyy.forEach((userDoc) => {
          if (map_user_node.has(userDoc.id)) {
            var n = map_user_node.get(userDoc.id);
            user_image[n] = userDoc.get('Image');
            user_name[n] = userDoc.get('Name');
          }
        });

        for (var i = 0; i < node_num; i++) {
          user_edge_data[i] = new Array(node_num);
          user_edge_data_keyword[i] = new Array(node_num);
          for (var j = 0; j < node_num; j++) {
            user_edge_data[i][j] = 0;
            user_edge_data_keyword[i][j] = '';
          }
        }
        async function read_edge_data(name: string, ff: number) {
          try {
            const userRef = db.collection('match_user_sample').doc(name);
            db.runTransaction((transaction) => {
              return transaction.get(userRef).then((tokenSettingsDocSnapshot) => {
                if (!tokenSettingsDocSnapshot.exists) {
                  throw 'Document does not exist!';
                }
                let tokensMap = tokenSettingsDocSnapshot.data().match_user_info;
                Object.keys(tokensMap).forEach((e) => {
                  //console.log(e, tokensMap[e]);
                  const a = map_user_node.get(name);
                  const b = map_user_node.get(e);
                  var cn = 0;
                  tokensMap[e].forEach((x) => {
                    cn++;
                    user_edge_data_keyword[a][b] += x + ' ';
                  });
                  user_edge_data[a][b] += 0;
                  user_edge_data[a][b] += cn;
                  //console.log(a,b,user_edge_data[a][b])
                });
              });
            })
              .then(function () {
                if (node_num - 1 == ff) {
                  generate_graph();
                }
              })
              .catch((error) => {
                console.log('Transaction failed: ', error);
              });
          } catch (err) {
            console.log(`Error!: ${JSON.stringify(err)}`);
          }
        }
        for (var i = 0; i < node_num; i++) {
          await read_edge_data(user_node_data[i], i);
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

    const fliter_place_born_AND_OR = document.getElementById('select_Place_born_AND_OR').value;
    const fliter_place_live_AND_OR = document.getElementById('select_Place_live_AND_OR').value;
    var filter_hobby_AND_OR = [];
    filter_hobby_AND_OR.push(document.getElementById('select_hobby1_AND_OR').value);
    filter_hobby_AND_OR.push(document.getElementById('select_hobby2_AND_OR').value);
    filter_hobby_AND_OR.push(document.getElementById('select_hobby3_AND_OR').value);
    filter_hobby_AND_OR.push(document.getElementById('select_hobby4_AND_OR').value);
    const filter_friend_type_AND_OR = document.getElementById('select_friend_type_AND_OR').value;

    console.log(filter_edge_w, fliter_place_born, fliter_place_live);
    console.log(filter_hobby);
    console.log(filter_friend_type);

    function generate_graph() {
      nodes = [];
      edges = [];
      var used_user = new Set();

      for (var u = 0; u < node_num; u++) {
        var sz = 30;
        if (user_node_data[u] == uuId) sz = 50;
        var userDoc = user_node_data_all[u];

        var use = 0;
        var filter_on = 0;
        var use1 = 1;
        if (fliter_place_born != '-1') {
          filter_on = 1;
          var f = 0;
          if (
            userDoc.get('Attribute').Place_born[1] == fliter_place_born ||
            userDoc.get('Attribute').Place_born[0] == fliter_place_born
          )
            (use = 1), (f = 1);
          if (fliter_place_born_AND_OR == 0 && f == 0) use1 = 0;
        }
        if (fliter_place_live != -1) {
          filter_on = 1;
          var f = 0;
          if (
            userDoc.get('Attribute').Place_Live[1] == fliter_place_live ||
            userDoc.get('Attribute').Place_Live[0] == fliter_place_live
          )
            (use = 1), (f = 1);
          if (fliter_place_live_AND_OR == 0 && f == 0) use1 = 0;
        }
        for (var i = 0; i < filter_hobby.length; i++) {
          var y = filter_hobby[i];
          if (y != '-1') {
            filter_on = 1;
            var f = 0;
            userDoc.get('Attribute').Hobby.forEach((x) => {
              if (x == y) (use = 1), (f = 1);
            });
            if (f == 0 && filter_hobby_AND_OR[i] == 0) use1 = 0;
          }
        }

        if (filter_friend_type != '-1') {
          filter_on = 1;
          var f = 0;
          userDoc.get('Attribute').Hobby.forEach((x) => {
            if (x == filter_friend_type) (use = 1), (f = 1);
          });
          if (f == 0 && filter_friend_type_AND_OR == 0) use1 = 0;
        }

        if ((filter_on == 0 || use == 1) && use1 == 1) {
          used_user.add(userDoc.id);
          add_node(u);
        }
      }

      for (var u = 0; u < node_num; u++) {
        if (used_user.has(user_node_data[u])) {
          for (var v = u + 1; v < node_num; v++) {
            var w = user_edge_data[u][v];
            if (w > 0 && w >= filter_edge_w && used_user.has(user_node_data[v])) {
              add_edge(u, v);
            }
          }
        }
      }

      draw();
    }

    init_graph();
    (async () => {
      try {
        const xxx = await db.collection('user_info_sample').get();
        console.log('data size: ' + xxx.size);
        xxx.forEach((userDoc) => {
          user_node_data_all.push(userDoc);
          map_user_node.set(userDoc.id, node_num);
          user_node_data.push(userDoc.id);
          node_num++;
        });
        //console.log(map_user_node)
        user_image = new Array(node_num);
        user_name = new Array(node_num);
        const yyy = await db.collection('user_sample').get();
        //console.log('data size ->' + yyy.size);
        yyy.forEach((userDoc) => {
          if (map_user_node.has(userDoc.id)) {
            var n = map_user_node.get(userDoc.id);
            user_image[n] = userDoc.get('Image');
            user_name[n] = userDoc.get('Name');
          }
        });

        for (var i = 0; i < node_num; i++) {
          user_edge_data[i] = new Array(node_num);
          user_edge_data_keyword[i] = new Array(node_num);
          for (var j = 0; j < node_num; j++) {
            user_edge_data[i][j] = 0;
            user_edge_data_keyword[i][j] = '';
          }
        }
        async function read_edge_data(name: string, ff: number) {
          try {
            const userRef = db.collection('match_user_sample').doc(name);
            db.runTransaction((transaction) => {
              return transaction.get(userRef).then((tokenSettingsDocSnapshot) => {
                if (!tokenSettingsDocSnapshot.exists) {
                  throw 'Document does not exist!';
                }
                let tokensMap = tokenSettingsDocSnapshot.data().match_user_info;
                Object.keys(tokensMap).forEach((e) => {
                  //console.log(e, tokensMap[e]);
                  const a = map_user_node.get(name);
                  const b = map_user_node.get(e);
                  var cn = 0;
                  tokensMap[e].forEach((x) => {
                    cn++;
                    user_edge_data_keyword[a][b] += x + ' ';
                  });
                  user_edge_data[a][b] += 0;
                  user_edge_data[a][b] += cn;
                  //console.log(a,b,user_edge_data[a][b])
                });
              });
            })
              .then(function () {
                if (node_num - 1 == ff) {
                  generate_graph();
                }
              })
              .catch((error) => {
                console.log('Transaction failed: ', error);
              });
          } catch (err) {
            console.log(`Error!: ${JSON.stringify(err)}`);
          }
        }
        for (var i = 0; i < node_num; i++) {
          await read_edge_data(user_node_data[i], i);
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
              <button
                type="button"
                className=" z-[101] fnline-block py-2.5 px-2.5 text-xs leading-tight text-gray-900 bg-gray-200 hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-400 rounded-sm border-2 focus:outline-none focus:ring-0 focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out border-gray-300 m-1"
                id="select_Place_born_AND_OR"
                value="1"
                onClick={(e) => {
                  handleOnClick_filter_and_or(e);
                }}
              >
                OR
              </button>
              <br />
              <span>居住地 </span>
              <select
                id="select_Place_live"
                className="py-2 px-2 text-sm text-gray-900 bg-white focus:bg-white border border-gray-300 appearance-none bg-whilte"
              >
                <option value="-1">居住地</option>
                <Graph_filter_place />
              </select>
              <button
                type="button"
                className=" z-[101] fnline-block py-2.5 px-2.5 text-xs leading-tight text-gray-900 bg-gray-200 hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-400 rounded-sm border-2 focus:outline-none focus:ring-0 focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out border-gray-300 m-1"
                id="select_Place_live_AND_OR"
                value="1"
                onClick={(e) => {
                  handleOnClick_filter_and_or(e);
                }}
              >
                OR
              </button>
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
              <button
                type="button"
                className=" z-[101] fnline-block py-2.5 px-2.5 text-xs leading-tight text-gray-900 bg-gray-200 hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-400 rounded-sm border-2 focus:outline-none focus:ring-0 focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out border-gray-300 m-1"
                id="select_hobby1_AND_OR"
                value="1"
                onClick={(e) => {
                  handleOnClick_filter_and_or(e);
                }}
              >
                OR
              </button>
              　　
              <select
                id="select_hobby2"
                className="py-2 px-2 text-sm text-gray-900 bg-white focus:bg-white border border-gray-300 appearance-none bg-whilte"
              >
                <option value="-1">趣味2</option>
                <Graph_filter_hobby />
              </select>
              <button
                type="button"
                className=" z-[101] fnline-block py-2.5 px-2.5 text-xs leading-tight text-gray-900 bg-gray-200 hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-400 rounded-sm border-2 focus:outline-none focus:ring-0 focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out border-gray-300 m-1"
                id="select_hobby2_AND_OR"
                value="1"
                onClick={(e) => {
                  handleOnClick_filter_and_or(e);
                }}
              >
                OR
              </button>
              　　
              <select
                id="select_hobby3"
                className="py-2 px-2 text-sm text-gray-900 bg-white focus:bg-white border border-gray-300 appearance-none bg-whilte"
              >
                <option value="-1">趣味3</option>
                <Graph_filter_hobby />
              </select>
              <button
                type="button"
                className=" z-[101] fnline-block py-2.5 px-2.5 text-xs leading-tight text-gray-900 bg-gray-200 hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-400 rounded-sm border-2 focus:outline-none focus:ring-0 focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out border-gray-300 m-1"
                id="select_hobby3_AND_OR"
                value="1"
                onClick={(e) => {
                  handleOnClick_filter_and_or(e);
                }}
              >
                OR
              </button>
              　　
              <select
                id="select_hobby4"
                className="py-2 px-2 text-sm text-gray-900 bg-white focus:bg-white border border-gray-300 appearance-none bg-whilte"
              >
                <option value="-1">趣味4</option>
                <Graph_filter_hobby />
              </select>
              <button
                type="button"
                className=" z-[101] fnline-block py-2.5 px-2.5 text-xs leading-tight text-gray-900 bg-gray-200 hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-400 rounded-sm border-2 focus:outline-none focus:ring-0 focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out border-gray-300 m-1"
                id="select_hobby4_AND_OR"
                value="1"
                onClick={(e) => {
                  handleOnClick_filter_and_or(e);
                }}
              >
                OR
              </button>
              　　
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
              <button
                type="button"
                className="z-[101] fnline-block py-2.5 px-2.5 text-xs leading-tight text-gray-900 bg-gray-200 hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-400 rounded-sm border-2 focus:outline-none focus:ring-0 focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out border-gray-300 m-1"
                id="select_friend_type_AND_OR"
                value="1"
                onClick={(e) => {
                  handleOnClick_filter_and_or(e);
                }}
              >
                OR
              </button>
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
