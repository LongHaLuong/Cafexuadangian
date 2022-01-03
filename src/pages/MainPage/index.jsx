import { Layout } from "antd";
import "./style.css";
import { Avatar } from "antd";
import { HomeTwoTone, AntDesignOutlined } from "@ant-design/icons";

const { Header, Content, Footer } = Layout;

const HomePage = () => {
  return (
    <>
      <Layout className="layout">
        <Header style={{ backgroundColor: "white" }}>
          <div className="home">
            <Avatar shape="square" icon={<HomeTwoTone />} />
          </div>
          <div className="story">Câu chuyện cà phê xưa</div>
          <div className="traditional">Cà phê xưa dân gian</div>
          <div className="logo">
            <Avatar
              size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }}
              icon={<AntDesignOutlined />}
            />
          </div>
          <div className="garden">Khu vườn cà phê</div>
          <div className="knowledge">Kiến thức cà phê</div>
          <div className="system">Hệ thống</div>
          <div className="contact">Liên hệ</div>
        </Header>
        <Content style={{ padding: "0 50px" }}></Content>
        <Footer></Footer>
      </Layout>
    </>
  );
};

export default HomePage;
