import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../styles";
import { useNavigate } from "react-router-dom";
import LogoutIcon from '@mui/icons-material/Logout';

function NavBar({ user, setUser }) {
   const navigate = useNavigate();
  function handleLogoutClick() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
      }
    });
  }

  


  console.log(user.username)

  return (
    <Wrapper>
      <Nav id="user">
        {user.username}
        <Button
          id= "btnlog"
          variant="outline"
          onClick={(handleLogoutClick)}
        >
          <LogoutIcon />
        </Button>
      </Nav>
    </Wrapper>
  );
}

const Wrapper = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
`;

const Logo = styled.h1`
  font-family: "Permanent Marker", cursive;
  font-size: 3rem;
  margin: 0;
  line-height: 1;

  a {
    color: inherit;
    text-decoration: none;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: 4px;
  position: absolute;
  right: 8px;
`;

export default NavBar;
