import { Layout, Avatar, Row, Col } from "antd";
import "./style.css";
import { HomeTwoTone, AntDesignOutlined } from "@ant-design/icons";

const { Header, Content, Footer } = Layout;

const HomePage = () => {
  return (
    <>
      <Layout className="layout">
        <Header style={{ backgroundColor: "white" }}>
          <Row>
            <Col span="1">
              <div className="home">
                <Avatar shape="square" icon={<HomeTwoTone />} />
              </div>
            </Col>
            <Col span="3">
              <div className="story">Câu chuyện cà phê xưa</div>
            </Col>
            <Col span="3">
              <div className="traditional">Cà phê xưa dân gian</div>
            </Col>
            <Col span="3">
              <div className="garden">Khu vườn cà phê</div>
            </Col>
            <Col span="5">
              <div className="logo">
                <Avatar
                  size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }}
                  icon={<AntDesignOutlined />}
                />
              </div>
            </Col>
            <Col span="3">
              <div className="knowledge">Kiến thức cà phê</div>
            </Col>
            <Col span="3">
              <div className="system">Hệ thống</div>
            </Col>
            <Col span="3">
              <div className="contact">Liên hệ</div>
            </Col>
          </Row>
        </Header>
        <Content style={{ padding: "0 50px" }}></Content>
        <Footer></Footer>
      </Layout>
    </>
  );
};

export default HomePage;
