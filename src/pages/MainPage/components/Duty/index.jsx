import { Row, Col, Card, Typography } from "antd";
import { useState } from "react";

const { Meta } = Card;
const { Title, Paragraph } = Typography;

const Duty = () => {
  return (
    <>
      <Row id="duty">
        <Col span={8} style={{ padding: "30px" }}></Col>
        <Col span={8} style={{ padding: "30px" }}></Col>
        <Col span={8} style={{ padding: "30px" }}>
          <div className="title_box_right">
            <Title level={4}>Sứ mệnh Cà phê xưa</Title>
          </div>
        </Col>
      </Row>
      <div className="site-card-wrapper">
        <Row>
          <Col span={8}>
            {/* <Card title="Sứ mệnh 1" bordered={false}>
              Card content
            </Card> */}
          </Col>
          <Col span={10}>
            <Paragraph>
              SỨ MỆNH CỦA CHÚNG TÔI <br />
              - Bảo Tồn Hương Vị Cà Phê Xưa Nguyên Chất - Lưu Giữ Bản Sắc Văn
              Hóa Cà Phê Việt
              <br />
              - Người Bạn Chăm Sóc Sức Khỏe Của Mọi Nhà
              <br />
              <br />
              TẦM NHÌN
              <br />
              - Trở thành THƯƠNG HIỆU QUEN THUỘC của mọi gia đình
              <br />
              - Định hướng GU THƯỞNG THỨC CÀ PHÊ NGUYÊN CHẤT
              <br />
              - QÙA TẶNG Ý NGHĨA dành cho những người Quan Trọng Nhất
              <br />
              - Một trong những SẢN PHẨM CÀ PHÊ ĐƯỢC YÊU QUÝ NHẤT tại Việt Nam
              <br />
              * Vươn tầm Quốc Tế XUẤT KHẨU – Quảng Bá Văn Hóa Bản Sắc Cà Phê Việt trong tương lai...
              <br />
            </Paragraph>
          </Col>
          <Col span={8}>
            {/* <Card title="Sứ mệnh 3" bordered={false}>
              Card content
            </Card> */}
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Duty;
