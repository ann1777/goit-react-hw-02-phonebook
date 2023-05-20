import styled from 'styled-components';

export const SectionWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 16px;
  padding-bottom: 16px;

  max-width: 100%;
  width: 600px;

  mix-blend-mode: normal;
  filter: drop-shadow(0px 18px 80px rgba(265, 265, 265, 1));
  backdrop-filter: blur(8.5px);

  box-shadow: -1px -1px 15px #4b1414, 15px 15px 35px #fff;
`;

export const SectionTitle = styled.h1`
  margin-bottom: 16px;
  text-align: center;
  color: '#f7eff4';
  text-shadow: 0 1px 1px #fff, 1px 1px 1px #4b1414;
  font-size: 32px;
  `;