import { Row, Col, Typography, Carousel, Image } from "antd";
import "./style.css";
import Img1 from "../../assets/Carousel_Homestay1.jpg";
import Img2 from "../../assets/Carousel_Homestay2.jpg";
import Img3 from "../../assets/Carousel_Homestay3.jpg";
import Img4 from "../../assets/Carousel_Homestay4.jpg";

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
                <Title className="homestayTitle" level={5}>
                  Hãy đến với Homestay của chúng tôi
                </Title>
              </a>
            </Row>
            <Row>
              <Paragraph className="homestayContent">
                Homestay Dambri nằm cách thác Dambri 5 km, sở hữu không gian
                thoáng mát hòa cùng không khí trong lành, yên bình của rừng
                nguyên sinh sẽ giúp bạn có những ngày trải nghiệm đầy lý tưởng
                khi đến nơi đây. <br /><br />
                Tọa lạc tại một chân đồi Bảo Lộc, chúng tôi hân hạnh chào đón
                các bạn đến với Homestay của chúng tôi và cùng đắm chìm vào
                khung cảnh nên thơ, trữ tình trải dài đến tận thung lũng và nhấm
                nháp ly cà phê thơm nồng, nguyên chất trong một buổi sáng tinh
                mơ se lạnh. <br /><br />
                Qua bao năm tháng thành lập và phát triển, chúng tôi luôn mong
                muốn mang đến cho bạn những dịch vụ tốt nhất, chất lượng nhất
                khi bạn đặt chân đến mảnh đất trong lành, mát mẻ của Bảo Lộc.
                Hẹn gặp các bạn trong một chuyến du lịch đi tìm những hoài niệm xưa cũ! <br/><br />
                HOMESTAY DAMBRI VÀ CÀ PHÊ XƯA DÂN GIAN.
              </Paragraph>
            </Row>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Homestay;
