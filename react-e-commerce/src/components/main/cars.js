import React from 'react'
import Car from './car'
import { cars } from './carData'

 

const Cars = () => {
    console.log(cars);
    //const [car, setCar] =  useState(car)
    return (
        <div className="cars">
            {cars.map(car=>(<Car key = {car.id} car={car}/>)) }
            
        </div>
    )
}

export default Cars
