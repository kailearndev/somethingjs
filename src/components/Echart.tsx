import React, { FC } from 'react';
import ReactECharts, { EChartsOption, EChartsReactProps } from "echarts-for-react";
interface EchartProps {
  option?: {};
  style?: React.CSSProperties;
}

const Echart: FC<EchartProps> = (props) => {
  const { option , style} = props
    
    return (
      <div >
        <ReactECharts  style={style}  option={option}  />
      </div>
    );
};

export default Echart;