import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion'; 
import bike from './Bikes.png';

function Bikes() {
  const [Bikes, setBikes] = useState(
    ['Royal Enfield Himalayan', 'Bajaj Pulsar 180', 'Hero Splendor Plus','Honda Shine','KTM RC 200']
    );

  function AddCar() {
    let NewBike = document.getElementById('bvalue').value;
    document.getElementById('msg').innerHTML = '';
    if (NewBike !== '') {
        setBikes([...Bikes, NewBike]);
      document.getElementById('bvalue').value = '';
    } else {
      alert('Please enter a Bike name');
    }
  }

  function RemoveCar() {
    if (Bikes.length !==0) {
      setBikes(Bikes.slice(0, -1));
      let msg = Bikes.slice(-1);
      document.getElementById('msg').innerHTML = msg + ' removed successfully';
    } else {
      document.getElementById('msg').innerHTML = 'No cars to remove';
    }
  }

  return (
    <>
    <h1 className="m-2 text-center text-white bg-dark p-1 rounded shadow">Available Bikes</h1>
    <div className="container d-flex justify-content-between">
      <div>
        <input
          type="text"
          className="input-group-text d-inline m-2"
          id="bvalue"
          placeholder="Enter a Bike Name"
          ></input>
        <button className="btn btn-success m-2" onClick={AddCar}>
          Add Bike
        </button>
        <button className="btn btn-danger" onClick={RemoveCar}>
          Remove Bike
        </button>
        <p className="m-2" id="msg">&nbsp;</p>

        <AnimatePresence>
          {Bikes.map((x, index) => (
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
        <img className="m-5 p-5 photo" id='bike' src={bike} alt="Cars" width="550px" />
      </div>
    </div>
    </>
  );
}

export default Bikes;
