import React from "react";
import { Container } from "reactstrap";
import Product from "./Product.js";
export default function ProductLists(props) {
  var list = props.content;
  return (
    <Container className="row d-flex justify-content-center text-center">
      {list.map((val, index) => {
        return (
          <div className="col-sm-6 col-md-4 col-xs-12 col-lg-3 m-4">
            <Product
              index={index}
              setCartFunction={props.setCartFunction}
              cartData={props.cartData}
              content={val}
              buttonstatement1={props.buttonstatement1}
              buttonstatement2={props.buttonstatement2}
            />
          </div>
        );
      })}
    </Container>
  );
}
