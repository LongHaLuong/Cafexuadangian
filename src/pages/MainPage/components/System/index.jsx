import { Layout, Image, Row, Col } from "antd";
import "./style.css";
import Contact from "../Contact";
import { Link } from "react-router-dom";
import avatar from "../../../../assets/avatar.png";

const { Header, Content, Footer } = Layout;

const HomePage = () => {
  return (
    <>
      <Layout className="layout">
        <Header style={{ height: "80px" }}>
          <Row style={{ textAlign: "center", fontSize: 20 }} className="header">
            <Col span="4">
              <a className="story" onClick={() => window.scrollTo(0, 0)}>
                Câu chuyện Cà phê xưa
              </a>
            </Col>
            <Col span="3">
              <a className="traditional anchor" href="#traditional">
                Cà phê xưa dân gian
              </a>
            </Col>
            <Col span="3">
              <a className="garden anchor" href="#garden">
                Khu vườn cà phê
              </a>
            </Col>
            <Col span="4">
              <Image width={75} preview={false} className="logo" src={avatar} />
            </Col>
            <Col span="3">
              <a className="knowledge anchor" href="#knowledge">
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
      
        </Content>
        <Footer>
          <Contact id="contact" />
        </Footer>
      </Layout>
    </>
  );
};

export default HomePage;
