import { DataGrid } from "@material-ui/data-grid";
import styled from "styled-components";

const UserList = () => {
  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "userName",
      headerName: "Username",
      width: 200,
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
  ];

  const rows = [
    {
      id: 1,
      userName: "Jhon Doe",
      avatar:
        "https://images.unsplash.com/photo-1623330188314-8f4645626731?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=659&q=80",
      email: "demo@demo.com",
      status: "active",
      transaction: "$120.00",
    },
    {
      id: 2,
      userName: "Jhon Doe",
      avatar:
        "https://images.unsplash.com/photo-1623330188314-8f4645626731?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=659&q=80",
      email: "demo@demo.com",
      status: "active",
      transaction: "$120.00",
    },
    {
      id: 3,
      userName: "Jhon Doe",
      avatar:
        "https://images.unsplash.com/photo-1623330188314-8f4645626731?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=659&q=80",
      email: "demo@demo.com",
      status: "active",
      transaction: "$120.00",
    },
    {
      id: 4,
      userName: "Jhon Doe",
      avatar:
        "https://images.unsplash.com/photo-1623330188314-8f4645626731?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=659&q=80",
      email: "demo@demo.com",
      status: "active",
      transaction: "$120.00",
    },
    {
      id: 5,
      userName: "Jhon Doe",
      avatar:
        "https://images.unsplash.com/photo-1623330188314-8f4645626731?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=659&q=80",
      email: "demo@demo.com",
      status: "active",
      transaction: "$120.00",
    },
    {
      id: 6,
      userName: "Jhon Doe",
      avatar:
        "https://images.unsplash.com/photo-1623330188314-8f4645626731?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=659&q=80",
      email: "demo@demo.com",
      status: "active",
      transaction: "$120.00",
    },
    {
      id: 7,
      userName: "Jhon Doe",
      avatar:
        "https://images.unsplash.com/photo-1623330188314-8f4645626731?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=659&q=80",
      email: "demo@demo.com",
      status: "active",
      transaction: "$120.00",
    },
    {
      id: 8,
      userName: "Jhon Doe",
      avatar:
        "https://images.unsplash.com/photo-1623330188314-8f4645626731?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=659&q=80",
      email: "demo@demo.com",
      status: "active",
      transaction: "$120.00",
    },
    {
      id: 9,
      userName: "Jhon Doe",
      avatar:
        "https://images.unsplash.com/photo-1623330188314-8f4645626731?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=659&q=80",
      email: "demo@demo.com",
      status: "active",
      transaction: "$120.00",
    },
    {
      id: 10,
      userName: "Jhon Doe",
      avatar:
        "https://images.unsplash.com/photo-1623330188314-8f4645626731?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=659&q=80",
      email: "demo@demo.com",
      status: "active",
      transaction: "$120.00",
    },
  ];
  return (
    <Wrapper>
      {/* <div className=""> */}
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        checkboxSelection
        disableSelectionOnClick
      />
      {/* </div> */}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  flex: 4;
`;

export default UserList;
