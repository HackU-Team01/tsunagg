import Image from 'next/image';
import React from 'react';

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
      font: { color: 'black', size: 20 },
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

  return (
    <div className="w-screen h-screen">
      <button
        type="button"
        className="absolute z-[100] inline-block py-2.5 px-6 text-xs font-medium leading-tight text-gray-100 bg-gray-500 thover:bg-gray-300 focus:bg-gray-300 active:bg-gray-400 rounded-full border-2 focus:outline-none focus:ring-0 transition duration-150 ease-in-out border-gray-10"
        onClick={() => {
          handleOnClick_testtest();
        }}
      >
        グラフ描画
      </button>

      <div className="w-3/4 h-3/5 bg-red-50 .place-content-center" id="mynetwork"></div>
    </div>
  );
}
