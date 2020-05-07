import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Login from './components/Login';
import HomeView from './components/HomeView';

class App extends React.Component {
  state = {
    view: 'home'
  }

  changeView = (view) => {
    this.setState({ view })
  }


  render() {
    return (
      <div className="App">
       <Navbar changeView={this.changeView} view={this.state.view}/>
       {this.state.view === 'login' && <Login changeView={this.changeView}/>}
       {this.state.view === 'home' && <HomeView />}
      </div>
    );
  }
}

export default App;
