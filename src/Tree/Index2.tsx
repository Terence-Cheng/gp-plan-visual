import React, { useEffect } from 'react';
import G6, {Graph, GraphOptions} from '@antv/g6';

const data = {
    // 点集
    nodes: [
      {
        id: 'node1',
        x: 100,
        y: 200,
      },
      {
        id: 'node2',
        x: 300,
        y: 200,
      },
    ],
    // 边集
    edges: [
      // 表示一条从 node1 节点连接到 node2 节点的边
      {
        source: 'node1',
        target: 'node2',
      },
    ],
};

const GraphReact = () => {
  const ref = React.useRef<HTMLDivElement>(null)
  let graph: Graph | null = null

  useEffect(() => {
    if(!graph) {

      // eslint-disable-next-line react-hooks/exhaustive-deps
        graph = new G6.Graph({
        container: ref.current!, // 指定图画布的容器 id，与第 9 行的容器对应
        // 画布宽高
        width: 800,
        height: 500,
      });
    }
    // 读取数据
    graph.data(data);
    // 渲染图
    graph.render();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div ref={ref}>
    </div>
  );
}

export {
    GraphReact
} 