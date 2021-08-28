import { Publish } from "@material-ui/icons";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Chart from "../components/Chart";
import { productData } from "../components/DummyData";

const Product = () => {
  return (
    <Wrapper>
      <div className="productTitleContainer">
        <h1 className="productTitle">Product</h1>
        <Link to="/newProduct">
          <button className="productAddButton">Create</button>
        </Link>
      </div>
      <div className="productTop">
        <div className="productTopLeft">
          <Chart
            data={productData}
            dataKey="Sales"
            title="Sales Perfomance"
            grid
          />
        </div>
        <div className="productTopRight">
          <div className="productInfoTop">
            <img
              src="https://images.unsplash.com/photo-1603351154351-5e2d0600bb77?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1051&q=80"
              alt=""
              className="productInfoImg"
            />
            <span className="productName">Apple Airpods</span>
          </div>
          <div className="productInfoBottom">
            <div className="productIfoItem">
              <span className="productInfoKey">id:</span>
              <span className="productInfoValue">123</span>
            </div>
            <div className="productIfoItem">
              <span className="productInfoKey">sales:</span>
              <span className="productInfoValue">4123</span>
            </div>
            <div className="productIfoItem">
              <span className="productInfoKey">active:</span>
              <span className="productInfoValue">yes</span>
            </div>
            <div className="productIfoItem">
              <span className="productInfoKey">in stock:</span>
              <span className="productInfoValue">no</span>
            </div>
          </div>
        </div>
      </div>
      <div className="productBottom">
        <div className="productForm">
          <div className="productFormLeft">
            <label>Product Name</label>
            <input type="text" placeholder="Apple Airpod" />
            <label> In Stock</label>
            <select name="inStock" id="inStock">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
            <label>Active</label>
            <select name="active" id="active">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
          <div className="productFormRight">
            <div className="productUpload">
              <img
                src="https://images.unsplash.com/photo-1603351154351-5e2d0600bb77?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1051&q=80"
                alt="productUpload"
                className="productUploadImg"
              />
              <label htmlFor="file">
                <Publish />
              </label>
              <input type="file" id="file" style={{ display: "none" }} />
            </div>
            <button className="productButton">Update</button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  flex: 4;
  padding: 20px;
  .productTitleContainer {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .productAddButton {
    width: 80px;
    border: none;
    padding: 5px;
    background-color: teal;
    color: #fff;
    border-radius: 5px;
    cursor: pointer;
  }
  .productTop {
    display: flex;
  }
  .productTopLeft,
  .productTopRight {
    flex: 1;
  }
  .productTopRight {
    padding: 20px;
    margin: 20px;
    box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  }
  .productInfoImg {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    object-fit: cover;
    margin-right: 20px;
  }
  .productInfoTop {
    display: flex;
    align-items: center;
  }
  .productName {
    font-weight: 600;
  }
  .productInfoBottom {
    margin-top: 10px;
  }
  .productIfoItem {
    width: 150px;
    display: flex;
    justify-content: space-between;
  }
  .productInfoValue {
    font-weight: 300;
  }
  .productBottom {
    padding: 20px;
    margin: 20px;
    box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  }
  .productForm {
    display: flex;
    justify-content: space-between;
  }
  .productFormLeft {
    display: flex;
    flex-direction: column;
  }
  .productFormLeft > label {
    margin-bottom: 10px;
    color: gray;
  }
  .productFormLeft > input {
    margin-bottom: 10px;
    border: none;
    padding: 5px;
    border-bottom: 1px solid gray;
    outline: none;
  }
  .productFormLeft > select {
    margin-bottom: 10px;
  }
  .productUploadImg {
    width: 100px;
    height: 100px;
    border-radius: 10px;
    object-fit: cover;
    margin-right: 20px;
  }
  .productFormRight {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
  .productUpload {
    display: flex;
    align-items: center;
  }
  .productButton {
    border: none;
    padding: 5px;
    border-radius: 5px;
    background-color: darkblue;
    color: #fff;
    font-weight: 600;
    cursor: pointer;
  }
`;

export default Product;
