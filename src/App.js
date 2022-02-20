import './App.css';
import Home from './pages/Home';
import { BrowserRouter as Router, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
      <Route exact path='/' component={Home} />
    </Router>
    // <Home/>

  );
}

export default App;
