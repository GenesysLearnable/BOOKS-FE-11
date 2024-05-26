import React from "react";
import MsgF from "../Components/CommunityMsgF/MsgF.js";
import Nav from "../Components/ProfilePageComponents/Nav.jsx";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  color: #495057;
`;

function CommunityMsg() {
  return (
    <Container>
      <Nav />
      <MsgF />
    </Container>
  );
}

export default CommunityMsg;
