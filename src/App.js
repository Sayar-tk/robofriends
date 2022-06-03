import React, {useEffect, useState} from "react";
import CardList from "./CardList";
import SearchBox from './SearchBox';
import './App.css';
import Scroll from "./Scroll";


function App () {
    const [robots, setRobots] = useState([]);
    const [searchField, setsearchField] = useState('');

    useEffect (() => {
        myFunction();
    },[])

    const myFunction = async() => {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const users = await response.json();
        setRobots(users);
    }


    const onSearchChange = (event) => {
        setsearchField(event.target.value); 
    }

        const filteredRobots = robots.filter(user =>{
            return user.name.toLowerCase().includes(searchField.toLocaleLowerCase());
        });
        return(
            <div className="tc">
                <h1>Robo Friends</h1>
                <SearchBox searchChange = {onSearchChange}/>
                <Scroll>
                    <CardList robots = {filteredRobots}/>
                </Scroll>
            </div>
        );       
}

export default App;