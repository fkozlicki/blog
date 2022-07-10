import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  align-items: baseline;
  gap: 15px;
  margin-bottom: 5px;
`;

export const Preview = styled.article`
  &:hover ${Header} {
    color: blue;
  }
`;

export const Badge = styled.span`
  &:not(:first-child) {
    margin-left: 8px;
  }
  background: #4da;
  padding: 1px 4px;
  font-size: 13px;
  color: black;
`;
