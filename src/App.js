import Info from "./Info";
import About from "./About";
import Interests from "./Interests";
import Footer from "./Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Info />
        <About />
        <Interests />
        <Footer />
      </div>
    </div>
  );
}

export default App;
