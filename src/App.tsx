import React, { useState } from 'react';
import { v4 as uuidv4 } from "uuid";
import { GiTechnoHeart } from 'react-icons/gi';
import { ContactModel } from './models/contactModel';
import './App.css';
import AddContactComponent from './components/AddContactComponent';
import ContactListComponent from './components/ContactListComponent';
import ContactFooterComponent from './shared/ContactFooterComponent';

const App: React.FC = () => {

  const [ contact, setContact ] = useState<string>("");
  const [ address, setAddress ] = useState<string>("");
  const [ email, setEmail ] = useState<string>("");
  const [ phone, setPhone ] = useState<string>("");
  const [ notes, setNotes ] = useState<string>("");
  const [ contacts, setContacts ] = useState<ContactModel[]>([
    { id: uuidv4(), name: "Victoria Disability Services LEAD", address: "123 victoria st", email: "vicky@utah.gov", phone: "8015552121", notes: "I am just random note1" },
    { id: uuidv4(), name: "Sydney Disability Specialist", address: "123 squid st", email: "syd@utah.gov", phone: "8015552121", notes: "I am just random note2" },
    { id: uuidv4(), name: "Jon STAQ", address: "123 Jon st", email: "jon@staqfi.com", phone: "8015552121", notes: "I am just random note3" },
    { id: uuidv4(), name: "Dee STAQ", address: "123 dee st", email: "dee@staqfi.com", phone: "8015552121", notes: "I am just random note4" },
    { id: uuidv4(), name: "Tyler the Dev", address: "123 fake st", email: "tyler@puretuned.com", phone: "8015552121", notes: "I am tyler the master developer!" },
  ]);

  /* Event Handler for submitting Changes - handle Add 
   * @param e - the event obj 
   * @dev - also could use this as the event type e: React.SyntheticEvent<EventTarget>
   */
  const addContact = (e: React.FormEvent) => { 
    e.preventDefault();
    if (contact && (email || phone)) {
      setContacts([...contacts, { id: uuidv4(), name: contact, address, email, phone, notes }]);
      /* Clear ALL form data */
      setContact(""); 
      setAddress(""); 
      setEmail(""); 
      setPhone(""); 
      setNotes(""); 
    } else {
      throw new Error("There was an error saving the contact!");
    } // Error hanlder / sort of 
  };

  return (
    <div className="App theme-bg">

      {/* Section-1 -- Header */}
      <div className="header-box content-space theme-font-lite">
        <h1><GiTechnoHeart /> My Address Book <GiTechnoHeart /></h1>
      </div>

      {/* Section-2 -- inputs/hmmmm */}
      <AddContactComponent 
        contact={contact} setContact={setContact} addContact={addContact} 
        address={address} setAddress={setAddress}  email={email} setEmail={setEmail} 
        phone={phone} setPhone={setPhone} notes={notes} setNotes={setNotes}
      />

      {/* Section-3 -- Two columns = contact data / add contact? */}
      <div className="flex-row theme-bg-lite">
        <div className="flex-col content-space">
          <div className="flex-module content-space add-contact">
          {/* We can put the contact form here and style it as overlay :) */}
            {/* <AddContactComponent 
              contact={contact} setContact={setContact} addContact={addContact} 
              address={address} setAddress={setAddress}  email={email} setEmail={setEmail} 
              phone={phone} setPhone={setPhone} notes={notes} setNotes={setNotes}
            /> */}
          </div>
        </div>
        <div className="flex-col content-space">
          <div className="flex-module">
            <ContactListComponent contacts={contacts} setContacts={setContacts} />
          </div>
        </div>
      </div>
      
      {/* Section-4 WIP dynamic! social link footer! */}
      <ContactFooterComponent />
    </div>
  );
}

export default App;
