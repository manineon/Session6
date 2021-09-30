//import logo from './logo.svg';
//import './App.css';
import React, {Component} from 'react';

class App extends Component {
  state = {
    people : [
      {id : 1, firstName:"Peter", lasttName:"parker", contact:8968845670},
      {id : 2, firstName:"Kamal", lasttName:"Khan", contact:8968845671},
      {id : 3, firstName:"Amir", lasttName:"Khan", contact:8968845672},
      {id : 4, firstName:"Ajay", lasttName:"Kumar", contact:8968845673},
  ]
}
  render(){
    const { people } = this.state;
    const personJSX = [];
    people.forEach((person) =>{
      personJSX.push(
    <li key={person.id}>Person name is {`${person.firstName} ${person.lasttName} ${person.contact}`}</li>
      )
    });
return (
 <div>
   <h2>Q.1. Create a List Component that renders a list of items from an array. The list could be any list of your choice.
</h2>
   <ul>
     {personJSX}
   </ul>
 </div>
);
}
}
export default App;
