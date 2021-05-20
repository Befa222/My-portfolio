import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './routes/Home';
import Contact from './routes/Contact';
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/Contact' component={Contact} />
      </Switch>
    </Router>
  );
}

export default App;
