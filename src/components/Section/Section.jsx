import React from 'react';
import { SectionWrapper } from './Section.styled';
import { SectionTitle} from '../Title/Title.styled';
import PropTypes from 'prop-types';


export const Section = ({ title, children }) => {
    return (
        <SectionWrapper>
            <SectionTitle title={title} />
      {children}
        </SectionWrapper>
    );
};

Section.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.any.isRequired,
  };