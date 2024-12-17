import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion'; 
import code from './coding.png';

function Lang() {
  const [Lang, setLang] = useState(['JavaScript', 'Java ', 'Python','C#','PHP']);

  function AddCar() {
    let NewLang = document.getElementById('lvalue').value;
    document.getElementById('txt').innerHTML = '';
    if (NewLang !== '') {
      setLang([...Lang, NewLang]);
      document.getElementById('lvalue').value = '';      
    } else {
      alert('Please enter a Language name');
    }
  }

  function RemoveCar() {
    if (Lang.length !== 0) {
      setLang(Lang.slice(0, -1));
      let msg = Lang.slice(-1);
      document.getElementById('txt').innerHTML = msg + ' removed successfully';
    } else {
      document.getElementById('txt').innerHTML = 'No cars to remove';
    }
  }

  return (
    <>
    <h1 className="m-2 text-center text-white bg-primary p-2 rounded shadow">Technical Languages</h1>
    <div className="container d-flex justify-content-between">
      <div>
        <input
          type="text"
          className="input-group-text d-inline m-2"
          id="lvalue"
          placeholder="Enter a Language Name"
          ></input>
        <button className="btn btn-success m-2" onClick={AddCar}>
          Add Language
        </button>
        <button className="btn btn-danger" onClick={RemoveCar}>
          Remove Language
        </button>
        <p className="m-2" id="txt">&nbsp;</p>

        <AnimatePresence>
          {Lang.map((x, index) => (
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
        <img className="mr p-0" src={code} alt="Cars" width="300px" />
      </div>
    </div>
    </>
  );
}

export default Lang;
