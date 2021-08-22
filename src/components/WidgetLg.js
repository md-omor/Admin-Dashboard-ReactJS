import styled from "styled-components";

const WidgetLg = () => {
  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };

  return (
    <Wrapper>
      <div className="widgetLg">
        <h3 className="widgetLgTitle">Latest Transaction</h3>
        <table className="widgetLgTable">
          <tr className="widgetLgTr">
            <th className="widgetLgTh">Customer</th>
            <th className="widgetLgTh">Date</th>
            <th className="widgetLgTh">Amount</th>
            <th className="widgetLgTh">Status</th>
          </tr>
          <tr className="widgetLgTr">
            <td className="widgetLgUser">
              <img
                src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt=""
                className="widgetLgImg"
              />
              <span className="widgetLgName">John Doe</span>
            </td>
            <td className="widgetLgDate">21 Aug 2021</td>
            <td className="widgetLgAmount">$112.00</td>
            <td className="widgetLgStatus">
              <Button type="Approved" />
            </td>
          </tr>
          <tr className="widgetLgTr">
            <td className="widgetLgUser">
              <img
                src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt=""
                className="widgetLgImg"
              />
              <span className="widgetLgName">John Doe</span>
            </td>
            <td className="widgetLgDate">21 Aug 2021</td>
            <td className="widgetLgAmount">$112.00</td>
            <td className="widgetLgStatus">
              <Button type="Declined" />
            </td>
          </tr>
          <tr className="widgetLgTr">
            <td className="widgetLgUser">
              <img
                src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt=""
                className="widgetLgImg"
              />
              <span className="widgetLgName">John Doe</span>
            </td>
            <td className="widgetLgDate">21 Aug 2021</td>
            <td className="widgetLgAmount">$112.00</td>
            <td className="widgetLgStatus">
              <Button type="Pending" />
            </td>
          </tr>
          <tr className="widgetLgTr">
            <td className="widgetLgUser">
              <img
                src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt=""
                className="widgetLgImg"
              />
              <span className="widgetLgName">John Doe</span>
            </td>
            <td className="widgetLgDate">21 Aug 2021</td>
            <td className="widgetLgAmount">$112.00</td>
            <td className="widgetLgStatus">
              <Button type="Approved" />
            </td>
          </tr>
        </table>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  flex: 2;

  .widgetLg {
    box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
    padding: 20px;
  }
  .widgetLgTitle {
    font-size: 22px;
    font-weight: 600;
  }
  .widgetLgImg {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    object-fit: cover;
    margin-right: 10px;
  }
  .widgetLgButton {
    padding: 5px 7px;
    border: none;
    border-radius: 10px;
  }
  .widgetLgButton.Approved {
    background-color: #e5faf2;
    color: #3bb077;
  }
  .widgetLgButton.Declined {
    background-color: #fff0f1;
    color: #d95087;
  }
  .widgetLgButton.Pending {
    background-color: #ebf1fe;
    color: #2a7ade;
  }
  .widgetLgTable {
    width: 100%;
    border-spacing: 20px;
  }
  .widgetLgTh {
    text-align: left;
  }
  .widgetLgUser {
    display: flex;
    align-items: center;
    font-weight: 600;
  }
  .widgetLgDate,
  .widgetLgAmount {
    font-weight: 300;
  }
`;

export default WidgetLg;
