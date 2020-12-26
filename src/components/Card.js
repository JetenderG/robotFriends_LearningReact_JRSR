import React from 'react'; //Need to import to understand we using jsx


const Card = ({name, email, id}) =>{
    return (
        <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
                <img src={`https://robohash.org/${id}?200x200`} alt={id}></img>
                <div className=''>
                    <h2>{name}</h2>
                    <p>{email}</p>
                </div>
        </div>

    );
}

export default Card;