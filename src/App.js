import "./index.css"
import { BrowserRouter as Router , Route, Routes } from 'react-router-dom'
import Navbar from "./component/layout/Navbar";
import Footer from "./component/layout/Footer";
import Alert from "./component/layout/Alert";
import Home from "./pages/Home";
import About from "./pages/About";
import User from "./pages/User";
import NotFound from "./pages/NotFound";
import { GithubProvider } from "./context/github/GithubContext";
import {AlertProvider} from "./context/alert/AlertContext"

function App() {
  return (
    <GithubProvider>
      <AlertProvider>
    <Router>
      <div className="flex flex-col justify-between h-screen">
        <Navbar/>
        <main className="container mx-auto px-3 pb-12">
          <Alert/>
          <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/user/:login" element={<User/>}/>
            <Route path="/notFound" element={<NotFound/>}/>
            <Route path="/*" element={<NotFound/>}/>
            </Routes> 
        
        </main>
          <Footer/> 
      </div>
    </Router>
      </AlertProvider>
    </GithubProvider>
  );
}

export default App;
