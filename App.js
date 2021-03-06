import React, {Component} from "react";
import CardList from "./CardList";
import SearchBox from './SearchBox';
import './App.css';


class App extends Component{
    constructor(){
        super()
        this.state = {
            robots : [],
            searchField : ''
        }
    }

    componentDidMount () {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then (response=> {
            return response.json();
        })
        .then(users => {
            this.setState({robots : users})
        });
    }

    onSearchChange = (event) => {
        this.setState({searchField : event.target.value}); 
    }

    render (){
        const filteredRobots = this.state.robots.filter(user =>{
            return user.name.toLowerCase().includes(this.state.searchField.toLocaleLowerCase());
        });
        return(
            <div className="tc">
                <h1>Robo Friends</h1>
                <SearchBox searchChange = {this.onSearchChange}/>
                <CardList robots = {filteredRobots}/>
            </div>
        );
    }
        
}

export default App;