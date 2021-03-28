import React from "react";
import {
  Card,
  CardImg,
  CardBody,
  CardSubtitle,
  CardTitle,
  Button,
  CardText
} from "reactstrap";
import { Link, Router } from "react-router-dom";
import ModalComp from "./ModalComp";
export default function Product(props) {
  {
    console.log(props.buttonstatement1);
  }
  const [isVisible, setVisible] = React.useState(false);
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
          <Button className="m-1" color="primary">
            {props.buttonstatement1 == "Add to Cart" ? (
              <Link to="/Cart" className="text-white">
                Add to Cart
              </Link>
            ) : (
              // "Add to Cart"
              "Delete"
            )}
          </Button>
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
