// import React, { useEffect, useState } from 'react';
// import ReactDOM from 'react-dom';
// import { data } from './data';
// import G6, {Graph, GraphOptions} from '@antv/g6';

// export function Tree () {
//   const ref = React.useRef<HTMLDivElement>(null)
//   let graph: Graph|null = null

//   useEffect(() => {
//     if(!graph) {
//       // eslint-disable-next-line react-hooks/exhaustive-deps
//       graph = new G6.Graph({
//         container: ref.current,
//         width: 1200,
//         height: 800,
//         modes: {
//           default: ['drag-canvas']
//         },
//         layout: {
//         	type: 'dagre',
//           direction: 'LR'
//         },
//         defaultNode: {
//           shape: 'node',
//           labelCfg: {
//             style: {
//               fill: '#000000A6',
//               fontSize: 10
//             }
//           },
//           style: {
//             stroke: '#72CC4A',
//             width: 150
//           }
//         },
//         defaultEdge: {
//           shape: 'polyline'
//         }
//       } as GraphOptions)
//     }
//     graph.data(data)
//     graph.render()
//   }, [])

//   return (
//     <div ref={ref}></div>
//   );
// }

export {}