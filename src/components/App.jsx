import React from "react";
import Card from "./Card";
import Contacts from "../contacts";

// imagine this function gets given one contact from contacts
function CreateCard(contact){
  return (
  <Card 
    key={contact.id}
    id={contact.id}
    name={contact.name} 
    img={contact.imgURL}
    tel={contact.phone}
    email={contact.email}
  />);
}


function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      {Contacts.map(CreateCard)}
      {/* <Card 
        name={contacts[0].name}
        imgURL={contacts[0].imgURL} 
        phone={contacts[0].phone} 
        email={contacts[0].email}/>
      <Card 
        name={contacts[1].name}
        imgURL={contacts[1].imgURL} 
        phone={contacts[1].phone} 
        email={contacts[1].email}/>
      <Card 
        name={contacts[2].name}
        imgURL={contacts[2].imgURL} 
        phone={contacts[2].phone} 
        email={contacts[2].email}/> */}
    </div> 
  );
}

export default App;
