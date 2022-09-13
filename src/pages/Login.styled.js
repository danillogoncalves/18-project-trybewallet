import styled from 'styled-components';
import colors from '../themes';

const LoginContainer = styled.div`
  align-content: center;
  align-items: center;
  background-color: ${colors.backgroundColorDefault};
  display: flex;
  height: 100vh;
  flex-direction: column;
  justify-content: center;
  margin: auto;

  .imageContainer {
    display: flex;
    justify-content: center;
    max-width: 400px;
    width: 100%;
    padding: 16px;

    img {
      width: 90%;
    }
  }

  form {
    display: flex;
    flex-direction: column;
    max-width: 400px;
    width: 100%;
    padding: 16px;

    input {
      width: 100%;
      margin: 4px 0;
      border: none;
      padding: 4px 8px;
      border-radius: 4px;
    }

    button {
      width: 100%;
      margin: 4px 0;
      padding: 8px;
      border: none;
      border-radius: 4px;
      font-size: 1em;
      font-weight: 700;
      background-color: ${colors.buttonDefault};
      color: ${colors.textButton};
    }
  }
`;

export default LoginContainer;
