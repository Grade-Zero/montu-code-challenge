import styled from '@emotion/styled';

const Button = styled.button`
  border-radius: 0.5rem;
  border: 1px solid transparent;
  padding: 0.6rem 1.2rem;
  font-size: 1rem;
  font-weight: 500;
  font-family: inherit;
  background-color: #efcafd;
  cursor: pointer;
  transition: border-color 0.25s;
  margin: 1rem 0.25rem;

  &:hover {
    border-color: #b964ff;
  }

  &:focus,
  &:focus-visible {
    outline: 4px auto -webkit-focus-ring-color;
  }
`;

export { Button };