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
              <label htmlFor="Male"></label>
              <input type="radio" name="gender" id="female" value="female" />
              <label htmlFor="Female"></label>
              <input type="radio" name="gender" id="other" value="other" />
              <label htmlFor="Other"></label>
            </div>
          </div>
        </form>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  flex: 4;
`;

export default NewUser;
