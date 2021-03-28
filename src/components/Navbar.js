import React from "react";
import { Container } from "reactstrap";
import DisplayTitle from "./DisplayTitle";
import ProductsList from "./ProductsList.js";
import NavButton from "./NavButton.js";
export default function Navbar(props) {
  return (
    <Container>
      <DisplayTitle title={props.content.PageTitle} />
      <NavButton buttonList={props.content.Buttons} />
    </Container>
  );
}
