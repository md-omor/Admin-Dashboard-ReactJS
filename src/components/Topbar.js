import { Language, NotificationsNone, Settings } from "@material-ui/icons";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Topbar = () => {
  return (
    <Wrapper>
      <div className="topbar">
        <div className="topbarWrapper">
          <Link to="/" className="link">
            <div className="topLeft">
              <span className="logo">OmorAdmin</span>
            </div>
          </Link>

          <div className="topRight">
            <div className="topbarIconContainer">
              <NotificationsNone />
              <span className="topIconBag">2</span>
            </div>
            <div className="topbarIconContainer">
              <Language />
              <span className="topIconBag">2</span>
            </div>
            <div className="topbarIconContainer">
              <Settings />
            </div>
            <img
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="avatar"
              className="topAvatar"
            />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .topbar {
    width: 100%;
    height: 50px;
    background-color: #fff;
    position: sticky;
    top: 0;
    z-index: 999;
  }

  .topbarWrapper {
    height: 100%;
    padding: 0 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .logo {
    font-weight: bold;
    font-size: 30px;
    color: darkblue;
    cursor: pointer;
  }

  .topRight {
    display: flex;
    align-items: center;
  }
  .topbarIconContainer {
    position: relative;
    cursor: pointer;
    margin-right: 10px;
    color: #555;
  }

  .topIconBag {
    width: 15px;
    height: 15px;
    position: absolute;
    top: -5px;
    right: 0;
    background-color: red;
    color: #fff;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 10px;
  }

  .topAvatar {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    cursor: pointer;
  }
`;

export default Topbar;
