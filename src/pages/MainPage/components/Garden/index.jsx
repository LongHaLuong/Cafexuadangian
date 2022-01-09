import { Row, Col, Card, Typography, Input, List } from "antd";
import { useState } from "react";
import "./style.css";

const { Title, Paragraph } = Typography;
const { Meta } = Card;
const { Search } = Input;

let data = [
  {
    name: "Sản phẩm 1",
    price: "100.000VNĐ",
    src: "/product.jpg",
  },
  {
    name: "Sản phẩm 2",
    price: "100.000VNĐ",
    src: "/product.jpg",
  },
  {
    name: "Sản phẩm 3",
    price: "100.000VNĐ",
    src: "/product.jpg",
  },
  {
    name: "Sản phẩm 4",
    price: "100.000VNĐ",
    src: "/product.jpg",
  },
  {
    name: "Sản phẩm 5",
    price: "100.000VNĐ",
    src: "/product.jpg",
  },
  {
    name: "Sản phẩm 6",
    price: "100.000VNĐ",
    src: "/product.jpg",
  },
  {
    name: "Sản phẩm 7",
    price: "100.000VNĐ",
    src: "/product.jpg",
  },
  {
    name: "Sản phẩm 8",
    price: "100.000VNĐ",
    src: "/product.jpg",
  },
  {
    name: "Sản phẩm 9",
    price: "100.000VNĐ",
    src: "/product.jpg",
  },
];

const Garden = () => {
  const numEachPage = 5; // Use a constant here to keep track of number of cards per page

  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(numEachPage);

  const handleChange = (value) => {
    setMinValue((value - 1) * numEachPage);
    setMaxValue(value * numEachPage);
  };

  const onSearch = (value) => {
    console.log(value);
  };
  return (
    <>
      <Row id="garden">
        <Col span={8}></Col>
        <Col span={8}>
          <Search
            placeholder="Tìm sản phẩm"
            onSearch={onSearch}
            style={{ width: 500}}
          />
        </Col>
        <Col span={8} >
          <Title level={5}>Khu vườn cà phê</Title>
        </Col>
      </Row>
      <Row className="gardenProduct">
        {data && data.length > 0 && (
          <List
            className="list-garden"
            grid={{ gutter: 16, column: { numEachPage } }}
            dataSource={data}
            renderItem={(item) => (
              <List.Item>
                <Card
                  className="productCard"
                  hoverable
                  style={{ width: 240 }}
                  cover={<img className="productImg" src={item.src} />}
                >
                  <Meta
                    title={item.name}
                    description={"Giá sản phẩm: " + item.price}
                  />
                </Card>
              </List.Item>
            )}
            pagination={{
              defaultCurrent: 1,
              defaultPageSize: numEachPage, //default size of page
              onChange: handleChange,
              total: data.length,
            }}
          ></List>
        )}
      </Row>
    </>
  );
};

export default Garden;
