import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledLink = styled(Link)`
  text-decoration: none;
`;
const Wrapper = styled.div`
  box-sizing: border-box;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  flex-direction: row;
  padding: 20px 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 100;
  background-color: green;
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const Logo = styled.div`
  font-size: 32px;
  color: #fff;
  text-decoration: none;
  font-weight: 700;
`;

const MenuItem = styled.div`
  font-size: 18px;
  color: #fff;
  font-weight: 500;
  text-decoration: none;
  margin-left: 40px;
`;

export default function Navigator() {
  return (
    <Wrapper>
      <StyledLink to="/">
        <Logo>LOGO</Logo>
      </StyledLink>
      <Menu>
        <StyledLink to="/">
          <MenuItem>Home</MenuItem>
        </StyledLink>
        <StyledLink to="profile">
          <MenuItem>profile</MenuItem>
        </StyledLink>
        <StyledLink to="create-account">
          <MenuItem>login</MenuItem>
        </StyledLink>
      </Menu>
    </Wrapper>
  );
}
