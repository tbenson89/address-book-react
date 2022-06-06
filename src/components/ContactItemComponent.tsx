import React, { useEffect, useRef, useState } from 'react';
import { ContactModel } from '../models/contactModel';
import './contact-item.css';
import { FiEdit3 } from 'react-icons/fi';
import { RiDeleteBack2Fill } from 'react-icons/ri';


interface Props {
    contact: ContactModel;
    contacts: ContactModel[];
    setContacts: React.Dispatch<React.SetStateAction<ContactModel[]>>;
}

const ContactItemComponent: React.FC<Props> = ({ contact, contacts, setContacts }) => {

    /* Update the STATE - to detemine if the edit MODE is on/off */
    const [ isEditMode, setIsEditMode ] = useState<boolean>(false);
    const [ editContactName, setEditContactName ] = useState<string>(contact.name);
    const [ editContactAddress, setEditContactAddress ] = useState<string>(contact.address);
    const [ editContactEmail, setEditContactEmail ] = useState<string>(contact.email);
    const [ editContactPhone, setEditContactPhone ] = useState<string>(contact.phone);
    const [ editContactNotes, setEditContactNotes ] = useState<string>(contact.notes);

    /* Handler FN's SET UPDATE DELETE */
    const editContact = (e: React.FormEvent, id: number | string) => {
        e.preventDefault();
        setContacts(contacts.map((contact) => (
            contact.id === id ? { 
                ...contact, name: editContactName, address: editContactAddress, 
                phone: editContactPhone, email: editContactEmail, notes: editContactNotes
            } : contact
        )));
        setIsEditMode(false); // REVERT edit mode back to false to update UI
    }

    const deleteContact = (id: string | number) => {
        if (window.confirm(`Are you sure you want to delete ${contact.name}'s contact info?`)) {
            setContacts(contacts.filter(contact => id !== contact.id));
        }
    }

    return (
        <form className="contact-card content-space" key={contact.id} onSubmit={(e) => editContact(e, contact.id)}>
            <div className="card-container">
                <span className="contact-item">
                    <strong>Name: </strong>
                    {
                        isEditMode ? (
                            <input 
                                type="text" value={editContactName}
                                className="contact-edit-txt" autoFocus
                                onChange={(e) => setEditContactName(e.target.value)}
                            />
                        ) : (
                            <span className="contact-name">{contact.name}</span>
                        )
                    }
                </span>
                <br />
                <span className="contact-item">
                    <strong>Phone: </strong>
                    {
                        isEditMode ? (
                            <input 
                                type="text" value={editContactPhone}
                                className="contact-edit-txt"
                                onChange={(e) => setEditContactPhone(e.target.value)}
                            />
                        ) : (
                            <span className="contact-phone">{contact.phone || "N/A"}</span>
                        )
                    }
                </span>
                <br />
                <span className="contact-item">
                    <strong>Email: </strong>
                    {
                        isEditMode ? (
                            <input 
                                type="email" value={editContactEmail}
                                className="contact-edit-txt"
                                onChange={(e) => setEditContactEmail(e.target.value)}
                            />
                        ) : (
                            <span className="contact-email">{contact.email || "N/A"}</span>
                        )
                    }
                </span>
                <p>
                    <span className="contact-item">
                        <strong>Address: </strong>
                        {
                            isEditMode ? (
                                <input 
                                    type="text" value={editContactAddress}
                                    className="contact-edit-txt" 
                                    onChange={(e) => setEditContactAddress(e.target.value)}
                                />
                            ) : (
                                <span className="contact-address">{contact.address || "N/A"}</span>
                            )
                        }
                    </span>
                </p>
                <p className="contact-item">
                    <strong>Notes: </strong>
                    {
                        isEditMode ? (
                            <input 
                                type="text" value={editContactNotes}
                                className="contact-edit-txt" 
                                onChange={(e) => setEditContactNotes(e.target.value)}
                            />
                        ) : (
                            <span className="contact-notes">{contact.notes || "No Notes Saved"}</span>
                        )
                    }
                </p>
                <div className="card-btn-box">
                    <button type="button" className="theme-bg theme-font-lite theme-edit-btn"
                            onClick={() => {
                                if (!isEditMode) {
                                    setIsEditMode(!isEditMode);
                                }
                            }}>
                        <span className="hide-desktop hide-tablet show-mbl"><FiEdit3 /></span>
                        <span className="show-desktop show-tablet hide-mbl">Edit</span>
                    </button>
                    <button type="button" className="theme-bg theme-font-lite theme-dlt-btn" 
                            onClick={() => deleteContact(contact.id)}>
                        <span className="hide-desktop hide-tablet show-mbl"><RiDeleteBack2Fill /></span>
                        <span className="show-desktop show-tablet hide-mbl">Delete</span>
                    </button>
                    { /* button is for submitting during EDIT MODE! */ }
                    <button type="submit" hidden></button>
                </div>
            </div>
        </form>
    )
}

export default ContactItemComponent;

