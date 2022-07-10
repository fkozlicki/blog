import styled from 'styled-components';

export const Section = styled.section`
  :not(:last-child) {
    margin-bottom: 25px;
  }
`;

export const Heading = styled.h2`
  text-transform: uppercase;
  font-size: 20px;
  color: #152e4d;
  margin-bottom: 20px;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 5%;
`;
