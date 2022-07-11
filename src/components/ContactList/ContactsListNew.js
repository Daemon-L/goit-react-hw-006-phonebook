import { ContactItem, Button, Text } from './ContactList.styled'
import { useSelector, useDispatch } from 'react-redux';
import { getContactsList, getContactsFilter } from '../../redux/contacts/selectors';
import { removeContacts } from '../../redux/contacts/actions';

const ContactsListNew = () => {
    const dispatch = useDispatch();
    const contacts = useSelector(getContactsList);
    const filter = useSelector(getContactsFilter);
    const onItemRemove = id => {dispatch(removeContacts({ id }))};

    return (
        <ul>
            {contacts.map(({ id, name, number }) =>
                name.toLowerCase().indexOf(filter.toLowerCase()) !== -1 && (
                    <ContactItem key={id}>
                        <Text>{name}: {number}</Text>
                        <Button type="button" onClick={() => onItemRemove(id)}>
                            Delete
                        </Button>
                    </ContactItem>
                )
            )}
        </ul>
    );
};
export default ContactsListNew;