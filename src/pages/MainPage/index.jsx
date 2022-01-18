import { Layout, Image, Avatar, Row, Col } from "antd";
import "./style.css";
import { Carousel } from "antd";
import Story from "./components/Story";
import Traditional from "./components/Traditional";
import Garden from "./components/Garden";
import Duty from "./components/Duty";
import Reviews from "./components/Reviews";
import Contact from "./components/Contact";
import Knowledge from "./components/Knowlegde";
import { Anchor } from "antd";
import avatar from '../../assets/avatar.png'

const { Link } = Anchor;

const { Header, Content, Footer } = Layout;
const contentStyle = {
  height: "400px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#CA965C",
};

const HomePage = () => {
  return (
    <>
      <Layout className="layout">
        <Header style={{ height: "80px" }}>
          <Row style={{ textAlign: "center", fontSize: 20 }}>
            <Col span="4">
              <a className="story" href="#story">
                {" "}
                CÂU CHUYỆN CÀ PHÊ XƯA
              </a>
            </Col>
            <Col span="3">
              <a className="traditional" href="#traditional">
                CÀ PHÊ XƯA DÂN GIAN
              </a>
            </Col>
            <Col span="3">
              <a className="garden" href="#garden">
                KHU VƯỜN CÀ PHÊ
              </a>
            </Col>
            <Col span="4">
              <Image width={75} preview={false} className="logo" src={avatar} />
            </Col>
            <Col span="3">
              <a className="knowledge" href="#knowledge">
                KIẾN THỨC CÀ PHÊ
              </a>
            </Col>
            <Col span="3">
              <a className="system" href="#system">
                HỆ THỐNG
              </a>
            </Col>
            <Col span="3">
              <a className="contact" href="#contact">
                LIÊN HỆ
              </a>
            </Col>
          </Row>
        </Header>
        <Content>
          <Carousel autoplay>
            <div>
              <h3 style={contentStyle}>1</h3>
            </div>
            <div>
              <h3 style={contentStyle}>2</h3>
            </div>
            <div>
              <h3 style={contentStyle}>3</h3>
            </div>
            <div>
              <h3 style={contentStyle}>4</h3>
            </div>
          </Carousel>

          <Story id="story" />
          <Traditional id="traditional" />
          <div id="garden">
            <Garden />
          </div>
          <Duty id="duty" />
          <Reviews id="reviews" />
          <div id="knowledge">
            <Knowledge />
          </div>
        </Content>
        <Footer>
          <Contact id="contact" />
        </Footer>
      </Layout>
    </>
  );
};

export default HomePage;
