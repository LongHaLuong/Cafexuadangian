import { Layout, Image, Row, Col, Typography } from "antd";
import "./style.css";
import Contact from "../Contact";
import { Link } from "react-router-dom";
import avatar from "../../../../assets/avatar.png";
import { RightCircleFilled } from "@ant-design/icons";

const { Title, Paragraph } = Typography;
const { Header, Content, Footer } = Layout;

const HomePage = () => {
  return (
    <>
      <Layout className="layout">
        <Header style={{ height: "80px" }}>
          <Row style={{ textAlign: "center", fontSize: 20 }} className="header">
            <Col span="4">
              <a className="story" href="/">
                Câu chuyện Cà phê xưa
              </a>
            </Col>
            <Col span="3">
              <a className="traditional anchor" href="/#traditional">
                Cà phê xưa dân gian
              </a>
            </Col>
            <Col span="3">
              <a className="garden anchor" href="/#garden">
                Khu vườn cà phê
              </a>
            </Col>
            <Col span="4">
              <a href="/">
                <Image
                  width={75}
                  preview={false}
                  className="logo"
                  src={avatar}
                />
              </a>
            </Col>
            <Col span="3">
              <a className="knowledge anchor" href="/#knowledge">
                Kiến thức cà phê
              </a>
            </Col>
            <Col span="3">
              <Link to="/system">Hệ thống</Link>
            </Col>
            <Col span="3">
              <a
                className="contact"
                onClick={() => window.scrollTo(0, document.body.scrollHeight)}
              >
                Liên hệ
              </a>
            </Col>
          </Row>
        </Header>
        <Content>
          <Paragraph className="storyDetailed">
            <Title className="storyTitle">HỆ THỐNG CÀ PHÊ XƯA DÂN GIAN</Title>
            <Paragraph style={{ textAlign: "center"}}>
              ______________________
              <br />
              <RightCircleFilled /> Văn phòng cà phê TP.HCM
              <br />  
              143A Ung Văn Khiêm, Phường 22, Quận Bình Thạnh, Thành Phố Hồ Chí Minh

              <br />
              <RightCircleFilled /> Nông trại cà phê Bảo Lộc & Homestay
              <br />  
              689 Lý Thái Tổ, Đam Bri, Thành Phố Bảo Lộc, Tỉnh Lâm Đồng
            </Paragraph>
          </Paragraph>
        </Content>
        <Footer>
          <Contact id="contact" />
        </Footer>
      </Layout>
    </>
  );
};

export default HomePage;
