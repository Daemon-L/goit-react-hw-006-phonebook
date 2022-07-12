import { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { FormContainer, Text, Input, Button } from './Form.styled'

import { addContacts } from '../../redux/contacts/actions';
import { getContactsList } from '../../redux/contacts/selectors';
import { v4 } from 'uuid';

const ContactFormNew = () => {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const dispatch = useDispatch();
    const contacts = useSelector(getContactsList);

    const onAddNewContact = evt => {
        evt.preventDefault();
        if (contacts.find(
            contact => contact.name.toLowerCase() === name.toLowerCase()
        )
        ) { 
            alert(`${name} is already in contacts`);
            return;
        } else {
        dispatch(
            addContacts({
                id: v4(), name, number,
            })
        );}
        reset();
    };

    const reset = () => {
        setName("");
        setNumber("");
    };
    
    return (
        <FormContainer onSubmit={onAddNewContact}>
            <label>
                <Text>Name</Text>
                <Input
                    type="text"
                    name="name"
                    value={name}
                    onChange={evt => setName(evt.target.value)}
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                />  
            </label>
            <label>
                <Text>Number</Text>
                <Input
                    type="tel"
                    name="number"
                    value={number}
                    onChange={evt => setNumber(evt.target.value)}
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                />
            </label>
            <Button type="submit">Add contact</Button>
        </FormContainer>
    )
};
export default ContactFormNew;