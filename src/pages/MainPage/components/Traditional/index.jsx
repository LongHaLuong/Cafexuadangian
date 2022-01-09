import { Row, Col, Typography, Card, List } from "antd";
import { useState } from "react";

const { Title } = Typography;
const { Meta } = Card;

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

const Traditional = () => {
  const numEachPage = 4; // Use a constant here to keep track of number of cards per page

  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(numEachPage);

  const handleChange = (value) => {
    setMinValue((value - 1) * numEachPage);
    setMaxValue(value * numEachPage);
  };

  return (
    <>
      <Row id="traditional">
        <Col span={8}>
          <img src="/phincafe.jpeg"></img>
        </Col>
        <Col span={16} style={{ padding: "30px" }}>
          <Title level={5}>Cà phê xưa dân gian</Title>
          {data && data.length > 0 && (
            <List
              grid={{ gutter: 16, column: 4 }}
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

        </Col>
      </Row>
    </>
  );
};

export default Traditional;
