import styled from "styled-components";

const NewProduct = () => {
  return (
    <Wrapper>
      <div className="newProduct">
        <h1 className="addProductTitle">New Product</h1>
        <form className="addProductForm">
          <div className="addProductItem">
            <label>Image</label>
            <input type="file" id="file" />
          </div>
          <div className="addProductItem">
            <label>Name</label>
            <input type="text" placeholder="Apple Airpods" />
          </div>
          <div className="addProductItem">
            <label>Stock</label>
            <input type="text" placeholder="123" />
          </div>
          <div className="addProductItem">
            <label>Active</label>
            <select name="active" id="active">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
          <button className="addProductButton">Create</button>
        </form>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  flex: 4;
  .addProductForm {
    margin-top: 10px;
  }

  .addProductItem {
    width: 250px;
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
  }

  .addProductItem > label {
    color: gray;
    font-weight: 600;
    margin-bottom: 10px;
  }

  .addProductItem > input {
    padding: 10px;
  }

  .addProductItem > select {
    padding: 10px;
  }

  .addProductButton {
    margin-top: 10px;
    padding: 7px 10px;
    border: none;
    border-radius: 10px;
    background-color: darkblue;
    color: white;
    font-weight: 600;
    cursor: pointer;
  }
`;

export default NewProduct;
