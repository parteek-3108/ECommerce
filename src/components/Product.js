import React from "react";
import {Card, CardImg, CardBody, CardSubtitle, CardTitle, Button, CardText} from 'reactstrap'
export default function Product(props){
  {console.log(props.content)}
    return ( <Card>
        <CardImg top width="100%" src={props.content.imagePath} alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h5">{props.content.title}</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">price : {props.content.price}</CardSubtitle>
          <Button className="m-1" color="primary">AddtoCart</Button>
          <Button className="m-1" color="danger">Desc</Button>
        </CardBody>
      </Card>
    )
}