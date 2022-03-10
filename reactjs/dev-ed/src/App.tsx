import { GlobalStyle } from './global/global';

function App() {
  return (
    <>
      <p>print env secret to HTML</p>
      <pre>{process.env.REACT_APP_SECRET_NAME}</pre>
      <h1>Augusto</h1>
      <GlobalStyle />
    </>
  );
}

export default App;
