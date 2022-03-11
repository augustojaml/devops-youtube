import styled from 'styled-components';

export const Container = styled.div`
  margin: 2rem 0;
  display: flex;
  justify-content: center;
  gap: 2rem;
  button {
    border: 2px solid #0e1111;
    background: transparent;
    height: 50px;
    width: 120px;
    padding: 0.7em;
    border-radius: 25px;
    font-weight: bold;
    &.active {
      background: #0e1111;
      color: #fff;
      border: 2px solid #565858;
    }
  }
`;
