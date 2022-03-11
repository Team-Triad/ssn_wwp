import React, { useState } from 'react';
import './home.css'
import {db} from '../components/Firebase/fire'

const Home = () => {
  const [info , setInfo] = useState([]);
  
  window.addEventListener('click', () => {
      Fetchdata();
    });
  window.addEventListener('load', () => {
      Fetchdata();
    });

  const Fetchdata = ()=>{
      db.collection("Works").onSnapshot((querySnapShot) => {
        const localArr = [];
        querySnapShot.forEach((doc) => {
          localArr.push(doc.data());
        });
        setInfo(localArr);
      });
  }

  return (
    <div className='total-cards'>
      {
        info.map((data)=>(<Frame 
          name={data.Name} 
          amount={data.Amount} 
          district={data.District}
          members={data.MembersNeeded}
          contact={data.ContactNumber}
          addi={data.AdditionalInfo}
          />))
      }
    </div>
  );
};

const Frame=({name,amount,district,members,contact,addi})=>{
  return(
    <div className="card text-center single-card">
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className='card-text'>Budget:{amount}</p>
          <p className='card-text'>District:{district}</p>
          <p className='card-text'>MembersNeeded:{members}</p>
          <p className='card-text'>ExtraInfo:{addi}</p>
          <button type="button" className="btn btn-primary">Button</button>
        </div>
        <div className="card-footer">Contact no:{contact}</div>
      </div>
  )
}
export default Home;