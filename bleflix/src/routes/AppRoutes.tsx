import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// layout
import Layout from "@src/layouts/Layout";

// page-components
import Home from "@src/pages/Home";
import Tvs from "@src/pages/Tvs";
import Movies from "@src/pages/Movies";
import Search from "@src/pages/Search";
import NotFound from "@src/pages/NotFound";
import NotSearch from "@src/pages/NotSearch";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="movie/:movieId" />
            <Route path="tv/:tvId" />
          </Route>
          <Route path="/tvs" element={<Tvs />}>
            <Route path=":tvId" />
          </Route>
          <Route path="/movies" element={<Movies />}>
            <Route path=":movieId" />
          </Route>
          <Route path="/search" element={<NotSearch />}>
            <Route path=":query" element={<Search />}>
              <Route path=":itemId" />
            </Route>
          </Route>
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default AppRoutes;
