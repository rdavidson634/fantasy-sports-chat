import {Component} from 'react'
import LeagueList from '../src/components/LeagueList/LeagueList'
import MessageList from '../src/components/MessageList/MessageList'
import PriorityMessages from '../src/components/PriorityMessages/PriorityMessages'
import SendNewMessageForm from '../src/components/SendNewMessageForm/SendNewMessageForm'
import './App.css';

class App extends Component {
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
