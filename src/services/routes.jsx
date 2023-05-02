import { BrowserRouter, Routes, Route } from "react-router-dom";
import Details from "../Details";
import Home from "../Home";

export default function AppRoutes() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="*" element={<Home />} />
          <Route path="/details/*" element={<Details />} />
        </Routes>
    </BrowserRouter>
  );
}
