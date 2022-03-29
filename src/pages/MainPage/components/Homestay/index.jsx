import { Row, Col, Typography, Carousel, Image } from "antd";
import "./style.css";
import Img1 from "../../../../assets/Carousel_Homestay1.jpg";
import Img2 from "../../../../assets/Carousel_Homestay2.jpg";
import Img3 from "../../../../assets/Carousel_Homestay3.jpg";
import Img4 from "../../../../assets/Carousel_Homestay4.jpg";

const { Title, Paragraph } = Typography;

const Homestay = () => {
  const contentStyle = {
    height: "28rem",
  };
  return (
    <>
      <div id="homestay">
        <Row>
          <Col span={8} style={{ padding: "30px" }}>
            <div className="title_box_left">
              <Title level={4}>Homestay Dambri</Title>
            </div>
          </Col>
          <Col span={8} style={{ padding: "30px" }}></Col>
          <Col span={8} style={{ padding: "30px" }}></Col>
        </Row>
        <Row gutter={8}>
          <Col span={12}>
            <Carousel className="homestayCarousel" autoplay>
              <div>
                <h3 style={contentStyle}>
                  <a
                    href="https://vyctravel.com/tin-tuc/tin-tuc/hoa-ken-hong-no-ruc-troi-bao-loc.html"
                    target="_blank"
                  >
                    <img className="carouselImg" src={Img1} fluid></img>
                  </a>
                </h3>
              </div>
              <div>
                <h3 style={contentStyle}>
                  <a
                    href="https://www.facebook.com/dambrihomestay"
                    target="_blank"
                  >
                    <img className="carouselImg" src={Img2} fluid></img>
                  </a>
                </h3>
              </div>
              <div>
                <h3 style={contentStyle}>
                  <a
                    href="https://www.facebook.com/dambrihomestay"
                    target="_blank"
                  >
                    <img className="carouselImg" src={Img3} fluid></img>
                  </a>
                </h3>
              </div>
              <div>
                <h3 style={contentStyle}>
                  <a
                    href="https://www.facebook.com/dambrihomestay"
                    target="_blank"
                  >
                    <img className="carouselImg" src={Img4} fluid></img>
                  </a>
                </h3>
              </div>
            </Carousel>
          </Col>
          <Col span={10}>
            <Row>
              <a href="https://www.facebook.com/dambrihomestay" target="_blank">
                <Title className="homestayTitle" level={5}>Hãy đến với Homestay của chúng tôi</Title>
              </a>
            </Row>
            <Row>
              <Paragraph className="homestayContent">
                Homestay Dambri nằm cách thác Dambri 5 km, sở hữu không gian
                thoáng mát hòa cùng không khí trong lành, yên bình của rừng
                nguyên sinh sẽ giúp bạn có những ngày trải nghiệm đầy lý tưởng
                khi đến nơi đây
              </Paragraph>
            </Row>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Homestay;
