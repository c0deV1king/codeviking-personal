import "./styles/stylesheet.css";
import Projects from "./components/layout/Projects";
import Header from "./components/layout/Header";
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
