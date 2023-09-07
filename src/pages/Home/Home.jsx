import React from 'react';
import { Navbar } from '../../components';
import { Container } from '../../globalStyles';
import { Hero } from '../../layout';

const Home = () => {
  return (
    <Container>
      <Navbar />
      <Hero />
    </Container>
  );
};

export default Home;
