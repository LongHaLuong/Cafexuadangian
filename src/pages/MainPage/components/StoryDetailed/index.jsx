import { Layout, Image, Row, Col, Typography } from "antd";
import "./style.css";
import Contact from "../Contact";
import { Link } from "react-router-dom";
import avatar from "../../../../assets/avatar.png";
import Img2 from "../../../../assets/Carousel_2.jpg";
import Img1 from "../../../../assets/storyPic.jpg";

const { Title, Paragraph } = Typography;
const { Header, Content, Footer } = Layout;

const HomePage = () => {
  return (
    <>
      <Layout className="layout">
        <Header style={{ height: "80px" }}>
          <Row style={{ textAlign: "center", fontSize: 20 }} className="header">
            <Col span="4">
              <a className="story" onClick={() => window.scrollTo(0, 0)}>
                Câu chuyện Cà phê xưa
              </a>
            </Col>
            <Col span="3">
              <a className="traditional anchor" href="/#traditional">
                Cà phê xưa dân gian
              </a>
            </Col>
            <Col span="3">
              <a className="garden anchor" href="/#garden">
                Khu vườn cà phê
              </a>
            </Col>
            <Col span="4">
              <a href="/">
                <Image
                  width={75}
                  preview={false}
                  className="logo"
                  src={avatar}
                />
              </a>
            </Col>
            <Col span="3">
              <a className="knowledge anchor" href="/#knowledge">
                Kiến thức cà phê
              </a>
            </Col>
            <Col span="3">
              <Link to="/system">Hệ thống</Link>
            </Col>
            <Col span="3">
              <a
                className="contact"
                onClick={() => window.scrollTo(0, document.body.scrollHeight)}
              >
                Liên hệ
              </a>
            </Col>
          </Row>
        </Header>
        <Content>
          <Paragraph className="storyDetailed">
            <Title className="storyTitle">CÂU CHUYỆN CÀ PHÊ XƯA</Title>
            <Paragraph style={{textAlign:"center"}}>
              ______________________
            </Paragraph>
            <br />
            …Thơm, bay, ngất ngây <br /> Hương say của đại ngàn đất đỏ <br />
            Đậm, đầm, ma mị
            <br />
            Chất vị của ký ức một thời…
            <br /> <br />
            ______________________________________________________________________
            <br /> <br /> Đến tận bây giờ, tôi vẫn nhớ về hương vị của những
            giọt cà phê ngày xưa, trong thập niên 70 – 80, khi con người ta
            thưởng thức cà phê một cách trọn vẹn, chứ không phải chỉ đến một
            điểm quen thuộc để trao đổi câu chuyện hàng ngày mà thức uống gọi
            kèm chỉ mang vị nhàn nhạt màu cánh gián… <br /> <br />
            Cái ký ức về cà phê ngày ấy nó đơn giản lắm, chỉ là một phin cà phê
            nho nhỏ với những giọt màu đen sóng sánh nhẹ nhàng, nhưng thơm lắm.
            Rồi khi nhấp từng chút một thì cái hương vị đặc biệt cứ đọng mãi
            trên đầu lưỡi, chầm chậm tan ra, rồi lưu lại thành một cảm giác ngây
            ngất đến tận cùng… <br /> <br />
            Bẵng đi vài thập kỷ, cái hương vị ấy chẳng biết đã đi về đâu, khiến
            con người ta cứ nhung nhớ khôn dường… <br /> <br />
            Một ngày tình cờ, trong một chuyến lãng du đi tìm kiếm chữ “An” bình
            thản, lang thang đến một nông trại cà phê nhỏ tại Bảo Lộc, tôi lại
            bắt gặp hương vị ngày nào, của những hoài niệm về giọt cà phê xưa
            trong dân gian ngày ấy… <br /> <br />
            Có một niềm vui nho nhỏ khi hội ngộ cùng ký ức cà phê nguyên chất
            thuở nào, tôi lại tìm hiểu về công thức và quy trình sản xuất từ các
            cô chú hiền hòa, dễ mến nơi đây. Chứng kiến những giọt mồ hôi của
            người nông dân vất vả như thế nào từ các công đoạn gieo trồng, bón
            phân, cắt cỏ, tỉa cành, tưới tiêu, chiết giống, ngắt lá sâu… cho đến
            khi thu hoạch là một quá trình đòi hỏi sự lao động nghiêm túc, miệt
            mài… Hơn thế nữa, khi đã vào mùa, việc chọn những trái đã chín hẳn
            để hái lượm, cũng như sàng lọc những hạt cà phê đủ chất lượng để
            chuẩn bị cho các công đoạn phơi khô, tách vỏ, rang mộc lại càng phải
            kỹ càng. Đặc biệt, việc canh khói, lửa khi bắt tay vào rang lại càng
            đòi hỏi kinh nghiệm và kỹ thuật của những cô chú lành nghề… <br />
            <Image
              width="80%"
              height="70%"
              preview={false}
              src={Img1}
              style={{ margin: "3% 0 2% 10%" }}
            ></Image>
            <br />
            Và thế là…
            <br /> <br />
            …CÀ PHÊ XƯA DÂN GIAN ra đời… <br /> <br />
            Như một sản phẩm đồng hành cùng các cô chú, bà con nông dân Bảo Lộc,
            vì những giá trị gìn giữ truyền thống nguyên chất đúng nghĩa của cà
            phê, cũng như lưu giữ hương vị ký ức cà phê xưa đã làm xao xuyến
            những thế hệ trí thức ngày nào… <br /> <br />
            Với Cà Phê Xưa Dân Gian, chúng tôi luôn đảm bảo về quy trình trồng
            trọt và sản xuất cà phê sạch, không pha trộn tạp chất, nhằm gìn giữ
            giá trị “NGUYÊN CHẤT ĐÚNG NGHĨA”, đảm bảo an toàn sức khỏe và lưu
            giữ những hoài niệm ký ức cà phê tự thuở nào… <br />
            <Image
              width="80%"
              preview={false}
              src={Img2}
              style={{ margin: "3% 0 0 10%" }}
            ></Image>
            <br /> <br />
            …Nếu bạn cũng như tôi, thích thưởng thức cà phê nguyên chất đúng
            nghĩa với hương vị ký ức một thời… hay chỉ là tìm một món quà ý
            nghĩa để gửi tặng ông bà cha mẹ mang một hoài niệm xa xưa, thì Cà
            Phê Xưa Dân Gian xin phép được đồng hành cùng gia đình bạn… <br />
            ---------------------- <br />
            CÀ PHÊ XƯA DÂN GIAN Đồng hành cùng hành trình “THƯỞNG THỨC CÀ PHÊ
            VIỆT NGUYÊN CHẤT”
          </Paragraph>
        </Content>
        <Footer>
          <Contact id="contact" />
        </Footer>
      </Layout>
    </>
  );
};

export default HomePage;
