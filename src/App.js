// redux
import { Provider } from 'react-redux';
import store from './redux/store';

// router
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// components
import Home from './components/views/Home';
import Question from './components/views/Question';
import Score from './components/views/Score';

const App = () => {
  return (
    <Provider store={store}>
      <div className="App min-h-screen bg-gradient-to-tr from-blue-500 to-blue-400 text-white">
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/question/:num" component={Question} />
            <Route exact path="/score" component={Score} />
          </Switch>
        </Router>
        {/* <Home /> */}
        {/* <Question /> */}
      </div>
    </Provider>
  );
}

export default App;
