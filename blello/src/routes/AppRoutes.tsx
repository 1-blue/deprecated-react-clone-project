import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// layout
import Layout from "@src/layouts/Layout";

// page-components
import Home from "@src/pages/Home";
import NotFound from "@src/pages/NotFound";

const AppRoutes = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default AppRoutes;
