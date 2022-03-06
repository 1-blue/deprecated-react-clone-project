import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// layout
import Layout from "@src/layouts/Layout";

// page-components
import Home from "@src/pages/Home";
import Series from "@src/pages/Series";
import Movies from "@src/pages/Movies";
import Search from "@src/pages/Search";
import NotFound from "@src/pages/NotFound";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="movie/:movieId" element={<Home />} />
            <Route path="tv/:tvId" element={<Home />} />
          </Route>
          <Route path="/series" element={<Series />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/search" element={<Search />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default AppRoutes;
