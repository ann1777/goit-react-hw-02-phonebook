import React from 'react';
import { PageTitle } from './Header.styled';
import PropTypes from 'prop-types';

export const Header = ({ title }) => {
    return (
        <PageTitle>{title}</PageTitle>
    );
};

Header.propTypes = {
    title: PropTypes.string.isRequired,
};