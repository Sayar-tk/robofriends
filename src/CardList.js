import React from "react";
import Cards from "./Cards";


const CardList = ({ robots }) => {

    return(  
        <div>
        {
            robots.map ( user => { 
                return (
                    <Cards 
                    key = {user.username} 
                    id = {user.id} 
                    name = {user.name} 
                    email = {user.email} />
                ); 
            })
        }
        </div>
    );
}

export default CardList;