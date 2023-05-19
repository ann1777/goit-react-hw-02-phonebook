import React from 'react';
import { SectionWrapper } from './Section.styled';
import { PageTitle } from '../Header/Header.styled';
import PropTypes from 'prop-types';


export const Section = ({ title, children }) => {
    return (
        <SectionWrapper>
            <PageTitle title={title} />
      {children}
        </SectionWrapper>
    );
};

Section.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.any.isRequired,
  };