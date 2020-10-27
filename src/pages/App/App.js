import {Component} from 'react'
import Talk from "talkjs";
import userService from '../../utils/userService'
import { Route, Switch } from 'react-router-dom';
import LeagueList from '../../components/LeagueList/LeagueList'
import MessageList from '../../components/MessageList/MessageList'
import PriorityMessages from '../../components/PriorityMessages/PriorityMessages'
import SendNewMessageForm from '../../components/SendNewMessageForm/SendNewMessageForm'
import './App.css';
import NavBar from '../../components/NavBar/NavBar';
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
