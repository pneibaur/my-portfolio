// IMPORT COMPONENTS
import './App.css';
import { Route, Switch } from "react-router-dom"
import Header from './components/Header';
import Footer from './components/Footer';
// IMPORT PAGES
import About from './pages/About';
import Home from './pages/Home';
import Projects from './pages/Projects';

function App() {
  const URL = "https://portfolio-express-react.herokuapp.com/"
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" >
          <Home />
        </Route>
        <Route path="/projects" >
          <Projects URL={URL} />
        </Route>
        <Route path="/About" >
          <About URL={URL} />
        </Route>
      </Switch>
    </div>
  ); 
}

export default App;
