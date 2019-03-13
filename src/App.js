import React, { Component } from 'react';

import RoboList from './roboList';

import SearchBox from './searchBox';
import Scroll from './Scroll'

class App extends Component {

    constructor(){
        super();
        this.state = {
            robots : [],
            searchfield: ''
        }
    }
    componentDidMount () {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(respone => respone.json())
        .then(users => this.setState({ robots: users}))
    }
    searchChange = (e) => {
        this.setState({ searchfield : e.target.value})
    }

    render() {
        const { robots, searchfield } = this.state;

        const filteredRobots = robots.filter( robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase())
        });

    
        return !robots.length ? 
        <h1 className='tc'>LOADING...</h1> :
        
       (<div className='tc'>
            <h1>RoboFriends</h1>
            <SearchBox searchChange= {this.searchChange}/>
            <Scroll>
                <RoboList robots = {filteredRobots} />
            </Scroll>
        </div>);
    }
}

export default App;
