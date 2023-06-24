import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./page/Home";
import { CommentPage } from "./Component/Single";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/comment" element={<CommentPage />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
