import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from "react";
import axios from 'axios';
import Robot from './components/Robot';


const API_ROBOTS = 'https://jsonplaceholder.typicode.com/users'

function App() {
  const [robots, setRobots] = useState([])

  useEffect(() => {
    async function getNameRobots() {
      try {
        const response = await axios.get(API_ROBOTS);
        setRobots(response.data)
        console.log(response);
      } catch (error) {
        console.error(error);
      }
    }
    getNameRobots()
  }, [])
  console.log("robots", robots)


  return (
    <div>
      <h1>Robots friends</h1>
      {robots.length > 0 ? robots.map(robot => (
        <Robot key={robot.id} robot={robot} />
      )) : <p>en chargement...</p>}
    </div>
  );
}

export default App;
