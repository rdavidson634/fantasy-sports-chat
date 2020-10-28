import react, {Component} from 'react'
import Talk from "talkjs";
import * as roomAPI from '../../services/room-api'
import userService from '../../utils/userService'
import { Route, Switch } from 'react-router-dom';
import './App.css';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage'
import ChatPage from '../ChatPage/ChatPage';
import CreateRoomPage from '../CreateRoomPage/CreateRoomPage'

class App extends Component {
    state = {
      user: userService.getUser(),
      rooms: []
    };
  

  async componentDidMount() {
    const rooms = await roomAPI.getAll();
    this.setState({ rooms: rooms })
  }

  handleCreateRoom = async newRoomData => {
    newRoomData.user = this.state.user._id
    const newRoom = await roomAPI.create(newRoomData);
    this.setState(state => ({
      rooms: [...state.rooms, newRoom]
    }),
    () => this.props.history.push('/'));
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
              rooms={this.state.rooms}
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
          <Route exact path='/create-room' render={({ history }) => 
            <CreateRoomPage
              handleCreateRoom={this.handleCreateRoom}
              history={history}
            />
          }/>
        </Switch>
      </div>
    );
  }
}

export default App;
