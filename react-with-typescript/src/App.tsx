import React, { useState } from 'react';
import './App.css';
import List from './components/list';
import AddToList from './components/AddToList';

export interface IState {
  people: {
      name: string
      age: number
      img: string
      note?: string
  }[]
}


function App() {

  const [people, setPeople] = useState<IState["people"]>([
    {
      name: "Suresh Raina",
      age: 35,
      img: "https://static.toiimg.com/thumb/msid-77847820,width-1200,height-900,resizemode-4/.jpg",
      note: "Mr.ipl",
    },
    {
      name: "Dhoni",
      age: 37,
      img: "https://www.crictracker.com/wp-content/uploads/2021/09/MS-Dhoni..jpg",
      note: "Captain cool",
    }
  ])

  return (
    <div className="App">
      <h1>IPL Match Players</h1>
      <List people={people}/>
      <AddToList setPeople={setPeople} people={people}/>
    </div>
  );
}

export default App
