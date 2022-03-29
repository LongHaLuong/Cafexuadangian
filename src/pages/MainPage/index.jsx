import { Layout, Image, Carousel, Row, Col } from "antd";
import "./style.css";
import Story from "./components/Story";
import Traditional from "./components/Traditional";
import Garden from "./components/Garden";
import Duty from "./components/Duty";
import Reviews from "./components/Reviews";
import Contact from "./components/Contact";
import Knowledge from "./components/Knowlegde";
import Homestay from "./components/Homestay";
import { Link } from "react-router-dom";
import avatar from "../../assets/avatar.png";
import slide1 from "../../assets/Carousel_1.jpg";
import slide2 from "../../assets/Carousel_2.jpg";
import slide3 from "../../assets/Carousel_3.jpg";
import slide4 from "../../assets/Carousel_4.jpg";

const { Header, Content, Footer } = Layout;
const contentStyle = {
  height: "550px",
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
              <a className="homestay anchor" href="#homestay">
                Homestay Dambri
              </a>
            </Col>
            <Col span="4">
              <a href="/"> 
                <Image width={75} preview={false} className="logo" src={avatar} />
              </a>
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
          <Carousel autoplay dotPosition="top">
            <div>
              <h3 style={contentStyle}>
                <img className="carouselImg" src={slide1} fluid></img>
              </h3>
            </div>
            <div>
              <h3 style={contentStyle}>
                <img className="carouselImg" src={slide2} fluid></img>
              </h3>
            </div>
            <div>
              <h3 style={contentStyle}>
                <img className="carouselImg" src={slide3} fluid></img>
              </h3>
            </div>
            <div>
              <h3 style={contentStyle}>
                <img className="carouselImg" src={slide4} fluid></img>
              </h3>
            </div>
          </Carousel>

          <Story id="story" />
          <Traditional id="traditional" />
          {/* <div id="garden">
            <Garden />
          </div> */}
          <Duty id="duty" />
          {/* <Reviews id="reviews" /> */}
          <Homestay id="homestay" />
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
