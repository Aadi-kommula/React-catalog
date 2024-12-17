import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion'; 
import car from './cars.png';

function Cars() {
  const [cars, setCars] = useState(['Audi A4', 'BMW 3 Series', 'Hyundai Sonata','Jaguar XJ','Swift lxi']);

  function AddCar() {
    let NewCar = document.getElementById('cvalue').value;
    document.getElementById('info').innerHTML = '';
    if (NewCar !== '') {
      setCars([...cars, NewCar]);
      document.getElementById('cvalue').value = '';
    } else {
      alert('Please enter a car name');
    }
  }

  function RemoveCar() {
    if (cars.length !== 0) {
      setCars(cars.slice(0, -1));
      let msg = cars.slice(-1);
      document.getElementById('info').innerHTML = msg + ' removed successfully';
    } else {
      document.getElementById('info').innerHTML = 'No cars to remove';
    }
  }

  return (
    <>
    <h1 className="m-2 text-center text-white bg-success p-1 rounded shadow">Available Cars</h1>
    <div className="container d-flex justify-content-between">
      <div>
        <input
          type="text"
          className="input-group-text d-inline m-2"
          id="cvalue"
          placeholder="Enter a Car Name"
          ></input>
        <button className="btn btn-success m-2" onClick={AddCar}>
          Add Car
        </button>
        <button className="btn btn-danger" onClick={RemoveCar}>
          Remove Car
        </button>
        <p className="m-2" id="info">&nbsp;</p>

        <AnimatePresence>
          {cars.map((x, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }} 
              exit={{ opacity: 0, x: -50 }} 
              transition={{ duration: 0.5 }} 
            >
              <p className="m-2">
                {index + 1}. {x}
              </p>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
      <div>
        <img className="photo" src={car} alt="Cars" width="500px" />
      </div>
    </div>
    </>
  );
}

export default Cars;
