import React from 'react';

const Cards = ({name, email, id}) => {
    return(
        <div className='dib bg-light-green pa3 ma3 bra3 grow tc bw2 shadow-5'>
            <img alt = "robot" src={`https://robohash.org/${id}`} width="200" height="200" />
            <div>
                <h2>{name}</h2>
                <p>{email}</p> 
            </div>        
        </div>
    );
}


export default Cards;