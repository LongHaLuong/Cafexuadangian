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
                <Title className="homestayTitle" level={5}>
                  H??y ?????n v???i Homestay c???a ch??ng t??i
                </Title>
              </a>
            </Row>
            <Row>
              <Paragraph className="homestayContent">
                Homestay Dambri n???m c??ch th??c Dambri 5 km, s??? h???u kh??ng gian
                tho??ng m??t h??a c??ng kh??ng kh?? trong l??nh, y??n b??nh c???a r???ng
                nguy??n sinh s??? gi??p b???n c?? nh???ng ng??y tr???i nghi???m ?????y l?? t?????ng
                khi ?????n n??i ????y. <br /><br />
                T???a l???c t???i m???t ch??n ?????i B???o L???c, ch??ng t??i h??n h???nh ch??o ????n
                c??c b???n ?????n v???i Homestay c???a ch??ng t??i v?? c??ng ?????m ch??m v??o
                khung c???nh n??n th??, tr??? t??nh tr???i d??i ?????n t???n thung l??ng v?? nh???m
                nh??p ly c?? ph?? th??m n???ng, nguy??n ch???t trong m???t bu???i s??ng tinh
                m?? se l???nh. <br /><br />
                Qua bao n??m th??ng th??nh l???p v?? ph??t tri???n, ch??ng t??i lu??n mong
                mu???n mang ?????n cho b???n nh???ng d???ch v??? t???t nh???t, ch???t l?????ng nh???t
                khi b???n ?????t ch??n ?????n m???nh ?????t trong l??nh, m??t m??? c???a B???o L???c.
                H???n g???p c??c b???n trong m???t chuy???n du l???ch ??i t??m nh???ng ho??i ni???m x??a c??! <br/><br />
                HOMESTAY DAMBRI V?? C?? PH?? X??A D??N GIAN.
              </Paragraph>
            </Row>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Homestay;
