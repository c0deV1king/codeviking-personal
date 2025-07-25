import "./styles/stylesheet.css";
import Header from "./components/layout/Header";
import Projects from "./components/layout/Projects";
import Blogs from "./components/layout/Blogs";
import Footer from "./components/layout/Footer";
import Skills from "./components/layout/Skills";

function App() {
  return (
    <>
      <Header />
      <Skills />
      <Projects />
      <Blogs />
      <Footer />
    </>
  );
}

export default App;
