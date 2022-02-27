import { Row, Col, Typography } from "antd";
import "./style.css";
import nongdan from "../../../../assets/duty.jpg";

const { Title, Paragraph } = Typography;

const Story = () => {
  return (
    <>
      <Row id="duty">
        <Col span={16} style={{ padding: "30px", paddingTop: "20px" }}>
          <div className="title_box_left">
            <Title level={4} className="title">
              Sứ mệnh Cà phê xưa
            </Title>
          </div>
          <Paragraph strong>SỨ MỆNH CỦA CHÚNG TÔI</Paragraph>
          <Paragraph>
            - Bảo Tồn Hương Vị Cà Phê Xưa Nguyên Chất - Lưu Giữ Bản Sắc Văn Hóa
            Cà Phê Việt
            <br />
            - Người Bạn Chăm Sóc Sức Khỏe Của Mọi Nhà
            <br />
          </Paragraph>
          <Paragraph strong>TẦM NHÌN</Paragraph>
          <Paragraph>
            - Trở thành THƯƠNG HIỆU QUEN THUỘC của mọi gia đình
            <br />
            - Định hướng GU THƯỞNG THỨC CÀ PHÊ NGUYÊN CHẤT
            <br />
            - QÙA TẶNG Ý NGHĨA dành cho những người Quan Trọng Nhất
            <br />
            - Một trong những SẢN PHẨM CÀ PHÊ ĐƯỢC YÊU QUÝ NHẤT tại Việt Nam
            <br />
            * Vươn tầm Quốc Tế XUẤT KHẨU – Quảng Bá Văn Hóa Bản Sắc Cà Phê Việt
            trong tương lai...
            <br />
          </Paragraph>
        </Col>
        <Col span={8}>
          <img className="img" src={nongdan}></img>
        </Col>
      </Row>
    </>
  );
};

export default Story;
