// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
import registerServiceWorker from './registerServiceWorker';

import React, { Component} from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';

import LoginBar from './components/login';
import RoomsList from './components/rooms_list';

const API = 'https://private-afab7b-aldoras.apiary-mock.com';

class App extends Component {
    constructor(props){
        super(props);

        this.state={
            username: '',
            usernameTaken: false,
            usedUsernames:[],
        };
        this.loginButtonclicked = this.loginButtonclicked.bind(this);
    }
    componentDidMount(){
        fetch(`${API}/username`)
           .then(result=>result.json())
      .then(usedUsernames=>this.setState({usedUsernames}))
    }

    checkLogin(username){
        // console.log(this.state.usedUsernames);
        // console.log(this.state.usedUsernames.username);
        if(this.state.usedUsernames.username.indexOf(username) > -1) this.setState({usernameTaken: true})
        else  this.setState({usernameTaken:false});     
    }
    loginButtonclicked(username)
    {
        if(!this.state.usernameTaken) this.setState({username:username});
        console.log(this.state.username);
    }
	render () {
        const usernameValidation = _.debounce((username) => {this.checkLogin(username)},50);
        let rooms = ["a","bc","d","e","e","e","e"];
        if(this.state.username=='')
            return (
                    <div>
                    <h1 className="display-8">Choose your nickname to login</h1>
                    <LoginBar usernameTaken={this.state.usernameTaken}
                    onUsernameChange={(username,valid)=> usernameValidation(username)}
                    onButtonClick={username => this.loginButtonclicked(username)}/>
                    </div>
        );
        else return (
        <div>
            <label>Congratulations! You are now logged in as {this.state.username}</label>
            <RoomsList rooms={rooms} />
        </div>);	
    }
}

// ReactDOM.render(<App />, document.querySelector('.container'));

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
