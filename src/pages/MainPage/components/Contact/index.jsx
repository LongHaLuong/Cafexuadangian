import { Row, Col, Divider } from "antd";
import { Typography } from "antd";
import { Button } from "antd";
import { FacebookFilled } from "@ant-design/icons";
import { Image } from 'antd';
import "./style.css";

const { Title, Paragraph } = Typography;

const Contact = () => {
  return (
    <>
      <Divider orientation="left" className="contactHeader">
        LIÊN HỆ VỚI CHÚNG TÔI
      </Divider>
      <Row>
        <Col className="gutter-row" span={12}>
          <Title level={5}>CÀ PHÊ XƯA DÂN GIAN</Title>
          <Paragraph>
            Địa chỉ Homestay: 689 Lý Thái Tổ, TP Bảo Lộc, Lâm Đồng
          </Paragraph>
          <Paragraph>
            Địa chỉ liên hệ: 143A Ung Văn Khiêm, Phường 25, Quận Bình
            Thạnh,TP.Hồ Chí Minh
          </Paragraph>
          <Paragraph>Số điện thoại liên hệ: 0938637373 (chị Loan)</Paragraph>
          <Button type="primary" icon={<FacebookFilled style={{fontSize: 30}}/>} size="large" href="https://www.facebook.com/dambrihomestay/" target="_blank"/>
        </Col>
        <Col className="gutter-row" span={6}>
          <Image src="/BCT.png" width={300} height={100}></Image>
        </Col>
      </Row>
    </>
  );
};

export default Contact;
