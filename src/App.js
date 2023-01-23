import Navbar from './components/navbar';
import Home from './components/content';
import Video from './components/split';
import './App.css';
import { BrowserRouter as Router } from "react-router-dom"

function App() {
  return (
    <>
      <Router>
          <Navbar />
          <Home />
          <Video />
      </Router>
    </>
  );
}

export default App;
