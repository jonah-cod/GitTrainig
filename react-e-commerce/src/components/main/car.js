import React from 'react'

function formater(price){
    
    return Intl.NumberFormat('en-US').format(price);
}
const Car = ({car}) => {
    return (
        <div className="car" on>
            <img src={car.image} alt="" />
            <h4>{car.name}</h4>
            <p>{car.model} <br/> {car.Class}</p>
            <h5>${formater(car.price)}</h5>
            <button className="but">Add to cart</button>
        </div>
    )
}

export default Car
