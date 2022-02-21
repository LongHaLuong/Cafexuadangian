import { Row, Col, Divider } from "antd";
import { Typography } from "antd";
import { Button } from "antd";
import { FacebookFilled } from "@ant-design/icons";
import { Image } from 'antd';
import "./style.css";
import BTC from "../../../../assets/BCT.png";

const { Title, Paragraph } = Typography;

const Contact = () => {
  return (
    <>
      <Row>
        <Col className="gutter-row" span={12}>
          <Title level={4}>CÀ PHÊ XƯA DÂN GIAN</Title>
          <Paragraph className="contactContent">
            Địa chỉ Homestay: 689 Lý Thái Tổ, TP Bảo Lộc, Lâm Đồng
          </Paragraph>
          <Paragraph className="contactContent">
            Địa chỉ liên hệ: 143A Ung Văn Khiêm, Phường 25, Quận Bình
            Thạnh,TP.Hồ Chí Minh
          </Paragraph>
          <Paragraph className="contactContent">Số điện thoại liên hệ: 0906117705 (Anh Dũng)</Paragraph>
          <Button
            type="primary"
            icon={<FacebookFilled style={{ fontSize: 30 }} />}
            size="large"
            href="https://www.facebook.com/dambrihomestay/"
            target="_blank"
          />
        </Col>
        <Col className="gutter-row" span={6}>
          <Image src={BTC} width='50%'  preview={false}></Image>
        </Col>
      </Row>
    </>
  );
};

export default Contact;
