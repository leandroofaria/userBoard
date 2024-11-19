import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;
  background: #f5f5f5;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  h1 {
    margin-bottom: 20px;
    text-align: center;
    color: #333;
  }

  input {
    margin-bottom: 15px;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
    font-size: 16px;
  }

  button {
    padding: 10px;
    background-color: #4caf50;
    color: white;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
    transition: background 0.3s;

    &:hover {
      background-color: #45a049;
    }
  }
`;

export const UserCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fff;
  border: 1px solid #ddd;
  padding: 15px;
  margin-top: 10px;
  border-radius: 8px;
  width: 300px;

  div {
    display: flex;
    flex-direction: column;

    p {
      margin: 5px 0;
      color: #555;
    }
  }

  button {
    background: transparent;
    border: none;
    color: #e74c3c;
    cursor: pointer;

    &:hover {
      color: #c0392b;
    }
  }
`;
