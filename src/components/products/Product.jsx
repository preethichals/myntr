import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { FaHeart,FaCartPlus,FaRegHeart } from "react-icons/fa";

function Product({ img, title, brand, newprice, oldprice,wishitem }) {


  return (
    <Card
      style={{ width: "max-width:100%" }}
      className="col p-3 m-2"
    >      
      <Card.Img variant="top" src={img} />
      <Card.ImgOverlay>{ wishitem ? <FaHeart/> : <FaRegHeart />}</Card.ImgOverlay>
      <Card.Body>
        <Card.Title>{brand} </Card.Title>
        <Card.Text>{title}</Card.Text>
        <Card.Text>
          Rs. <span className="">{newprice}</span>
          <span className="text-decoration-line-through px-2">{oldprice}</span>
        </Card.Text>
        <Button variant="primary">  <FaCartPlus /> Add to Cart </Button>
      </Card.Body>
    </Card>
  );
}

export default Product;
