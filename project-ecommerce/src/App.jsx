import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/admin/Home";
import Layout from "./pages/admin/Layout";
import Wallet from "./pages/admin/Wallet";
import NotFound from "./pages/admin/NotFound";
import Profile from "./pages/admin/Profile";
import Setting from "./pages/admin/Setting";
import Help from "./pages/admin/Help";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/dashboad" element={<Layout />}>

          <Route index element={<Home />} />
          <Route path="/dashboad/wallet" element={<Wallet/>}/>
          <Route path="/dashboad/profile" element={<Profile/>} />
          <Route path="/dashboad/setting" element={<Setting/>}/>
          <Route path="/dashboad/help" element={<Help/>}/>

          <Route path="*" element={<NotFound/>}/>

        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
