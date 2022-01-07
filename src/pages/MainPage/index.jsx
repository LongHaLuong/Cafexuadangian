import { Layout, Image, Avatar, Row, Col } from "antd";
import "./style.css";
import { HomeTwoTone, AntDesignOutlined } from "@ant-design/icons";
import { Carousel } from "antd";
import Story from "./components/Story";
import Traditional from "./components/Traditional";
import Garden from "./components/Garden";
import Duty from "./components/Duty";
import Reviews from "./components/Reviews";
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
        <Header style={{ height: "80px"}}>
          <Row style={{ textAlign: "center", fontSize: 20}}>
            <Col span="4">
              <div className="story"> CÂU CHUYỆN CÀ PHÊ XƯA</div>
            </Col>
            <Col span="3">
              <div className="traditional">CÀ PHÊ XƯA DÂN GIAN</div>
            </Col>
            <Col span="3">
              <div className="garden">KHU VƯỜN CÀ PHÊ</div>
            </Col>
            <Col span="4">
              <Image
                width={75}
                preview={false}
                className="logo"
                src="/avatar.png"
              />
            </Col>
            <Col span="3">
              <div className="knowledge">KIẾN THỨC CÀ PHÊ</div>
            </Col>
            <Col span="3">
              <div className="system">HỆ THỐNG</div>
            </Col>
            <Col span="3">
              <div className="contact">LIÊN HỆ</div>
            </Col>
          </Row>
        </Header>
        <Content>
          <Carousel autoplay >
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

          <Story/>
          <Traditional/>
          <Garden/>
          <Duty />
          <Reviews />
        </Content>
        <Footer></Footer>
      </Layout>
    </>
  );
};

export default HomePage;
