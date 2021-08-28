import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { productRows } from "../components/DummyData";

const ProductList = () => {
  const [data, setdata] = useState(productRows);
  const handleSubmit = (id) => {
    setdata(data.filter((item) => item.id !== id));
  };

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "product",
      headerName: "Product",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="productListItem">
            <img className="productListImg" src={params.row.img} alt="avatar" />
            {params.row.name}
          </div>
        );
      },
      editable: true,
    },
    {
      field: "stock",
      headerName: "Stock",
      width: 200,
      editable: true,
    },
    {
      field: "status",
      headerName: "Status",
      width: 160,
      editable: true,
    },
    {
      field: "price",
      headerName: "Price",
      width: 120,
      editable: true,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/products/" + params.row.id}>
              <button className="productListEdit">Edit</button>
            </Link>

            <DeleteOutline
              className="productListDelete"
              onClick={() => handleSubmit(params.row.id)}
            />
          </>
        );
      },
    },
  ];
  return (
    <Wrapper>
      <DataGrid
        rows={data}
        columns={columns}
        pageSize={8}
        checkboxSelection
        disableSelectionOnClick
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  flex: 4;
  .productListItem {
    display: flex;
    align-items: center;
  }
  .productListImg {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    object-fit: cover;
    margin-right: 10px;
  }
  .productListEdit {
    border: none;
    border-radius: 10px;
    padding: 5px 10px;
    background-color: #3bb077;
    color: #fff;
    cursor: pointer;
    margin-right: 20px;
  }
  .productListDelete {
    color: red;
    cursor: pointer;
  }
`;

export default ProductList;
