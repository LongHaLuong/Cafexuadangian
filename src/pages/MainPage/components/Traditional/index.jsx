import { Row, Col, Typography, Card, List } from "antd";
import { useState } from "react";
import phincafe from '../../../../assets/phincafe.jpeg'
import caPheHat from "../../../../assets/caphehat.jpg";
import caPheBot from "../../../../assets/caphebot.jpg";
import binhGiuNhiet from "../../../../assets/binhgiunhiet.jpg";
import ruouCoTruyen from "../../../../assets/binhruou.jpg";
import "./style.css";

const { Title } = Typography;
const { Meta } = Card;

let data = [
  {
    name: "Cà Phê Hạt Nguyên Chất",
    price: "279.000VNĐ",
    src: caPheHat,
  },
  {
    name: "Cà Phê Bột Nguyên Chất",
    price: "279.000VNĐ",
    src: caPheBot,
  },
  {
    name: "Bình Giữ Nhiệt Cà Phê Tre",
    price: "179.000VNĐ",
    src: binhGiuNhiet,
  },
  {
    name: "Rượu cổ truyền Bình Định",
    price: "149.000VNĐ",
    src: ruouCoTruyen,
  },
];

const Traditional = () => {
  const numEachPage = 4; // Use a constant here to keep track of number of cards per page

  // bỏ comment để thêm pagination nếu có nhiều sản phẩm hơn
  // const [minValue, setMinValue] = useState(0);
  // const [maxValue, setMaxValue] = useState(numEachPage);

  // const handleChange = (value) => {
  //   setMinValue((value - 1) * numEachPage);
  //   setMaxValue(value * numEachPage);
  // };

  return (
    <>
      <Row id="traditional">
        <Col span={8}>
          <img style={{ width: "100%", height: "95%", paddingTop: "5%" }} src={phincafe}></img>
        </Col>
        <Col span={16} style={{ padding: "15px" }}>
          <div className="title_box_left" style={{ marginBottom: "10px" }}>
            <Title level={4}>Cà phê xưa dân gian</Title>
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
                    style={{ width: "100%"}}
                    cover={<img className="productImg" src={item.src} />}
                  >
                    <Meta
                      title={item.name}
                      description={"Giá sản phẩm: " + item.price}
                    />
                  </Card>
                </List.Item>
              )}
              // pagination={{
              //   defaultCurrent: 1,
              //   defaultPageSize: numEachPage, //default size of page
              //   onChange: handleChange,
              //   total: data.length,
              // }}
            ></List>
          )}
        </Col>
      </Row>
    </>
  );
};

export default Traditional;
