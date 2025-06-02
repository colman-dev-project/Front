// components/SearchInput/SearchInput.styled.js
import styled from 'styled-components';

export const Input = styled.input`
  padding: 8px 12px;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 16px;
  width: 100%;
  max-width: 300px;

  &:focus {
    outline: none;
    border-color: #007bff;
  }
`;
