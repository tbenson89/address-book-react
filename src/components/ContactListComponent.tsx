import React, { useState } from 'react';
import { TbUserSearch } from 'react-icons/tb';
import SeedData from '../models/rand_data.json'; // deprecated: dummy data to display on first page load()
import { ContactModel } from '../models/contactModel';
import './ContactList.css'; // TODO: update casing - contact-list.css
import ContactItemComponent from './ContactItemComponent';

interface Props {
    contacts: ContactModel[],
    setContacts: React.Dispatch<React.SetStateAction<ContactModel[]>>
}

const ContactListComponent: React.FC<Props> = ({ contacts, setContacts }) => {

    const [query, setQuery] = useState("");

    return (
        <div className="flex-cards content-space">
            <div className='search-container content-space'>
                <div className="search-box">
                    <input 
                        type='input' placeholder="Find a Contact by Name, Email or Phone Number" className='search-input' 
                        onChange={e => {
                            setQuery(e.target.value)
                        }}
                    />
                    <button className="search-btn" type="submit">
                        <TbUserSearch />
                    </button>
                </div>
                {/* TOOD: probably going to just have sort order logic. then maybe add sort ascending / descending later if time */}
                <div hidden>
                    {/* <div className="filter-btn">
                        <button>filter Contacts</button>
                    </div> */}
                </div>
            </div>
            {
                contacts.filter(contact => {
                    if (query === '') {
                        return contact;
                    } 
                    else if (contact.name.toLowerCase().includes(query.toLowerCase())) {
                        return contact;
                    }
                    else if (contact.email.toLowerCase().includes(query.toLowerCase())) {
                        return contact;
                    }
                    else if (contact.phone.toLowerCase().includes(query.toLowerCase())) {
                        return contact;
                    }
                }).map(contact => (
                    <ContactItemComponent 
                        contact={contact} key={contact.id}
                        contacts={contacts} setContacts={setContacts}
                    />
                ))
            }
                {/* Check if there are no contacts to display */}
                {
                    contacts.length <= 0 ? (
                        <div className="text-center">
                            <h1>There are no Contacts</h1>
                            <p>
                                Create a contact to build your address book!
                            </p>
                        </div>
                    ) : (
                        <h1 hidden></h1>
                    )
                }
        </div>
    )
}

export default ContactListComponent;
