
import React, {useState} from "react";
import './../styles/App.css';

const App = () => {
  let [tab, setTab]=useState("")
  return (
    <div>
        <ul onClick={(eve)=>setTab(eve.target.innerText)}>
          <li>Tab 1</li>
          <li>Tab 2</li>
           <li>Tab 3</li>
        </ul>
        <p>This is the content for {tab}</p>
    </div>
  )
}

export default App
