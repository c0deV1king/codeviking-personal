import "./styles/stylesheet.css";
import ConstructionMessage from "./components/layout/ConstructionMessage";
import BaseCard from "./components/layout/BaseCard";
import Projects from "./components/layout/Projects";

function App() {
  return (
    <>
      <ConstructionMessage />
      <BaseCard />
      <Projects />
    </>
  );
}

export default App;
