import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from "@mui/system";

import React from "react";
import Feed from "./components/Feed";
import VideoDetail from "./components/VideoDetail";
import ChanelDetail from "./components/ChanelDetail";
import SearchFeed from "./components/SearchFeed";
import Navbar from "./components/Navbar";

const App = () => (
  <BrowserRouter>
    <Box sx={{ backgroundColor: "#000" }}>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Feed />} />
        <Route path="/video/:id" element={<VideoDetail />} />
        <Route path="/chanel/:id" element={<ChanelDetail />} />
        <Route path="/search/:searchTerm" element={<SearchFeed />} />
      </Routes>
    </Box>
  </BrowserRouter>
);

export default App;
