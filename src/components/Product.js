import React, { useState } from "react";
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
  console.log(props);
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
    }

    props.setCartFunction(tempData);
    if (props.updateCartDB) {
      try {
        props.updateCartDB(tempData);
      } catch (err) {
        console.log(err);
      }
    }
  }

  function IncreaseQuantity() {
    let current = props.content;
    current.Quantity++;
    let tempData = props.cartData.map((cartValue, index) => {
      if (cartValue.id !== props.cartData[props.index].id) return cartValue;
      return current;
    });
    props.setCartFunction(tempData);
    if (props.updateCartDB) {
      try {
        props.updateCartDB(tempData);
      } catch (err) {
        console.log(err);
      }
    }
  }
  function DecreaseQuantity() {
    let current = props.content;
    current.Quantity--;
    let tempData = props.cartData.map((cartValue, index) => {
      if (cartValue.id !== props.cartData[props.index].id) return cartValue;
      return current;
    });
    props.setCartFunction(tempData);
    if (props.updateCartDB) {
      try {
        props.updateCartDB(tempData);
      } catch (err) {
        console.log(err);
      }
    }
  }

  const [toggle, setToggle] = useState(false);

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
              setToggle(!toggle);
            }}
          >
            {props.buttonstatement2}
          </Button>
        </CardBody>
      </Card>
      {toggle ? (
        <ModalComp
          toggle={true}
          content={props.content}
          setToggle={setToggle}
        />
      ) : (
        <p></p>
      )}
    </>
  );
}
