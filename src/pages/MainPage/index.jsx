import { Layout } from "antd";
import "./style.css";
import { Avatar, Menu } from "antd";
import { HomeTwoTone, AntDesignOutlined } from "@ant-design/icons";
import { Carousel } from "antd";
import Story from "./components/Story"
import Traditional from "./components/Traditional";

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
        <Header style={{ backgroundColor: "white" }}>
          <Menu
            className="menu"
            mode="horizontal"
            style={{ backgroundColor: "#876445", color: "#EEC373" }}
          >
            <Menu.Item className="home">
              <Avatar shape="square" size="large" icon={<HomeTwoTone />} />
            </Menu.Item>
            <Menu.Item className="story">CÂU CHUYỆN CÀ PHÊ XƯA</Menu.Item>
            <Menu.Item className="product">CÀ PHÊ XƯA DÂN GIAN</Menu.Item>
            <Menu.Item className="logo">
              <Avatar
                size="large"
                style={{ backgroundColor: "#F4DFBA" }}
                src="/avatar.png"
              />
            </Menu.Item>
            <Menu.Item className="garden">KHU VƯỜN CÀ PHÊ</Menu.Item>
            <Menu.Item className="knowledge">KIẾN THỨC CÀ PHÊ</Menu.Item>
            <Menu.Item className="system">HỆ THỐNG</Menu.Item>
            <Menu.Item className="contact">LIÊN HỆ</Menu.Item>
          </Menu>
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

        </Content>
        <Footer></Footer>
      </Layout>
    </>
  );
};

export default HomePage;
