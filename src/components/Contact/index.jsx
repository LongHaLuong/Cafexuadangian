import { Row, Col, Typography, Button, Image } from "antd";
import Icon, { FacebookFilled, InstagramFilled } from "@ant-design/icons";
import "./style.css";
import BTC from "../../assets/BCT.png";
import logo from "../../assets/LogoCFX.png";
import MapImg from "../../assets/map.png";
import { ReactComponent as PhoneSvg } from "../../assets/phone.svg";
import { ReactComponent as EmailSvg } from "../../assets/email.svg";
import { ReactComponent as AddressSvg } from "../../assets/address.svg";
const AnyReactComponent = ({ text }) => <div>{text}</div>;

const { Title, Paragraph } = Typography;

const Contact = () => {
  return (
    <>
      <Row>
        <Col className="gutter-row" span={4}>
          <Image
            src={logo}
            width="70%"
            preview={false}
            style={{ background: "inherit", padding: "5px", marginTop: "10px" }}
          ></Image>
          <Image src={BTC} width="50%" preview={false}></Image>
          <Paragraph
            className="contactContent"
            style={{ paddingLeft: "2.2vw" }}
          >
            copyright©2022
          </Paragraph>
        </Col>
        <Col className="gutter-row contactContent" span={7}>
          <Row style={{ paddingBottom: 10 }}>
            <Col span={2}>
              <PhoneSvg style={{ width: 30 }} />
            </Col>
            <Col span={20} style={{marginLeft: "1em"}}>
              <div>02835121164</div>
            </Col>
          </Row>
          <Row style={{ paddingBottom: 10 }}>
            <Col span={2}>
              <EmailSvg style={{ width: 30 }} />
            </Col>
            <Col span={20} style={{marginLeft: "1em"}}>
              <div>ctycaphexua@gmail.com</div>
            </Col>
          </Row>
        </Col>
        <Col span={7}>
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
          <a
            href="https://www.google.com/maps/place/Homestay+Dambri/@11.6121455,107.7566397,17z/data=!4m12!1m6!3m5!1s0x3173f3e36a885445:0xe15b6f48224cf030!2sHomestay+Dambri!8m2!3d11.6121403!4d107.7588284!3m4!1s0x3173f3e36a885445:0xe15b6f48224cf030!8m2!3d11.6121403!4d107.7588284"
            target="_blank"
          >
            <Image src={MapImg} preview={false}></Image>
          </a>
        </Col>
      </Row>
    </>
  );
};

export default Contact;
