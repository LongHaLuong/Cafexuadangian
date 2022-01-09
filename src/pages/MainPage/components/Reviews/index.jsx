import { Row, Col, Card, Typography, Avatar, List } from "antd";
import { useState } from "react";

const { Title } = Typography;
const { Meta } = Card;

const numEachPage = 5;
const data =[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]

const Reviews = () => {
  return (
    <>
      <Row id="reviews">
        <Col span={8} style={{ padding: "30px" }}></Col>
        <Col span={8} style={{ padding: "30px" }}></Col>
        <Col span={8} style={{ padding: "30px" }}>
          <Title level={5}>Hoài vĩ cà phê xưa</Title>
        </Col>
      </Row>
      <div className="site-card-wrapper">
        <Row gutter={16}>
          <List
            className="list-garden"
            grid={{ gutter: 16, column: { numEachPage } }}
            dataSource={data}
            renderItem={(item) => (
              <List.Item>
                <Card style={{ width: 300, marginTop: 16 }}>
                  <Meta
                    avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                    title="Card title"
                    description="This is the description"
                  />
                </Card>
              </List.Item>
            )}
            pagination={{
              defaultCurrent: 1,
              defaultPageSize: numEachPage, //default size of page
              total: data.length,
            }}
          />
        </Row>
      </div>
    </>
  );
};

export default Reviews;
