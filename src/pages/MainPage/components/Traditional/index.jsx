import { Row, Col } from 'antd';
import { Typography } from 'antd';
import { useState } from "react";
import { Card, Pagination } from 'antd';

const { Title, Paragraph } = Typography;

let data = [
  {
    name: "Sản phẩm 1",
    price: "100.000VNĐ",
    src: "/product.jpg"
  },
  {
    name: "Sản phẩm 2",
    price: "100.000VNĐ",
    src: "/product.jpg"
  },
  {
    name: "Sản phẩm 3",
    price: "100.000VNĐ",
    src: "/product.jpg"
  },
  {
    name: "Sản phẩm 4",
    price: "100.000VNĐ",
    src: "/product.jpg"
  },
  {
    name: "Sản phẩm 5",
    price: "100.000VNĐ",
    src: "/product.jpg"
  },
  {
    name: "Sản phẩm 6",
    price: "100.000VNĐ",
    src: "/product.jpg"
  },
  {
    name: "Sản phẩm 7",
    price: "100.000VNĐ",
    src: "/product.jpg"
  },
  {
    name: "Sản phẩm 8",
    price: "100.000VNĐ",
    src: "/product.jpg"
  },
  {
    name: "Sản phẩm 9",
    price: "100.000VNĐ",
    src: "/product.jpg"
  },
]

const Traditional = () => {
  const numEachPage = 4   // Use a constant here to keep track of number of cards per page

  const [minValue,setMinValue] = useState(0);
  const [maxValue,setMaxValue] = useState(numEachPage);
  
  const handleChange = value => {
      setMinValue((value - 1) * numEachPage);
      setMaxValue(value * numEachPage)
  };

  return (
  <>
  <Row className="tradition">
        <Col span={8}>
          <img src="/phincafe.jpeg"></img>
        </Col>
        <Col span={16} style={{ padding: "30px" }}>
          <Title level={5}>Cà phê xưa dân gian</Title>
          {data &&
            data.length > 0 &&
            data.slice(minValue, maxValue).map(val => (
              <Card
                title={val.name}
                style={{ width: 300, height: 250 }}
              >
                <p>Giá sản phẩm: {val.price}</p>
                <img className="productImg" src={val.src}></img>
              </Card>
            ))}
          <Pagination
            defaultCurrent={1}
            defaultPageSize={numEachPage} //default size of page
            onChange={handleChange}
            total={data.length} //total number of card data available
          />
        </Col>
      </Row>
  </>
  );
};

export default Traditional;
