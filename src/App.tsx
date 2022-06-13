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
    { id: uuidv4(), name: "Victoria T", address: "123 victoria st", email: "vicky@utah.gov", phone: "8015552121", notes: "EZ - My Mommy is the Best" },
    { id: uuidv4(), name: "Sydney B", address: "123 squid st", email: "syd@utah.gov", phone: "8015552121", notes: "Even easier - My sister is probably cooler than yours!" },
    { id: uuidv4(), name: "Jonny S", address: "123 Sowards st", email: "jon@backwardgraphics.com", phone: "8015552121", notes: "Jonny is a great mentor of mine and an even better friend/brother!" },
    { id: uuidv4(), name: "Cameron M", address: "123 Murray st", email: "camo@paychecks.com", phone: "8015552121", notes: "Camo is a great friend, an amazing developer and a very kind hearted person." },
    // { id: uuidv4(), name: "Tyler B", address: "123 fake st", email: "tyler@puretuned.com", phone: "8015552121", notes: "I am tyler the master developer!" },
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
      {/* TODO: We need to move the search box fn out of AddContactComponent -> here! it's own SearchContactsComponent! */}
      {/* TODO: THen after we are able to get that out we now have the form moved to the left column.  */}
      {/* TODO: Afterwards we can add buttons by the search N sort top section for add a contact = Modal popup form!  */}
      {/* <AddContactComponent 
        contact={contact} setContact={setContact} addContact={addContact} 
        address={address} setAddress={setAddress}  email={email} setEmail={setEmail} 
        phone={phone} setPhone={setPhone} notes={notes} setNotes={setNotes}
      /> */}

      {/* Section-3 -- Two columns = contact data / add contact? */}
      <div className="flex-row theme-bg-lite">
        <div className="flex-col content-space">
          <div className="flex-module content-space add-contact">
            <h2 className='contact-form-title theme-font-lite'>
              Let's Add a Contact!  
            </h2>
            <AddContactComponent 
              contact={contact} setContact={setContact} addContact={addContact} 
              address={address} setAddress={setAddress}  email={email} setEmail={setEmail} 
              phone={phone} setPhone={setPhone} notes={notes} setNotes={setNotes}
            />
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
