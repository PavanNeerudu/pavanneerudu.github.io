import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar.jsx'
import Home from './components/home.jsx'
import About from './components/about.jsx';
import TimeLine from './components/timeline.jsx';
import Projects from './components/projects.jsx';
import Contact from './components/contact.jsx';
import Footer from './components/footer.jsx';

function App() {
  return (
    /*<div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hi Dudes
        </p>
      </header>
      <div>
        <p>His</p>
      </div>
    </div>*/
    <>
      <Navbar></Navbar>
      <Home></Home>
      <About></About>
      <TimeLine></TimeLine>
      <Projects></Projects>
      <Contact></Contact>
      <Footer></Footer>
    </>
  );
}

export default App;
