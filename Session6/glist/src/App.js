import './App.css';
import React from 'react';
import './Components/CSS/style.css'

function App() {
  const lists = [
    {item: "Dal", type: "veg"},
    {item: "Fish", type: "non-veg"},
    {item: "Meat", type: "non-veg"},
    {item: "Rice", type: "veg"},
    {item: "Mango", type: "veg"},
    {item: "Chicken", type: "non-veg"},
  ]
 
  return (
    <div className="item">
      <h1>Grocery List</h1>
      <table border="1">
      <tr>
        <td className='a'>item</td>
        <td className='a'>type</td>
      </tr>
     {
       lists.map((data)=>
        <tr>
          <td>{data.item}</td>
          <td>{data.type}</td>
        </tr>
       )
     }
     </table>
    </div>
  );
}

export default App;
