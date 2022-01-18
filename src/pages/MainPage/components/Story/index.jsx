import { Row, Col, Typography } from "antd";
import "./style.css";

const { Title, Paragraph } = Typography;

const Story = () => {
  return (
    <>
      <Row id="story">
        <Col span={16} style={{ padding: "30px" }}>
          <div className="title_box_left">
            <Title level={5}>
              Câu chuyện cà phê xưa
            </Title>
          </div>
          <Paragraph>Nội dung trích dẫn: </Paragraph>
        </Col>
        <Col span={8}>
          <img className="img" src="/nongdan.jpg"></img>
        </Col>
      </Row>
    </>
  );
};

export default Story;
