import "./styles/stylesheet.css";
import BaseCard from "./components/layout/BaseCard";
import Projects from "./components/layout/Projects";
import Header from "./components/layout/Header";
import Blogs from "./components/layout/Blogs";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <>
      <Header />
      <BaseCard />
      <Projects />
      <Blogs />
      <Footer />
    </>
  );
}

export default App;
