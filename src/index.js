import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import { Home } from "./pages/home/Home";
import { Contact } from "./pages/contact/Contact";
import { UserAccount } from "./pages/UserAccount/UserAccount";
import { Promotions } from "./pages/promotions/Promotions";
import { ProductDescription } from "./pages/productDescription/ProductDescription";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="contact" element={<Contact />} />
        <Route path="user-account" element={<UserAccount />} />
        <Route path="/promotions" element={<Promotions />} >
          <Route path=":productId" element={<ProductDescription/>}/>
        </Route>
        <Route
          path="/descriptions/:productId"
          element={<ProductDescription />}
        />
        <Route path="*" element={<div>Erreur404, cette page n'existe pas!</div>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
