import { ArrowDownward, ArrowUpward } from "@material-ui/icons";
import styled from "styled-components";

const FeaturedInfo = () => {
  return (
    <Wrapper>
      <div className="featured">
        <div className="featuredItem">
          <span className="featuredTitle">Revanue</span>
          <div className="featuredMoneyContainer">
            <span className="featuredMoney">$2,415</span>
            <span className="featuredMoneyRate">
              -11.4 <ArrowDownward className="featuredIcon negative" />{" "}
            </span>
          </div>
          <span className="featuredSub">Comapre to last month</span>
        </div>
        <div className="featuredItem">
          <span className="featuredTitle">Sales</span>
          <div className="featuredMoneyContainer">
            <span className="featuredMoney">$4,415</span>
            <span className="featuredMoneyRate">
              -1.4 <ArrowDownward className="featuredIcon negative" />{" "}
            </span>
          </div>
          <span className="featuredSub">Comapre to last month</span>
        </div>
        <div className="featuredItem">
          <span className="featuredTitle">Cost</span>
          <div className="featuredMoneyContainer">
            <span className="featuredMoney">$2,515</span>
            <span className="featuredMoneyRate">
              5.4 <ArrowUpward className="featuredIcon " />{" "}
            </span>
          </div>
          <span className="featuredSub">Comapre to last month</span>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .featured {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
  .featuredItem {
    flex: 1;
    margin: 0 20px;
    padding: 30px;
    border-radius: 10px;
    cursor: pointer;
    box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  }
  .featuredTitle {
    font-size: 20px;
  }

  .featuredMoneyContainer {
    margin: 10px 0;
    display: flex;
    align-items: center;
  }
  .featuredMoney {
    font-size: 30px;
    font-weight: 600;
  }
  .featuredMoneyRate {
    display: flex;
    align-items: center;
    margin-left: 20px;
  }
  .featuredIcon {
    font-size: 14px;
    margin-left: 5px;
    color: green;
  }
  .featuredIcon.negative {
    color: red;
  }
  .featuredSub {
    font-size: 15px;
    color: gray;
  }
`;

export default FeaturedInfo;
