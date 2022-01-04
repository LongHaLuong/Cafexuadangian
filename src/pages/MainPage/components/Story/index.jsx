import { Row, Col } from 'antd';
import { Typography } from 'antd';

const { Title, Paragraph } = Typography;

const Story = () => {
  return (
    <>
      <Row className="story">
        <Col span={16} style={{ padding: "30px" }}>
          <Title level={5}>Câu chuyện cà phê xưa dân gian</Title>
          <Paragraph>Nội dung trích dẫn: </Paragraph>
        </Col>
        <Col span={8}>
          <img src="/nongdan.jpg"></img>
        </Col>
      </Row>
    </>
  );
};

export default Story;
