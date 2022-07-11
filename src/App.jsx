import React from "react";

import { Container } from './App.styled';
import ContactFormNew from './components/ContactForm/FormNew';
import ContactsListNew from './components/ContactList/ContactsListNew';
import FilterNew from './components/ContactsFilter/FilterNew';

export default function App() {
    return (
        <Container>
            <h1>Phonebook</h1>
               <ContactFormNew />
            <h2>Contacts</h2>
                <FilterNew/>
                <ContactsListNew/>
        </Container>
    );
}

// *** удалить **********************************
// import ContactForm from './components/ContactForm/ContactForm';
// import ContactList from './components/ContactList/ConyactList';
// import Filter from './components/ContactsFilter/Filter';
// import { useState } from "react";
// import { nanoid } from 'nanoid';
// ********************** **********************************