import Main from "./pages/MainPage";
import "antd/dist/antd.css";
import DocumentMeta from "react-document-meta";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import System from "./pages/MainPage/components/System";
const meta = {
  title: "Cà phê xưa dân gian",
  description: "Trang web chính của thương hiệu Cà phê xưa dân gian",
  canonical: "cafexuadangian.com",
  meta: {
    charset: "utf-8",
    name: {
      keywords: "cafe,cafexuadangian,cafexua,dangian",
    },
  },
};
const MainPage = () => {
  return (
    <>
      <DocumentMeta {...meta} />
      <Main />
    </>
  );
};
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/system" element={<System />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
