import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
} from "recharts";
import styled from "styled-components";

const Chart = ({ data, dataKey, title, grid }) => {
  return (
    <Wrapper>
      <div className="chart">
        <h3 className="chartTitle">{title}</h3>
        <ResponsiveContainer width="100%" aspect={4 / 1}>
          <LineChart data={data}>
            <XAxis dataKey="name" stroke="#5550bd" />
            <Line type="monotone" dataKey={dataKey} stroke="#5550bd" />
            <Tooltip />
            {grid && <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5 " />}
            <Legend />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .chart {
    margin: 20px;
    padding: 20px;
    box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  }
`;

export default Chart;
