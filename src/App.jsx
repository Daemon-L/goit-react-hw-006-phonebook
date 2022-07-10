import React from "react";

import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ConyactList';
import Filter from './components/ContactsFilter/Filter';
import { Container } from './App.styled';

// *** удалить **********************************
import { useState } from "react";
import { nanoid } from 'nanoid';
// ********************** **********************************

const startingContacts = [];

export default function App() {
    const [contacts, setContacts] = useState(() => {
        return startingContacts
    });
    
    const [filter, setFilter] = useState("");

    const formSubmitHandler = ({ name, number }) => {
        const normalizedContact = name.toLowerCase();
        const isExist = contacts.find(contact => contact.name.toLowerCase() === normalizedContact)
        if (isExist) {
            alert(`${name} is already in contacts`);
        } else {
            const contact = { id: nanoid(), name, number};
            setContacts(state => [contact, ...state]);
        }
    };

    const deleteContact = (contactId) => {
        setContacts((contacts) =>
            contacts.filter((contact) => contact.id !== contactId)
        );
    };

    const changeFilter = (evt) => {
        setFilter(evt.currentTarget.value);
    };

    const getVisibleContacts = () => {
        const normalizedFilter = filter.toLowerCase();
        return contacts.filter(contact =>
            contact.name.toLowerCase().includes(normalizedFilter),
        );
    };
    
    return (
        <Container>
            <h1>Phonebook</h1>
            <ContactForm onSubmit={formSubmitHandler}/>
            <h2>Contacts</h2>
            <Filter value={filter} onChange={changeFilter}/>
            <ContactList
                contacts={getVisibleContacts()}
                onDeleteContact={deleteContact}
            />
        </Container>
    );
}