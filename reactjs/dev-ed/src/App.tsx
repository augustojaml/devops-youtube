import { GlobalStyle } from './global/global';

function App() {
  const { REACT_APP_MOVIES_API } = process.env;

  return (
    <>
      <p>{`VARIBLE ${REACT_APP_MOVIES_API}`}</p>
      <h1>Augusto</h1>
      <GlobalStyle />
    </>
  );
}

export default App;
