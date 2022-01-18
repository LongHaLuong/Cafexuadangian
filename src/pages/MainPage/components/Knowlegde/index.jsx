import { Row, Col, Typography, Card, Image, Divider } from "antd";
import ReactPlayer from "react-player";
import "./style.css";
import thumbnail from "../../../../assets/thumbnail.jpg";

const { Title } = Typography;

const Knowledge = () => {
  return (
    <>
      <Row>
        <Col span={12} className="knowlegde-wrapper">
          <Title level={3}>Kiến thức cà phê</Title>
          <div className="knowledge-card">
            <Card>
              <Row>
                <Col span={7}>
                  <Image src={thumbnail} preview={false} width="95%" />
                </Col>
                <Col span={17}>
                  <Row>
                    <Title level={5}>Bài viết 1</Title>
                  </Row>
                  <Row>
                    <div>Nội dung 1</div>
                  </Row>
                </Col>
              </Row>
            </Card>
            <Card>
              <Row>
                <Col span={7}>
                  <Image src={thumbnail} preview={false} width="95%" />
                </Col>
                <Col span={17}>
                  <Row>
                    <Title level={5}>Bài viết 1</Title>
                  </Row>
                  <Row>
                    <div>Nội dung 1</div>
                  </Row>
                </Col>
              </Row>
            </Card>
            <Card>
              <Row>
                <Col span={7}>
                  <Image src={thumbnail} preview={false} width="95%" />
                </Col>
                <Col span={17}>
                  <Row>
                    <Title level={5}>Bài viết 1</Title>
                  </Row>
                  <Row>
                    <div>Nội dung 1</div>
                  </Row>
                </Col>
              </Row>
            </Card>
            <Card>
              <Row>
                <Col span={7}>
                  <Image src={thumbnail} preview={false} width="95%" />
                </Col>
                <Col span={17}>
                  <Row>
                    <Title level={5}>Bài viết 1</Title>
                  </Row>
                  <Row>
                    <div>Nội dung 1</div>
                  </Row>
                </Col>
              </Row>
            </Card>
          </div>
        </Col>

        <Col span={12}>
          <div className="video-wrapper">
            <Title level={3}>Video Clip</Title>
            <ReactPlayer
              className="videoplayer"
              url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
              controls
            />
          </div>
        </Col>
      </Row>
    </>
  );
};

export default Knowledge;
