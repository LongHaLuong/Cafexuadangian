import { Row, Col, Divider } from "antd";
import { Typography } from "antd";
import { Button } from "antd";
import { FacebookFilled, InstagramFilled } from "@ant-design/icons";
import { Image } from "antd";
import "./style.css";
import BTC from "../../../../assets/BCT.png";
import logo from "../../../../assets/LogoCFX.png";
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const { Title, Paragraph } = Typography;

const Contact = () => {

  return (
    <>
      <Row>
        <Col className="gutter-row" span={12}>
          <Title level={4}>CÀ PHÊ XƯA DÂN GIAN</Title>
          <Paragraph className="contactContent">
            CÔNG TY TNHH DV TM CÀ PHÊ XƯA
          </Paragraph>
          <Paragraph className="contactContent">MSDN: 5801460294</Paragraph>
          <Paragraph className="contactContent">
            Số điện thoại liên hệ: 02835121164{" "}
          </Paragraph>
          <Paragraph className="contactContent">
            Email: ctycaphexua@gmail.com
          </Paragraph>
          <Button
            type="primary"
            icon={<FacebookFilled style={{ fontSize: 30 }} />}
            size="large"
            href="https://www.facebook.com/dambrihomestay/"
            target="_blank"
          />
          <Button
            type="primary"
            icon={<InstagramFilled style={{ fontSize: 30 }} />}
            size="large"
            href="https://instagram.com/dambrihomestay/"
            target="_blank"
          />
        </Col>
        <Col className="gutter-row" span={6}>
          <Row>
            <Image src={BTC} width="50%" preview={false}></Image>
          </Row>
          <Row>
            <Image
              src={logo}
              width="50%"
              preview={false}
              style={{ background: "white", padding: "5px", marginTop:"10px" }}
            ></Image>
          </Row>
        </Col>
        <Col className="gutter-row" span={6}>
          <Row>
            <Image src={BTC} width="50%" preview={false}></Image>
          </Row>
          <Row>
            <Image
              src={logo}
              width="50%"
              preview={false}
              style={{ background: "white", padding: "5px", marginTop:"10px" }}
            ></Image>
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default Contact;
