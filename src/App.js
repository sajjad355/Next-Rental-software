import './App.css';
import Product from './View/Product'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  BrowserRouter,
  Redirect,
} from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <Router>
          <Switch>
            <Route path="/" exact component={Product} />
            <Redirect to="/" />
          </Switch>
        </Router>
      </BrowserRouter>
    </>
  );
}

export default App;
