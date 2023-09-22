import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import ToTopButton from "./components/to_top_button/ToTopButton";
import Sidebar from "./components/sidebar/SideBar";

function App() {
  return (
    <div className="bg-[#F9FAFB] min-h-screen flex flex-col justify-between relative overflow-x-hidden">
      <Sidebar></Sidebar>
      <Header></Header>
      <Outlet />
      <Footer></Footer>
      <ToTopButton></ToTopButton>
    </div>
  );
}

export default App;
