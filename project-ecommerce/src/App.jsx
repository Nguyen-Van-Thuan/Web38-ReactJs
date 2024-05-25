import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/admin/Home";
import Layout from "./pages/admin/Layout";
import Wallet from "./pages/admin/Wallet";
import NotFound from "./pages/admin/NotFound";
import Profile from "./pages/admin/Profile";
import Setting from "./pages/admin/Setting";
import Help from "./pages/admin/Help";
import ClientHome from "./pages/client/ClientHome";
import ClientLayout from "./pages/client/ClientLayout";
import ClientDetailProduct from "./pages/client/ClientDetailProduct";
import Login from "./pages/auth/Login";
import ProtectedLogin from "./pages/auth/ProtectedLogin";
import AddProuduct from "./pages/admin/AddProuduct";
import EditProduct from "./pages/admin/EditProduct";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ClientLayout />}>
          <Route index element={<ClientHome />} />
          <Route path="/product/:id" element={<ClientDetailProduct />} />
          <Route path="*" element={<NotFound />} />
        </Route>

        <Route path="/login" element={<Login />} />

        <Route
          path="/dashboad"
          element={<ProtectedLogin element={<Layout />} />}
        >
          <Route index element={<Home />} />

          <Route path="/dashboad/product" element={<Wallet />} />
          <Route path="/dashboad/product/add-product" element={<AddProuduct />} />
          <Route path="/dashboad/product/edit/:id" element={<EditProduct />} />

          <Route path="/dashboad/profile" element={<Profile />} />
          <Route path="/dashboad/setting" element={<Setting />} />
          <Route path="/dashboad/help" element={<Help />} />

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;

// ProtectedLogin -> lop tuong thanh -> bao ve dashboad
// element={<Layout />} => props cua component ProtectedLogin, no dc san trong react
