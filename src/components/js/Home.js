import First from "./First";
import NameDemo from "./NameDemo";
import Product from "./Product";
import Employees from "./Employees";
import "../css/Home.css";
import Footer from "./Footer";

function Home() {
  return (
    <div className="home">
      <First />
      <Employees />
      <NameDemo />
      <Product />

      <Footer />
    </div>
  );
}
export default Home;
