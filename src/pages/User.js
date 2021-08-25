import {
  CalendarToday,
  LocationSearching,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
  Publish,
} from "@material-ui/icons";
import { Link } from "react-router-dom";
import styled from "styled-components";

const User = () => {
  return (
    <Wrapper>
      <div className="user">
        <div className="userTitleContainer">
          <h1 className="userTilte">Edit user</h1>

          <Link to="/newUser">
            <button className="userAddButton">Create</button>
          </Link>
        </div>
        <div className="userContainer">
          <div className="userShow">
            <div className="userShowTop">
              <img
                src="https://images.unsplash.com/photo-1624298357597-fd92dfbec01d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
                alt="userShowTop"
                className="userShowImg"
              />
              <div className="userShowTopTitle">
                <span className="userShowUserName">Jhon Carry</span>
                <span className="userShowUserTitlte">JavaScript Develoepr</span>
              </div>
            </div>
            <div className="userShowBottom">
              <span className="userShowTitle">Account Details</span>
              <div className="userShowInfo">
                <PermIdentity className="userShowIcon" />
                <span className="userShowInfoTitle">jhonecarry</span>
              </div>
              <div className="userShowInfo">
                <CalendarToday className="userShowIcon" />
                <span className="userShowInfoTitle">12.5.2000</span>
              </div>
              <span className="userShowTitle">Contact Details</span>
              <div className="userShowInfo">
                <PhoneAndroid className="userShowIcon" />
                <span className="userShowInfoTitle">+18515451451</span>
              </div>
              <div className="userShowInfo">
                <MailOutline className="userShowIcon" />
                <span className="userShowInfoTitle">jhonecarry@gmail.com</span>
              </div>
              <div className="userShowInfo">
                <LocationSearching className="userShowIcon" />
                <span className="userShowInfoTitle">New York | USA</span>
              </div>
            </div>
          </div>
          <div className="userUpdate">
            <span className="userUpdateTitle">Edit</span>
            <form className="userUpdateForm">
              <div className="userUpdateLeft">
                <div className="userUpdateItem">
                  <label>Username</label>
                  <input
                    type="text"
                    placeholder="jhonecarry"
                    className="userUpdateInput"
                  />
                </div>

                <div className="userUpdateItem">
                  <label>Full Name</label>
                  <input
                    type="text"
                    placeholder="Jhon Carry"
                    className="userUpdateInput"
                  />
                </div>
                <div className="userUpdateItem">
                  <label>Email</label>
                  <input
                    type="text"
                    placeholder="jhonecarry@gmail.com"
                    className="userUpdateInput"
                  />
                </div>
                <div className="userUpdateItem">
                  <label>Phone</label>
                  <input
                    type="text"
                    placeholder="+18515451451"
                    className="userUpdateInput"
                  />
                </div>
                <div className="userUpdateItem">
                  <label>Address</label>
                  <input
                    type="text"
                    placeholder="New York | USA"
                    className="userUpdateInput"
                  />
                </div>
              </div>
              <div className="userUpdateRight">
                <div className="userUpdateUpload">
                  <img
                    src="https://images.unsplash.com/photo-1626586066636-a1523dd2141b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
                    alt="userUpdateImg"
                    className="userUpdateImg"
                  />
                  <label htmlFor="file">
                    <Publish className="userUpdateIcon" />
                  </label>
                  <input type="file" id="file" style={{ display: "none" }} />
                </div>
                <button className="userUpdateButton">Update</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  flex: 4;
  padding: 20px;
  .userTitleContainer {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .userAddButton {
    width: 80px;
    border: none;
    padding: 5px;
    background-color: teal;
    border-radius: 5px;
    cursor: pointer;
    color: #fff;
    font-size: 16px;
  }
  .userContainer {
    display: flex;
    margin-top: 20px;
  }
  .userShow {
    flex: 1;
    padding: 20px;
    box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  }
  .userUpdate {
    flex: 2;
    margin-left: 20px;
    padding: 20px;
    box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  }
  .userShowTop {
    display: flex;
    align-items: center;
  }
  .userShowImg {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    object-fit: cover;
  }
  .userShowTopTitle {
    display: flex;
    flex-direction: column;
    margin-left: 20px;
  }
  .userShowUserName {
    font-weight: 600;
  }
  .userShowUserTitlte {
    font-weight: 300;
  }
  .userShowBottom {
    margin-top: 20px;
  }
  .userShowTitle {
    font-size: 14px;
    font-weight: 600;
    color: rgb(175, 170, 170);
  }
  .userShowInfo {
    display: flex;
    align-items: center;
    margin: 20px 0;
    color: #444;
  }
  .userShowIcon {
    font-size: 16px !important;
  }
  .userShowInfoTitle {
    margin-left: 10px;
  }
  .userUpdateImg {
    width: 100px;
    height: 100px;
    border-radius: 10px;
    object-fit: cover;
    margin-right: 20px;
  }

  .userUpdateForm {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
  }
  .userUpdateTitle {
    font-size: 24px;
    font-weight: 600;
  }
  .userUpdateItem {
    display: flex;
    flex-direction: column;
    margin-top: 10px;
  }
  .userUpdateItem > label {
    margin-bottom: 5px;
    font-size: 14px;
  }
  .userUpdateInput {
    border: none;
    width: 250px;
    height: 30px;
    border-bottom: 1px solid gray;
    outline: none;
  }
  .userUpdateRight {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .userUpdateUpload {
    display: flex;
    align-items: center;
  }
  .userUpdateIcon {
    cursor: pointer;
  }
  .userUpdateButton {
    border-radius: 5px;
    border: none;
    padding: 5px;
    cursor: pointer;
    background-color: darkblue;
    color: #fff;
    font-weight: 600;
  }
`;

export default User;
