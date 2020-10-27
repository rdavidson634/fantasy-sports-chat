import {Component} from 'react'
import Talk from "talkjs";
import LeagueList from '../src/components/LeagueList/LeagueList'
import MessageList from '../src/components/MessageList/MessageList'
import PriorityMessages from '../src/components/PriorityMessages/PriorityMessages'
import SendNewMessageForm from '../src/components/SendNewMessageForm/SendNewMessageForm'
import './App.css';

class App extends Component {
  
//   componentDidMount() {
//     const currentUser = this.props.currentUser;
//     Talk.ready.then(() => {
//         let me = new Talk.User({
//             id: currentUser.id,
//             name: currentUser.name,
//             email: currentUser.email,
//             photoUrl: currentUser.photo,
//             welcomeMessage: "Hey there!"
//         });
//     })
// }
  
  render() {
    return (
      <div className="app">
        <LeagueList />
        <MessageList />
        <SendNewMessageForm />
        <PriorityMessages />
      </div>
    );
  }
}

export default App;
