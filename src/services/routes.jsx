import { BrowserRouter, Routes, Route } from "react-router-dom";
import Details from "../Details";
import Home from "../Home";
import ListProvider from "./getPhones";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <ListProvider>
        <Routes>
          <Route path="*" element={<Home />} />
          <Route path="/details/*" element={<Details />} />
        </Routes>
      </ListProvider>
    </BrowserRouter>
  );
}
