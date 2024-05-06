import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import PageNotFound from "./pages/PageNotFound";
import Layout from "./pages/Layout";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>

          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<PageNotFound />} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;

// path -> Quy dinh duong danh de hien thi component
// element -> Quy dinh comenent can hien thi voi duong dan path
//index -> danh dau sau khi chay Layout thi hien thi page nao dau tien