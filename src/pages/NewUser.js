import styled from "styled-components";

const NewUser = () => {
  return (
    <Wrapper>
      <div className="newUser">
        <h1 className="newUserTitle">New User</h1>
        <form className="newUserForm">
          <div className="newUserItem">
            <label>Username</label>
            <input type="text" placeholder="jhon" />
          </div>
          <div className="newUserItem">
            <label>Full Name</label>
            <input type="text" placeholder="jhon smith" />
          </div>
          <div className="newUserItem">
            <label>Email</label>
            <input type="email" placeholder="jhon@gmail.com" />
          </div>
          <div className="newUserItem">
            <label>Password</label>
            <input type="password" placeholder="password" />
          </div>
          <div className="newUserItem">
            <label>Phone</label>
            <input type="text" placeholder="+1 151 65 1551" />
          </div>
          <div className="newUserItem">
            <label>Address</label>
            <input type="text" placeholder="New York | USA" />
          </div>
          <div className="newUserItem">
            <label>Gender</label>
            <div className="newUserGender">
              <input type="radio" name="gender" id="male" value="male" />
              <label htmlFor="male">Male</label>
              <input type="radio" name="gender" id="female" value="female" />
              <label htmlFor="female">Female</label>
              <input type="radio" name="gender" id="other" value="other" />
              <label htmlFor="other">Other</label>
            </div>
          </div>
          <div className="newUserItem">
            <label>Active</label>
            <select name="active" id="active" className="newUserSelect">
              <option value="yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>
          <button className="newUserButton">Create</button>
        </form>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  flex: 4;
  .newUserForm {
    display: flex;
    flex-wrap: wrap;
  }
  .newUserItem {
    width: 400px;
    display: flex;
    flex-direction: column;
    margin-top: 10px;
    margin-right: 20px;
  }
  .newUserItem > label {
    margin-bottom: 10px;
    font-size: 14px;
    font-weight: 600;
    color: rgb(151, 150, 150);
  }
  .newUserItem > input {
    height: 20px;
    padding: 20px 10px;
    border: 1px solid gray;
    border-radius: 5px;
    outline: none;
  }
  .newUserGender > input {
    margin-top: 15px;
  }
  .newUserGender > label {
    margin: 10px;
    font-size: 18px;
    color: #555;
  }
  .newUserSelect {
    height: 40px;
    border-radius: 5px;
  }
  .newUserButton {
    width: 200px;
    border: none;
    background-color: darkblue;
    color: #fff;
    padding: 7px 10px;
    font-weight: 600;
    border-radius: 10px;
    margin-top: 30px;
    cursor: pointer;
  }
`;

export default NewUser;
