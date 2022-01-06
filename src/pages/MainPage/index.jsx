import { Layout, Avatar, Row, Col, Menu } from "antd";
import "./style.css";
import { HomeTwoTone, AntDesignOutlined } from "@ant-design/icons";
import { Carousel } from "antd";
import Story from "./components/Story"
import Traditional from "./components/Traditional";
import Garden from "./components/Garden";
const { Header, Content, Footer } = Layout;
const contentStyle = {
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#CA965C",
};
const HomePage = () => {
  return (
    <>
      <Layout className="layout">
        <Header >
          <Row>
            <Col span="1">
              <div className="home">
                <Avatar shape="square" icon={<HomeTwoTone />} />
              </div>
            </Col>
            <Col span="3">
              <div className="story"> CÂU CHUYỆN CÀ PHÊ XƯA</div>
            </Col>
            <Col span="3">
              <div className="traditional">CÀ PHÊ XƯA DÂN GIAN</div>
            </Col>
            <Col span="3">
              <div className="garden">KHU CƯỜN CÀ PHÊ</div>
            </Col>
            <Col span="5">
              <div >
                <Avatar className="logo"
                  size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }}
                  src="/avatar.png"
                />
              </div>
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

          <Story></Story>
          <Traditional></Traditional>
          <Garden></Garden>

        </Content>
        <Footer></Footer>
      </Layout>
    </>
  );
};

export default HomePage;
