import React from "react";
import { Button, Container } from "reactstrap";
export default function NavButton(props) {
  var list = props.buttonList;

  return (
    <>
      <Container className="d-flex justify-content-end">
        {list.map((val) => {
          return (
            <Button color="primary" className="m-2">
              {" "}
              {val}{" "}
            </Button>
          );
        })}
      </Container>
    </>
  );
}
