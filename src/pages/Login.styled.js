import styled from 'styled-components';

const LoginContainer = styled.div`
  align-content: center;
  align-items: center;
  display: flex;
  height: 100vh;
  background-color: red;
  flex-direction: column;
  justify-content: center;
  margin: auto;

  img {
    width: 20%;
  }

  form {
    display: flex;
    flex-direction: column;
    max-width: 400px;
    width: 100%;

    input {
      width: 100%;
      margin: 4px 0;
      border: none;
      padding: 4px 8px;
    }

    button {
      width: 100%;
      margin: 4px 0;
      padding: 8px;
    }
  }
`;

export default LoginContainer;
