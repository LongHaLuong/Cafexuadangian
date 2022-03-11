import { Row, Col, Typography, Card, Image, Divider } from "antd";
import ReactPlayer from "react-player";
import "./style.css";
import thumbnail from "../../../../assets/thumbnail.jpg";
import hoakenhong from "../../../../assets/hoakenhong.jpg";
import caphesach from "../../../../assets/caphesach.jpg";
import checkin from "../../../../assets/checkin.jpg";

const { Title } = Typography;

const Knowledge = () => {
  return (
    <>
      <Row>
        <Col span={12} className="knowlegde-wrapper">
          <div className="title_box_left" style={{marginLeft:"30px"}}>
            <Title level={4} className="title">
              Kiến thức Cà phê xưa
            </Title>
          </div>
          <div className="knowledge-card">
            <Card>
              <Row>
                <Col span={7}>
                  <a
                    href="https://vyctravel.com/tin-tuc/tin-tuc/hoa-ken-hong-no-ruc-troi-bao-loc.html"
                    target="_blank"
                  >
                    <Image src={hoakenhong} preview={false} width="95%" />
                  </a>
                </Col>
                <Col span={17}>
                  <Row>
                    <a
                      href="https://vyctravel.com/tin-tuc/tin-tuc/hoa-ken-hong-no-ruc-troi-bao-loc.html"
                      target="_blank"
                    >
                      <Title level={5}>Hoa Kèn Hồng nở rực trời Bảo Lộc.</Title>
                    </a>
                  </Row>
                  <Row>
                    <div>
                      Hoa kèn hồng hay còn được gọi là hoa hồng phấn, nở vào
                      tháng 3 hằng năm và nhiều nhất nằm ở khu vực bờ đông Hồ
                      Nam Phương với cảnh sắc thiên nhiên hữu tình.
                      <br />
                      Nếu muốn ngắm hoa kèn hồng các bạn có thể đến các tuyến
                      đường Nguyễn Công Trứ, Kim Đồng, Lý Thái Tổ, Bùi Thị Xuân,
                      Quốc lộ 20, Lý Thường Kiệt,...công viên Hồ Thượng Lưu Đồng
                      Nai, khu vực phía đông hồ Nam Phương. Theo thống kê thành
                      phố có hơn 2000 cây hoa phấn hồng.
                    </div>
                  </Row>
                </Col>
              </Row>
            </Card>
            <Card>
              <Row>
                <Col span={7}>
                  <a
                    href="https://homesheel.com.vn/ca-phe-sach-la-gi-dinh-nghia-ca-phe-sach-va-mo-hinh-kinh-doanh-ca-phe-sach/#:~:text=C%C3%A0%20ph%C3%AA%20s%E1%BA%A1ch%20%C4%91%C6%B0%E1%BB%A3c%20hi%E1%BB%83u,t%E1%BB%91t%E2%80%9D%20cho%20s%E1%BB%A9c%20kh%E1%BB%8Fe.."
                    target="_blank"
                  >
                    <Image src={caphesach} preview={false} width="95%" />
                  </a>
                </Col>
                <Col span={17}>
                  <Row>
                    <a
                      href="https://homesheel.com.vn/ca-phe-sach-la-gi-dinh-nghia-ca-phe-sach-va-mo-hinh-kinh-doanh-ca-phe-sach/#:~:text=C%C3%A0%20ph%C3%AA%20s%E1%BA%A1ch%20%C4%91%C6%B0%E1%BB%A3c%20hi%E1%BB%83u,t%E1%BB%91t%E2%80%9D%20cho%20s%E1%BB%A9c%20kh%E1%BB%8Fe.."
                      target="_blank"
                    >
                      <Title level={5}>Cà phê sạch là gì?</Title>
                    </a>
                  </Row>
                  <Row>
                    <div>
                      Cà phê sạch được hiểu đơn giản là loại cà phê được tạo ra
                      từ 100% cà phê, không trộn lẫn bất kỳ loại hương liệu, hóa
                      chất hay tạp chất nào khác. Nói như vậy không có nghĩa là
                      cà phê sạch là loại cà phê ngon nhất, tuyệt vời nhất có
                      thể làm bạn hài lòng mà chỉ muốn nhấn mạnh rằng cà phê
                      sạch thật sự “tốt” cho sức khỏe...
                    </div>
                  </Row>
                </Col>
              </Row>
            </Card>
            <Card>
              <Row>
                <Col span={7}>
                  <a
                    href="https://www.facebook.com/dambrihomestay/posts/681082973268376"
                    target="_blank"
                  >
                    <Image src={checkin} preview={false} width="95%" />
                  </a>
                </Col>
                <Col span={17}>
                  <Row>
                    <a
                      href="https://www.facebook.com/dambrihomestay/posts/681082973268376"
                      target="_blank"
                    >
                      <Title level={5}>
                        Địa điểm check-in tại Bảo Lộc đẹp như tranh vẽ!
                      </Title>
                    </a>
                  </Row>
                  <Row>
                    <div>
                      Thiên nhiên khơi nguồn cảm hứng với một địa điểm check-in
                      nên thơ, trữ tình. <br />
                      📸 Phạm Tiến Đạt <br />
                      Cùng xem toàn cảnh cánh đồng cỏ trên nền nhạc piano du
                      dương:{" "}
                      <a href="https://youtu.be/QUMJC7LU3hY" target="_blank">
                        <div style={{ color: "blue", display: "inline-block" }}>
                          https://youtu.be/QUMJC7LU3hY
                        </div>
                      </a>
                      #Minhthanhpiano <br />
                      #baolocreviewtattantat
                    </div>
                  </Row>
                </Col>
              </Row>
            </Card>
          </div>
        </Col>

        <Col span={12}>
          <div className="video-wrapper">
            <Title level={3} style={{marginTop:"20px"}}>Video Clip</Title>
            <ReactPlayer
              className="videoplayer"
              url="https://www.youtube.com/watch?v=XJb5O2HMSlc"
              controls
            />
          </div>
        </Col>
      </Row>
    </>
  );
};

export default Knowledge;
