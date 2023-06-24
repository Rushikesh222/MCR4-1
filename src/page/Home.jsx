import { Middle } from "../Component/Middle";
import { Rightbar } from "../Component/Rightbar";
import { Leftside } from "../Component/Leftside";
import "./home.css";
export const Home = () => {
  return (
    <div class="header">
      <nav class="left-nav">
        <Rightbar />
      </nav>
      <div class="middle-section">
        <Middle />
      </div>
      <nav class="right-nav">
        <Leftside />
      </nav>
    </div>
  );
};
