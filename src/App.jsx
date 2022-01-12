import Main from "./pages/MainPage";
import "antd/dist/antd.css";
import DocumentMeta from "react-document-meta";

const meta = {
  title: "Cà phê xưa dân gian",
  description: "Trang web chính của thương hiệu Cà phê xưa dân gian",
  canonical: "cafexuadangian.com",
  meta: {
    charset: "utf-8",
    name: {
      keywords: "cafe,cafexuadangian,cafexua,dangian"
    }
  }
};

function App() {
  return (
    <div>
      <DocumentMeta {...meta} />
      <Main />
    </div>
  );
}

export default App;
