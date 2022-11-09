/* eslint-disable jsx-a11y/anchor-is-valid */
import { Row, Col, Image } from "antd";
import avatar from "../../assets/avatar.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <box style={{ height: "80px" }}>
        <Row style={{ textAlign: "center", fontSize: 20 }} className="header">
          <Col span="4" className="Box">
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
      </box>
    </>
  );
};

export default Header;
