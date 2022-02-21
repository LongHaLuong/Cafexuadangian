import { Row, Col, Typography } from "antd";
import "./style.css";
import nongdan from "../../../../assets/nongdan.jpg";

const { Title, Paragraph } = Typography;

const Story = () => {
  return (
    <>
      <Row id="story">
        <Col span={16} style={{ padding: "30px", paddingTop:"20px" }}>
          <div className="title_box_left">
            <Title level={4} className="title">
              Câu chuyện Cà phê xưa
            </Title>
          </div>
          <Paragraph>
            …Thơm, bay, ngất ngây <br /> Hương say của đại ngàn đất đỏ <br />
            Đậm, đầm, ma mị
            <br />
            Chất vị của ký ức một thời…
            <br /> …Đến tận bây giờ, tôi vẫn nhớ về hương vị của những giọt cà
            phê ngày xưa, trong thập niên 70 – 80, khi con người ta thưởng thức
            cà phê một cách trọn vẹn, chứ không phải chỉ đến một điểm quen thuộc
            để trao đổi câu chuyện hàng ngày mà thức uống gọi kèm chỉ mang vị
            nhàn nhạt màu cánh gián… <br />
            Cái ký ức về cà phê ngày ấy nó đơn giản lắm, chỉ là một phin cà phê
            nho nhỏ với những giọt màu đen sóng sánh nhẹ nhàng, nhưng thơm lắm.
            Rồi khi nhấp từng chút một thì cái hương vị đặc biệt cứ đọng mãi
            trên đầu lưỡi, chầm chậm tan ra, rồi lưu lại thành một cảm giác ngây
            ngất đến tận cùng… <br />
            Bẵng đi vài thập kỷ, cái hương vị ấy chẳng biết đã đi về đâu, khiến
            con người ta cứ nhung nhớ khôn dường… <br />
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
