import styled from "styled-components";
import Chart from "../components/Chart";
import { userData } from "../components/DummyData";
import FeaturedInfo from "../components/FeaturedInfo";
import WidgetLg from "../components/WidgetLg";
import WidgetSm from "../components/WidgetSm";

const Home = () => {
  return (
    <Wrapper>
      <div className="home">
        <FeaturedInfo />
        <Chart
          data={userData}
          title="User Analytics"
          grid
          dataKey="Active User"
        />
        <div className="homeWidgets">
          <WidgetSm />
          <WidgetLg />
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  flex: 4;
  .homeWidgets {
    display: flex;
    margin: 20px;
  }
`;

export default Home;
