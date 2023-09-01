import React from 'react';
import { Navbar } from './components';
import GlobalStyles, { Container } from './globalStyles';

function App() {
  return (
    <Container>
      <GlobalStyles />
      <Navbar />
    </Container>
  );
}

export default App;
