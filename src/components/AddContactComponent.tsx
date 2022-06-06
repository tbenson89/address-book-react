import React, { useRef } from 'react';
import './add-contact.css';

interface Props {
    contact: string,
    setContact: React.Dispatch<React.SetStateAction<string>>,
    addContact: (e: React.FormEvent) => void;
    address: string,
    setAddress: React.Dispatch<React.SetStateAction<string>>,
    email: string,
    setEmail: React.Dispatch<React.SetStateAction<string>>,
    phone: string,
    setPhone: React.Dispatch<React.SetStateAction<string>>,
    notes: string,
    setNotes: React.Dispatch<React.SetStateAction<string>>,
}

const AddContactComponent: React.FC<Props> = ({ 
    contact, setContact, addContact, 
    address, setAddress, email, setEmail,
    phone, setPhone, notes, setNotes
}) => {

    const contactInputRef = useRef<HTMLInputElement>(null);
    const addressInputRef = useRef<HTMLInputElement>(null);
    const emailInputRef = useRef<HTMLInputElement>(null);
    const phoneInputRef = useRef<HTMLInputElement>(null);
    const notesInputRef = useRef<HTMLTextAreaElement>(null);
        
    return (
        <div className='input-container theme-bg-2 bottom-shadow-effect'>
            <form className='input-contacts'
                onSubmit={(e) => {
                    addContact(e);
                    contactInputRef.current?.blur();
                    addressInputRef.current?.blur();
                    emailInputRef.current?.blur();
                    phoneInputRef.current?.blur();
                    notesInputRef.current?.blur();
                }}>
                <input 
                    ref={contactInputRef}
                    type="input" 
                    className='input-box'
                    value={contact} 
                    onChange={
                        (e) => setContact(e.target.value)
                    }
                    placeholder='Enter Name Here' required/>
                <input
                    ref={addressInputRef} 
                    type="input" 
                    className='input-box'
                    value={address} 
                    onChange={
                        (e) => setAddress(e.target.value)
                    }
                    placeholder='Address Here' />
                <input 
                    ref={emailInputRef}
                    type="email" 
                    className='input-box'
                    value={email} 
                    onChange={
                        (e) => setEmail(e.target.value)
                    }
                    placeholder='Email Here' />
                <input 
                    ref={phoneInputRef}
                    type="input" 
                    className='input-box'
                    value={phone} 
                    onChange={
                        (e) => setPhone(e.target.value)
                    }
                    placeholder='Phone Number' />
                <textarea 
                    ref={notesInputRef}
                    className='input-box' 
                    placeholder='Notes and/or Comments'
                    value={notes} onChange={
                        (e) => setNotes(e.target.value)
                    }>
                </textarea>
                <button className='input-submit theme-bg theme-font-lite' type="submit">
                    Add Contact
                </button>
            </form>
        </div>
    )
}

export default AddContactComponent;
