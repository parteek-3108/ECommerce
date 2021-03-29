import React from "react";
import {
  Card,
  CardImg,
  CardBody,
  CardSubtitle,
  CardTitle,
  Button,
  CardText,
  Container
} from "reactstrap";
import { Link, Router } from "react-router-dom";
import ModalComp from "./ModalComp";
export default function Product(props) {
  const [isVisible, setVisible] = React.useState(false);

  function handleEvent() {
    var tempData;
    if (props.buttonstatement1 == "Add to Cart") {
      tempData = props.cartData;
      tempData.push(props.content);
    } else {
      tempData = props.cartData.filter((cartValue) => {
        console.log(cartValue.id, props.cartData[props.index].id);
        console.log(cartValue.id !== props.cartData[props.index].id);
        return cartValue.id !== props.cartData[props.index].id;
      });
      console.log(tempData);
    }

    props.setCartFunction(tempData);
  }

  function IncreaseQuantity() {
    let current = props.content;
    current.Quantity++;
    let tempData = props.cartData.map((cartValue, index) => {
      if (cartValue.id !== props.cartData[props.index].id) return cartValue;
      return current;
    });
    props.setCartFunction(tempData);
  }
  function DecreaseQuantity() {
    let current = props.content;
    current.Quantity--;
    let tempData = props.cartData.map((cartValue, index) => {
      if (cartValue.id !== props.cartData[props.index].id) return cartValue;
      return current;
    });
    props.setCartFunction(tempData);
  }

  return (
    <>
      <Card>
        <CardImg
          top
          width="100%"
          src={props.content.imagePath}
          alt="Card image cap"
        />
        <CardBody>
          <CardTitle tag="h5">{props.content.title}</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">
            price : {props.content.price}
          </CardSubtitle>
          {props.buttonstatement1 != "Add to Cart" ? (
            <Container className="row d-flex justify-content-center">
              <div className="col-6">Quantity : {props.content.Quantity}</div>
              <div className="col-6">
                <div className="row">
                  <div className="col-6">
                    <Button
                      color="primary"
                      onClick={() => {
                        IncreaseQuantity();
                      }}
                    >
                      +
                    </Button>
                  </div>
                  <div className="col-6">
                    <Button
                      color="primary"
                      onClick={() => {
                        DecreaseQuantity();
                      }}
                    >
                      -
                    </Button>
                  </div>
                </div>
              </div>
            </Container>
          ) : (
            <p></p>
          )}
          {props.buttonstatement1 == "Add to Cart" ? (
            <Link to="/Cart" className="text-white">
              <Button
                className="m-1"
                color="primary"
                onClick={() => {
                  handleEvent();
                }}
              >
                Add to Cart
              </Button>
            </Link>
          ) : (
            <Button
              className="m-1"
              color="primary"
              onClick={() => {
                handleEvent();
              }}
            >
              Delete
            </Button>
          )}

          <Button
            className="m-1"
            color="danger"
            onClick={() => {
              setVisible(!isVisible);
            }}
          >
            {props.buttonstatement2}
          </Button>
        </CardBody>
      </Card>
      {isVisible ? (
        <ModalComp setVisible="true" content={props.content} />
      ) : (
        <p></p>
      )}
    </>
  );
}
