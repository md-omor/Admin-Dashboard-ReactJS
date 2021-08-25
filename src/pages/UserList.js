import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { UserRows } from "../components/DummyData";

const UserList = () => {
  const [data, setdata] = useState(UserRows);

  const handleSubmit = (id) => {
    setdata(data.filter((item) => item.id !== id));
  };

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "userName",
      headerName: "Username",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="userListUser">
            <img className="userListImg" src={params.row.avatar} alt="avatar" />
            {params.row.userName}
          </div>
        );
      },
      editable: true,
    },
    {
      field: "email",
      headerName: "Email",
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
      field: "transaction",
      headerName: "Transaction Volume",
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
            <Link to={"/users/" + params.row.id}>
              <button className="userListEdit">Edit</button>
            </Link>

            <DeleteOutline
              className="userListDelete"
              onClick={() => handleSubmit(params.row.id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <Wrapper>
      {/* <div className=""> */}
      <DataGrid
        rows={data}
        columns={columns}
        pageSize={8}
        checkboxSelection
        disableSelectionOnClick
      />
      {/* </div> */}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  flex: 4;
  .userListUser {
    display: flex;
    align-items: center;
  }
  .userListImg {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    object-fit: cover;
    margin-right: 10px;
  }
  .userListEdit {
    border: none;
    border-radius: 10px;
    padding: 5px 10px;
    background-color: #3bb077;
    color: #fff;
    cursor: pointer;
    margin-right: 20px;
  }
  .userListDelete {
    color: red;
    cursor: pointer;
  }
`;

export default UserList;
