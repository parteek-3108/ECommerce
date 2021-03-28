import React from "react";
import { Button, Container } from "reactstrap";
import { Link } from "react-router-dom";
export default function NavButton(props) {
  var list = props.List;

  return (
    <>
      <Container className="d-flex justify-content-end">
        {list.map((val) => {
          return val == "BackToProductPage" ? (
            <Link to="/" className="text-white">
              <Button color="primary" className="m-2">
                {val}
              </Button>
            </Link>
          ) : (
            <Button color="primary" className="m-2">
              {val}
            </Button>
          );
        })}
      </Container>
    </>
  );
}
