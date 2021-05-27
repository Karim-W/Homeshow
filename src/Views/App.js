import logo from '../logo.svg';
import SignUp from './signup'
import Login from './login'
import {AuthProvider} from '../Contexts/AuthContext';
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom'
import Home from './home.js'
import Movie from './MoviePage'

function App() {
  return (
    <div>
      <Router>
        <AuthProvider>
          <Switch>
            {/* <Route exact path="/" component={Dashboard}/> */}
            <Route exact path="/" component={Home} />
            {/* <Route path ="/home" component={Home}></Route> */}
            <Route path="/signup" component={SignUp} />
            <Route path="/login" component={Login} />
            <Route path='/movie' component ={Movie}/>
          </Switch>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
