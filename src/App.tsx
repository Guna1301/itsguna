import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Layout } from "./components/layout/Layout";

import Articles from "./pages/Articles";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import TimelinePage from "./pages/Timeline";

import { Analytics } from '@vercel/analytics/react';

function App() {
  return (
    <BrowserRouter>
      <Analytics />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/timeline" element={<TimelinePage />} />
          <Route path="/articles" element={<Articles />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;