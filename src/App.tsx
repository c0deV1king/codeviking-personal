import "./styles/stylesheet.css";
import Header from "./components/layout/Header";
import Projects from "./components/layout/Projects";
import Blogs from "./components/layout/Blogs";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <>
      <Header />
      <Projects />
      <Blogs />
      <Footer />
    </>
  );
}

export default App;
