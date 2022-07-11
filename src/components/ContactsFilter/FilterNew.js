import React from 'react';
import { Text } from './Filter.styled'
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { filterContacts } from '../../redux/contacts/actions';

const FilterNew = () => {
    const dispatch = useDispatch();
    const [filter, setFilter] = useState('');
    dispatch(filterContacts(filter));

    return (
        <div>
            <Text>Find contacts by name</Text>
            <input type="text" value={filter} onChange={evt => setFilter(evt.target.value)}
            />
        </div>
    );
};
export default FilterNew;