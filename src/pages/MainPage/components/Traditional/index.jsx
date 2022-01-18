import { Row, Col, Typography, Card, List } from "antd";
import { useState } from "react";
import phincafe from '../../../../assets/phincafe.jpeg'
import product from "../../../../assets/product.jpg";

const { Title } = Typography;
const { Meta } = Card;

let data = [
  {
    name: "Sản phẩm 1",
    price: "100.000VNĐ",
    src: product,
  },
  {
    name: "Sản phẩm 2",
    price: "100.000VNĐ",
    src: product,
  },
  {
    name: "Sản phẩm 3",
    price: "100.000VNĐ",
    src: product,
  },
  {
    name: "Sản phẩm 4",
    price: "100.000VNĐ",
    src: product,
  },
  {
    name: "Sản phẩm 5",
    price: "100.000VNĐ",
    src: product,
  },
  {
    name: "Sản phẩm 6",
    price: "100.000VNĐ",
    src: product,
  },
  {
    name: "Sản phẩm 7",
    price: "100.000VNĐ",
    src: product,
  },
  {
    name: "Sản phẩm 8",
    price: "100.000VNĐ",
    src: product,
  },
  {
    name: "Sản phẩm 9",
    price: "100.000VNĐ",
    src: product,
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
          <img style={{ width: "100%", height: "90%" }} src={phincafe}></img>
        </Col>
        <Col span={16} style={{ padding: "15px" }}>
          <div className="title_box_left" style={{ marginBottom: "10px" }}>
            <Title level={5}>Cà phê xưa dân gian</Title>
          </div>
          {data && data.length > 0 && (
            <List
              grid={{ gutter: 16, column: 4 }}
              dataSource={data}
              renderItem={(item) => (
                <List.Item>
                  <Card
                    className="productCard"
                    hoverable
                    style={{ width: "100%" }}
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
