import React from "react";
import { Container } from "reactstrap";
import Navbar from "./Navbar";
import ProductLists from "./ProductsList";
export default function Cart(props) {
  // return <p>parteek</p>;
  var content = {
    PageTitle: "Cart !!!",
    ButtonsList: ["BackToProductPage", "LogOut"]
  };
  return (
    <Container>
      <Navbar content={content} />
      <ProductLists
        content={props.content}
        buttonstatement1={props.buttonstatement1}
        buttonstatement2={props.buttonstatement2}
      />
    </Container>
  );
}
