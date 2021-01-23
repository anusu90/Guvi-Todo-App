import React, { useState } from 'react'

import './App.css';
import LeftCol from "./left-col/left-col"
import MiddleCol from './middle-col/middle-col';
import RightCol from './right-col/right-col';

function App() {

  const [task, setTask] = useState({ title: "", discription: "" });
  const [list, setList] = useState([]);
  const [displayItem, setdisplayItem] = useState({});

  // const handleClick = () => { }

  return (
    <React.Fragment>

      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <LeftCol setTask={setTask} task={task} list={list} setList={setList}></LeftCol>
          </div>
          <div className="col-lg-4">
            <MiddleCol list={list} displayItem={displayItem} setdisplayItem={setdisplayItem}></MiddleCol>
          </div>
          <div className="col-lg-4">
            <RightCol displayItem={displayItem}></RightCol>

          </div>
        </div>
      </div>


    </React.Fragment>
  );
}

export default App;
