import React from 'react';
import { Text } from './Filter.styled'

import { useSelector, useDispatch } from 'react-redux';


const FilterNew = ({value, onChange}) => (
    <div>
        <Text>Find contacts by name</Text>
        <input type="text" value={value} onChange={onChange}/>
    </div>
);

export default FilterNew;