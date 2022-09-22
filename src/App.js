import "./index.css"
import { BrowserRouter as Router , Route } from 'react-router-dom'
import Navbar from "./component/layout/Navbar";
import Footer from "./component/layout/Footer";


function App() {
  return (
    <Router>
      <div className="flex flex-col justify-between h-screen">
        <Navbar/>
        <main>
          <Footer/> 
        </main>
      </div>
    </Router>
  );
}

export default App;
