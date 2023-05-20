import React from 'react';
import { BsSearch } from 'react-icons/bs';
import { Input, FilterWrapper, LabelWrapper } from './ContactsFilter.styled';
import PropTypes from 'prop-types';

export const ContactsFilter = ({ value, onChange }) => (
  <FilterWrapper>
    <LabelWrapper>
      <BsSearch size='16' /> Find contacts by name
    </LabelWrapper>
    <Input
      type='text'
      value={value}
      onChange={onChange}
      placeholder='Contacts search'
    />
  </FilterWrapper>
);

ContactsFilter.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
