import styled from 'styled-components';

export const Markdown = styled.article`
  font-size: 18px;
  line-height: 2;
  max-width: 900px;
  margin: auto;
  padding-bottom: 32px;

  *:not(:last-child) {
    margin-bottom: 15px;
  }

  ul {
    list-style: circle;
    padding-left: 20px;
  }
`;
