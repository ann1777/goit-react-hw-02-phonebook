import React from "react";
import { BsSearch } from 'react-icons/bs';
import { Input, FilterWrapper, LabelWrapper  } from './ContactsFilter.styled';
import PropTypes from 'prop-types';


export const ContactsFilter = ({ value, onInputChange }) => (
    <FilterWrapper>
        <LabelWrapper>
          <BsSearch size="16" /> Find contacts by name
        </LabelWrapper>
        <Input type="text" value={value} onInputChange={onInputChange} placeholder="Contacts search" />    
    </FilterWrapper>
);


ContactsFilter.propTypes = {
    onInputChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
}