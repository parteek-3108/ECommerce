import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  CardImg
} from "reactstrap";

const ModalComp = (props) => {
  // const { buttonLabel, className } = props;

  // const [modal, setModal] = useState(props.setVisible);

  // const toggle = () => setModal(!modal);

  const closeBtn = (
    <button className="close" onClick={()=>{
      props.setToggle(!props.toggle);
    }}>
      &times;
    </button>
  );

  return (
    <div>
      <Modal isOpen={props.toggle} toggle={()=>{
      props.setToggle(!props.toggle);
    }} >
        <ModalHeader toggle={()=>{
        props.setToggle(!props.toggle);
        }} close={closeBtn}>
          Modal title
        </ModalHeader>
        <CardImg
          top
          width="100%"
          src={props.content.imagePath}
          alt="Card image cap"
        />
        <ModalBody>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={()=>{
            props.setToggle(!props.toggle);
          }}>
            Ok
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default ModalComp;
