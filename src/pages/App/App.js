import react, {Component} from 'react'
import Talk from "talkjs";
import * as roomAPI from '../../services/room-api'
import userService from '../../utils/userService'
import { Route, Switch } from 'react-router-dom';
import './App.css';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage'
import ChatPage from '../ChatPage/ChatPage';

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: userService.getUser()
    };
  }

  async componentDidMount() {
    const rooms = await roomAPI.getAll();
    this.setState({ rooms: rooms })
  }
  
  handleLogout = () => {
    userService.logout();
    this.setState({ user: null });
  }

  handleSignupOrLogin = () => {
    this.setState({ user: userService.getUser() });
  }

  render() {
    return (
      <div className="app">
        <Switch>
          <Route exact path='/' render={() =>
            <ChatPage 
              user={this.state.user}
              handleLogout={this.handleLogout}
            />
          }/>
          <Route exact path='/signup' render={({ history }) => 
            <SignupPage
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
            />
          }/>
          <Route exact path='/login' render={({ history }) => 
            <LoginPage
              handleSignupOrLogin={this.handleSignupOrLogin}
              history={history}
            />
          }/>
        </Switch>
      </div>
    );
  }
}

export default App;
