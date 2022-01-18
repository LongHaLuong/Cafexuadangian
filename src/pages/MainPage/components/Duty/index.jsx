import { Row, Col, Card, Typography } from "antd";
import { useState } from "react";

const { Title } = Typography;
const { Meta } = Card;

const Duty = () => {
  return (
    <>
      <Row id="duty">
        <Col span={8} style={{ padding: "30px" }}></Col>
        <Col span={8} style={{ padding: "30px" }}></Col>
        <Col span={8} style={{ padding: "30px" }}>
          <div className="title_box_right">
            <Title level={5}>Sứ mệnh cà phê xưa</Title>
          </div>
        </Col>
      </Row>
      <div className="site-card-wrapper">
        <Row >
          <Col span={8}>
            <Card title="Sứ mệnh 1" bordered={false}>
              Card content
            </Card>
          </Col>
          <Col span={8}>
            <Card title="Sứ mệnh 2" bordered={false}>
              Card content
            </Card>
          </Col>
          <Col span={8}>
            <Card title="Sứ mệnh 3" bordered={false}>
              Card content
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Duty;
